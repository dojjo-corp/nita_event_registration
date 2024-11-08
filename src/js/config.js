import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvOKkfas7QrQcQJNjfdcWzi_oplVtLG9c",
  authDomain: "nita-event.firebaseapp.com",
  projectId: "nita-event",
  storageBucket: "nita-event.appspot.com",
  messagingSenderId: "976565851177",
  appId: "1:976565851177:web:4a665ea1a1a5b9a202f838",
  measurementId: "G-GHG37ZMEGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);