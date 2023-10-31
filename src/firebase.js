/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import * as functions from 'firebase/functions'
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjwzsgZmhrunWOOdxaUhz0Qp0E7ARADKk",
  authDomain: "capstone-ce846.firebaseapp.com",
  projectId: "capstone-ce846",
  storageBucket: "capstone-ce846.appspot.com",
  messagingSenderId: "680459419723",
  appId: "1:680459419723:web:5bd056ce5b179fb42a8dce",
  measurementId: "G-CP9TK50H35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

const createStripeCustomer = functions.httpsCallable("createStripeCustomer")
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export {createStripeCustomer}