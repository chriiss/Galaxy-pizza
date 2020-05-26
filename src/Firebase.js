import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "galaxy-pizza-e3824.firebaseapp.com",
    databaseURL: "https://galaxy-pizza-e3824.firebaseio.com",
    projectId: "galaxy-pizza-e3824",
    storageBucket: "galaxy-pizza-e3824.appspot.com",
    messagingSenderId: "936434239701",
    appId: "1:936434239701:web:a4e3a5f44a9fda125cba5c"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const firebaseAuth = firebase.auth();
export const dbRef = db.collection('menu'); //export db collection menu in firebase