import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAf802PhA50r3xTRoE7APOxHd6GzKpsYkU",
  authDomain: "loginpage-36c18.firebaseapp.com",
  projectId: "loginpage-36c18",
  storageBucket: "loginpage-36c18.appspot.com",
  messagingSenderId: "765803747492",
  appId: "1:765803747492:web:5faccd76a7e5ccb6542e31",
  measurementId: "G-JFS8RXWWZB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth, projectFireStore, projectStorage };
