// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUcAmPwGfViOOt3R5erEWSQTaaco6s",
  authDomain: "raakesh-firebase.firebaseapp.com",
  projectId: "raakesh-firebase",
  storageBucket: "raakesh-firebase.appspot.com",
  messagingSenderId: "189392793008",
  appId: "1:189092793208:web:0ef909252553ef10324975",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // app passes in getAuth()
