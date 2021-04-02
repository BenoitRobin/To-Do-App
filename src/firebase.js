import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB5HxZzyM6Rny1-kHJBxc5KHTelD_seGUE",
    authDomain: "todolist-app-9b25f.firebaseapp.com",
    databaseURL: "https://todolist-app-9b25f-default-rtdb.firebaseio.com",
    projectId: "todolist-app-9b25f",
    storageBucket: "todolist-app-9b25f.appspot.com",
    messagingSenderId: "192099295200",
    appId: "1:192099295200:web:3381d63aec057efab55585",
    measurementId: "G-MNYLBPM1YW"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();