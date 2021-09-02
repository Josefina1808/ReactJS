// Initialize Cloud Firestore through Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDgBEC45VQ0m8oDedv2r5OK9keAXhGRQj8",
    authDomain: "reactjs-37489.firebaseapp.com",
    projectId: "reactjs-37489",
    storageBucket: "reactjs-37489.appspot.com",
    messagingSenderId: "786202238254",
    appId: "1:786202238254:web:8aa348f559f94ad6716ebf",
};

firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore();
