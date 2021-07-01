import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyC8QZRBkefKadRr5jYtbOYbkEj7gK5pk",
  authDomain: "twitter-clone-4303d.firebaseapp.com",
  projectId: "twitter-clone-4303d",
  storageBucket: "twitter-clone-4303d.appspot.com",
  messagingSenderId: "735897491548",
  appId: "1:735897491548:web:4e4a9b687fb06ce61f6e99",
  measurementId: "G-YW5DFDCLH9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
