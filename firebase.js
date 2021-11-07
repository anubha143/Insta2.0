// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5LhVQXGAYIXyaPHa8hJD7tNVwzRsKR0c",
  authDomain: "instaa2.firebaseapp.com",
  projectId: "instaa2",
  storageBucket: "instaa2.appspot.com",
  messagingSenderId: "779619197204",
  appId: "1:779619197204:web:80780c9b59e95068232201",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
