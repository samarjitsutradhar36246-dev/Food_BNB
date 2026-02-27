// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnOMUqbAdM8yS2TPR5G_jwPR_sdYusm4w",
  authDomain: "foodbnb-b6993.firebaseapp.com",
  projectId: "foodbnb-b6993",
  storageBucket: "foodbnb-b6993.firebasestorage.app",
  messagingSenderId: "553828899686",
  appId: "1:553828899686:web:dbdfd741d94f64095686a7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);