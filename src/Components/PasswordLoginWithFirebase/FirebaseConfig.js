// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const database = getAuth(app);

export { app, database }