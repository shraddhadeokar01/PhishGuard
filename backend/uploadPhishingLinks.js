const admin = require('firebase-admin');
const axios = require('axios');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://phishguard-78f53-default-rtdb.firebaseio.com',
});

const db = admin.database();
const ABUSE_CSV_URL = 'https://urlhaus.abuse.ch/downloads/csv_recent/';
const TEMP_FILE = path.join(__dirname, 'urlhaus.csv');

async function downloadCSV() {
  const response = await axios({
    method: 'GET',
    url: ABUSE_CSV_URL,
    responseType: 'stream',
  });

  const writer = fs.createWriteStream(TEMP_FILE);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

function uploadToFirebase() {
  const phishingLinksRef = db.ref('phishing_links');
  const entries = [];
  let parsedCount = 0;

  const customHeaders = [
    'id', 'dateadded', 'url', 'url_status', 'threat', 'tags', 'urlhaus_link', 'reporter'
  ];

  fs.createReadStream(TEMP_FILE)
    .pipe(csv({ separator: ',', headers: customHeaders, skipLines: 9 }))
    .on('data', (row) => {
      if (!row.url || row.url.startsWith('#')) return;

      console.log('Parsed Row:', row); // DEBUG

      const entry = {
        date_added: row.dateadded,
        url: row.url,
        threat: row.threat,
        status: row.url_status,
        tags: row.tags,
        reporter: row.reporter,
      };

      entries.push(entry);
      parsedCount++;
    })
    .on('end', async () => {
      console.log(`✅ Total entries parsed: ${parsedCount}`);
      for (let entry of entries) {
        const key = Buffer.from(entry.url).toString('base64');
        await phishingLinksRef.child(key).set(entry);
      }
      console.log('✅ Upload complete!');
    });
}

(async () => {
  try {
    console.log('⬇ Downloading CSV...');
    await downloadCSV();
    console.log('⬆ Uploading to Firebase...');
    uploadToFirebase();
  } catch (error) {
    console.error('❌ Error:', error);
  }
})();