// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCA3MsMTJU8QlaLrCov6Syq3mNphO1fX9E",
  authDomain: "clone-helen.firebaseapp.com",
  projectId: "clone-helen",
  storageBucket: "clone-helen.appspot.com",
  messagingSenderId: "325894149135",
  appId: "1:325894149135:web:b89ba071dd601621593f7a",
  // measurementId: "G-EVJVBNZR84",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
