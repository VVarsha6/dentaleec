// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH0f92fxgBr0_zNcTO7sVqB060-bUULtk",
  authDomain: "dental-db-d7f86.firebaseapp.com",
  projectId: "dental-db-d7f86",
  storageBucket: "dental-db-d7f86.appspot.com",
  messagingSenderId: "307595672976",
  appId: "1:307595672976:web:62c510b4e5e8dd6fd48715",
  measurementId: "G-GPC52ZJ2L5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
