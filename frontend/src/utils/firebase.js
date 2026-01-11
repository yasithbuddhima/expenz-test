// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
  authDomain: "testexpenzproject.firebaseapp.com",
  projectId: "testexpenzproject",
  storageBucket: "testexpenzproject.firebasestorage.app",
  messagingSenderId: "709268108546",
  appId: "1:709268108546:web:e8d39e1465e49dc65ffe1b",
  measurementId: "G-9XP9GR3ETC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
