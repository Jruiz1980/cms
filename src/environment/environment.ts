// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FirebaseOptions } from "@angular/fire/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyDIhSqNWi_Gr5qLOj9pEoCeR9CoAoQ0xM8",
    authDomain: "wdd-project-ecdc5.firebaseapp.com",
    databaseURL: "https://wdd-project-ecdc5-default-rtdb.firebaseio.com",
    projectId: "wdd-project-ecdc5",
    storageBucket: "wdd-project-ecdc5.appspot.com",
    messagingSenderId: "404702727551",
    appId: "1:404702727551:web:c74f1a2f478a5625f71e4a",
    measurementId: "G-ZNE2Q7HXNF"
};


export const Environment  = {firebaseConfig}