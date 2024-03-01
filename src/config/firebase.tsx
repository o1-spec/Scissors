/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL8oXbL1abFe938RZ3627UW95AgO_4Qsk",
  authDomain: "scissorsnew-e1bb1.firebaseapp.com",
  projectId: "scissorsnew-e1bb1",
  storageBucket: "scissorsnew-e1bb1.appspot.com",
  messagingSenderId: "797730633116",
  appId: "1:797730633116:web:62bc8bce63bfee7b998459",
  measurementId: "G-2776N7KZNP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = () => getFirestore(app);
export const database = getAuth(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
