// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence,initializeAuth}from 'firebase/auth';
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore,collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOy7xqJ3dGLsGP759W6-UIoQJaa3ZI75M",
  authDomain: "perfume-fd840.firebaseapp.com",
  projectId: "perfume-fd840",
  storageBucket: "perfume-fd840.appspot.com",
  messagingSenderId: "497291749605",
  appId: "1:497291749605:web:27c27e751f6a6d819c4c0c",
  measurementId: "G-8TRX1RP2JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth =initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const usersRef =collection(db,'users');
export const AdminRef =collection(db,'Admin');
export const productRef =collection(db,'product');
