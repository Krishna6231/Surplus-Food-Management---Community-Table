// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzp6oTq8BMF-0P5hvwKYN88u6pHEXpysU",
  authDomain: "minor-e330d.firebaseapp.com",
  projectId: "minor-e330d",
  storageBucket: "minor-e330d.appspot.com",
  messagingSenderId: "524378266711",
  appId: "1:524378266711:web:046d22b459d9ff8768d712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
