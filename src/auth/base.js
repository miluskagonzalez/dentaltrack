import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCaH9X1SW2ks_4EiRtxaU_UuJze8Rj4Sj4",
    authDomain: "dentaltrackpt.firebaseapp.com",
    databaseURL: "https://dentaltrackpt.firebaseio.com",
    projectId: "dentaltrackpt",
    storageBucket: "",
    messagingSenderId: "945431541755",
    appId: "1:945431541755:web:305d1114561091971cbd5e"
});

export default app;