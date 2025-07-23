
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAa-upTv17PXux1dQI06aL0xT-MG_I-VkI',
  authDomain: 'phishguard-78f53.firebaseapp.com',
  databaseURL: 'https://shraddha-d9a87-default-rtdb.firebaseio.com',
  projectId: 'phishguard-78f53',
  storageBucket: 'phishguard-78f53.appspot.com',
  messagingSenderId: '447329955060',
  appId: '1:447329955060:android:50f51c5252a6bc4b5d02a1',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebaseConfig;
