import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArhIXDiFut8j6aFjuLco8QfqWB1xhsii8",
  authDomain: "newsfeed-trial.firebaseapp.com",
  projectId: "newsfeed-trial",
  storageBucket: "newsfeed-trial.appspot.com",
  messagingSenderId: "567366759504",
  appId: "1:567366759504:web:decaa5097c9cbcc9418d55",
  measurementId: "G-ETJWLZ96GX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
