import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        //  For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyDeE1Jc8q6KNCQ4GTzF22twtiDQS-nFpTg",
        authDomain: "clone-e5f75.firebaseapp.com",
        projectId: "clone-e5f75",
        storageBucket: "clone-e5f75.appspot.com",
        messagingSenderId: "987137676276",
        appId: "1:987137676276:web:c902428d61e3687f161fa1",
        measurementId: "G-E89F5028SE"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
