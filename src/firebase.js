// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseapp = firebase.initializeApp({

    apiKey: "AIzaSyBpIKPyIQR97xVkd4R_bxkks_HMWUw0VCM",
    authDomain: "personal-blogger-5f573.firebaseapp.com",
    projectId: "personal-blogger-5f573",
    storageBucket: "personal-blogger-5f573.appspot.com",
    messagingSenderId: "1095329876673",
    appId: "1:1095329876673:web:d8a81906e5560a8436e240",
    measurementId: "G-17QPBK7KFD"
});
const db = firebase.firestore();
export default db;