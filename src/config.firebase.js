// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2FRjv0t8V3ce-dDHmJTVleu75j5Vy-YE",
    authDomain: "todolist-292bf.firebaseapp.com",
    projectId: "todolist-292bf",
    storageBucket: "todolist-292bf.appspot.com",
    messagingSenderId: "558586552025",
    appId: "1:558586552025:web:0799bb262ea85e5206e8c8",
    measurementId: "G-J87022VJJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);