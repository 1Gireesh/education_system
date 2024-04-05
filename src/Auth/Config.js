// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZk4fLW0qiAca7OPU3fwvs5h1kYFlJtSE",
    authDomain: "educational-software-e039b.firebaseapp.com",
    projectId: "educational-software-e039b",
    storageBucket: "educational-software-e039b.appspot.com",
    messagingSenderId: "2615773641",
    appId: "1:2615773641:web:f388103d98e91275e30018",
    measurementId: "G-XBZSPTGV81"
};

// Initialize Firebase
export const fireStore = initializeApp(firebaseConfig);
export const auth = getAuth(fireStore);
export const db = getFirestore(fireStore);
export const provider = new GoogleAuthProvider();