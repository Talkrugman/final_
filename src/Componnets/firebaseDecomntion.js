// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkUgZt1GtbZrDM594zNzYUnip6qMipMc",
  authDomain: "my-final-demo.firebaseapp.com",
  projectId: "my-final-demo",
  storageBucket: "my-final-demo.appspot.com",
  messagingSenderId: "545437092730",
  appId: "1:545437092730:web:679cda6b223fdb32bda4c3",
  measurementId: "G-9Y1SRQVBJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);