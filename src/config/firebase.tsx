/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1pevLZhOYsTULyQAs7lQEaAO8GCnjjgk",
  authDomain: "scissors-a5192.firebaseapp.com",
  databaseURL: "https://scissors-a5192-default-rtdb.firebaseio.com",
  projectId: "scissors-a5192",
  storageBucket: "scissors-a5192.appspot.com",
  messagingSenderId: "32794036847",
  appId: "1:32794036847:web:2be7a96f1991d05ddc9b9a",
  measurementId: "G-E2G5KWPVRR",
};

const app = initializeApp(firebaseConfig);
export const db = () => getFirestore(app);
export const database = getAuth(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
