// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBSZ9F5vMhb7DDd2o-sFYfuI3cLZSRt34",
  authDomain: "dental-db-1e267.firebaseapp.com",
  projectId: "dental-db-1e267",
  storageBucket: "dental-db-1e267.appspot.com",
  messagingSenderId: "413571927055",
  appId: "1:413571927055:web:11fe175d9c416ccd74a77a",
  measurementId: "G-RTJMQFXWY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);