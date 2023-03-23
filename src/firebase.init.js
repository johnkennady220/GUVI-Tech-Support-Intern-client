// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMNq9LC-YO1gdyXeixg32Kf75NEIOufhc",
    authDomain: "guvitechsupport.firebaseapp.com",
    projectId: "guvitechsupport",
    storageBucket: "guvitechsupport.appspot.com",
    messagingSenderId: "856530897538",
    appId: "1:856530897538:web:771936eea363cf6ee6029b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;