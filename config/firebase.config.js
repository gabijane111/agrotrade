import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_hxjX2j9BcXqrsk3-PzqbNXEs9yT2Ung",
  authDomain: "neat-gasket-406815.firebaseapp.com",
  projectId: "neat-gasket-406815",
  storageBucket: "neat-gasket-406815.appspot.com",
  messagingSenderId: "207218858719",
  appId: "1:207218858719:web:d95674c12483b52021e76a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage }