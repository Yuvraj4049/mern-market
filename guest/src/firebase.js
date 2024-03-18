// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-29c07.firebaseapp.com",
  projectId: "mern-estate-29c07",
  storageBucket: "mern-estate-29c07.appspot.com",
  messagingSenderId: "750084572831",
  appId: "1:750084572831:web:5cdc1158a48ec3e28284aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);