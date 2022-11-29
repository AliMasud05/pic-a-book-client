// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzwF7ZOgrPzMvknc3fYL11KUoDq8coz6U",
    authDomain: "pick-a-book-b0be3.firebaseapp.com",
    projectId: "pick-a-book-b0be3",
    storageBucket: "pick-a-book-b0be3.appspot.com",
    messagingSenderId: "305234120229",
    appId: "1:305234120229:web:367b1c67a8026ec72ff9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;