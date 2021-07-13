// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    
    authDomain: "clone-3ba8d.firebaseapp.com",
    projectId: "clone-3ba8d",
    storageBucket: "clone-3ba8d.appspot.com",
    messagingSenderId: "1089951731016",
    appId: "1:1089951731016:web:49d93cec5be52f8cb1377d",
    measurementId: "G-VP5737LBSB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }