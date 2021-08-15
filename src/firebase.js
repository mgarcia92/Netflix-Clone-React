import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDr5iMCB92qYze4_PG8rsfrlGsnDqmu-ck",
    authDomain: "my-project-1538540927646.firebaseapp.com",
    projectId: "my-project-1538540927646",
    storageBucket: "my-project-1538540927646.appspot.com",
    messagingSenderId: "783349677554",
    appId: "1:783349677554:web:32c31f4b77aa00b84e7f6b"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
  db,
  auth
}
