// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_gVQRpr1lOzXlGtaFf6V-h45bwkL9TT4",
  authDomain: "upliance-12ac4.firebaseapp.com",
  projectId: "upliance-project-57b36",
  storageBucket: "upliance-project-57b36.appspot.com",
  messagingSenderId: "417061680349",
  appId: "1:417061680349:web:f6d13cdfe2df6259011734"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);