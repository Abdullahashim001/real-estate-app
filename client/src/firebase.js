// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-2ccb8.firebaseapp.com",
  projectId: "real-estate-app-2ccb8",
  storageBucket: "real-estate-app-2ccb8.appspot.com",
  messagingSenderId: "163651028764",
  appId: "1:163651028764:web:1de42ff3bc2c66aa98dcd9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);