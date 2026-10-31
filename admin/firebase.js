
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQOoQvKcdSp3TwOEeGstrug96UO7NC3jU",
  authDomain: "shaha-fashion-4018d.firebaseapp.com",
  projectId: "shaha-fashion-4018d",
  storageBucket: "shaha-fashion-4018d.firebasestorage.app",
  messagingSenderId: "260945050080",
  appId: "1:260945050080:web:552cbd7b9818a90ca45385"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
