const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://phishguard-78f53-default-rtdb.firebaseio.com',
});

const db = admin.database();

const rawData = fs.readFileSync('./phishing_tips_1000.json');
const tipsData = JSON.parse(rawData);

async function uploadTips() {
  const ref = db.ref('phishing_tips');

  for (const tip of tipsData.tips) {
    await ref.child(tip.id).set({
      title: tip.title,
      description: tip.description
    });
  }

  console.log('✅ Tips uploaded to Firebase without replacing anything else!');
}

uploadTips().catch(console.error);
