// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyybroq34Y6ld_guwcpox0GIW60yUO_qc",
  authDomain: "pruebasconnext.firebaseapp.com",
  projectId: "pruebasconnext",
  storageBucket: "pruebasconnext.firebasestorage.app",
  messagingSenderId: "682215427846",
  appId: "1:682215427846:web:db8595dd125f7cf5f79887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);