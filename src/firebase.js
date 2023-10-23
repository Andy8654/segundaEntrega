/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1wny5o3ejwoMaFPE9hjO6WaXbzNLvnJU",
  authDomain: "reactjs-7ce82.firebaseapp.com",
  projectId: "reactjs-7ce82",
  storageBucket: "reactjs-7ce82.appspot.com",
  messagingSenderId: "1025179691954",
  appId: "1:1025179691954:web:1b1805f95fc32c935692ab",
  measurementId: "G-NKHYCPB567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);