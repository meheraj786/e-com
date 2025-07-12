// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNsVBU7so-AzFB37k9wPA7oZes78TbCrs",
  authDomain: "e-com-f2c65.firebaseapp.com",
  projectId: "e-com-f2c65",
  storageBucket: "e-com-f2c65.firebasestorage.app",
  messagingSenderId: "734274543685",
  appId: "1:734274543685:web:fee8e9b0ae34efdfea832c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
