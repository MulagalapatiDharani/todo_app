import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAe3k9UzGSOZAMsE1ZZE_UlCC_3J_lc1_o",
    authDomain: "todo-app-cp-cfd4a.firebaseapp.com",
    projectId: "todo-app-cp-cfd4a",
    storageBucket: "todo-app-cp-cfd4a.appspot.com",
    messagingSenderId: "708352425301",
    appId: "1:708352425301:web:fe9f88679d542f0ec043dc",
    measurementId: "G-N6ETV0545T"  
});

const db = firebaseApp.firestore();

export default db;


