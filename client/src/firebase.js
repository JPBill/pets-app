// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'pets-app-b3762.firebaseapp.com',
  projectId: 'pets-app-b3762',
  storageBucket: 'pets-app-b3762.appspot.com',
  messagingSenderId: '668835826569',
  appId: '1:668835826569:web:fcaf4b6b63e80b2fa32f58',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
