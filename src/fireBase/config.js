import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Web App's Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoYqf31Uk_t_SD9OUUIkLqNs_Xzsva1No",
  authDomain: "upliance-project-51a37.firebaseapp.com",
  projectId: "upliance-project-51a37",
  storageBucket: "upliance-project-51a37.firebasestorage.app",
  messagingSenderId: "179089076255",
  appId: "1:179089076255:web:dee1c5c507825a9905652a"
};

// Initialize Firebase Config
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);