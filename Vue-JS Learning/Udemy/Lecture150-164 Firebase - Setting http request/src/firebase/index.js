import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0qBfgO_2xdjb9BW35k480N945o5dPvTw",
  authDomain: "rating-app-f2e61.firebaseapp.com",
  projectId: "rating-app-f2e61",
  storageBucket: "rating-app-f2e61.appspot.com",
  messagingSenderId: "50427796579",
  appId: "1:50427796579:web:5f50bd6bf2c252ddf7ec56"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };