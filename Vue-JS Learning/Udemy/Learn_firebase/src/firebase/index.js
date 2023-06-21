import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCVpJEGiBdRe98DS_cJZ065DovlWNa9RHY',
  authDomain: 'todo-list-6f504.firebaseapp.com',
  projectId: 'todo-list-6f504',
  storageBucket: 'todo-list-6f504.appspot.com',
  messagingSenderId: '840912848594',
  appId: '1:840912848594:web:8f129e495faeb8e2384f0b'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };