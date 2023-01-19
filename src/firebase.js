// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdaGTaN2quvLdfLDkVW_eY8Oo2_KNwrxY",
  authDomain: "runforwater2023.firebaseapp.com",
  projectId: "runforwater2023",
  storageBucket: "runforwater2023.appspot.com",
  messagingSenderId: "86407176271",
  appId: "1:86407176271:web:5f05c5670993ed5c9e8a3a",
  measurementId: "G-JCDJQK5FMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};