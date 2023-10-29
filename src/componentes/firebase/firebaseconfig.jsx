import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBilNj9jmY-1AbVuWaHt-FFE5ZXPnYkxAw",
  authDomain: "chapas-id.firebaseapp.com",
  projectId: "chapas-id",
  storageBucket: "chapas-id.appspot.com",
  messagingSenderId: "1039589227825",
  appId: "1:1039589227825:web:8ff9c72b185a20d2064410"
};


const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp); // Crea una instancia de Firestore

export { db, firebaseapp }