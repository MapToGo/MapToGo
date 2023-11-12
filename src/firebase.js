// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZvgdAgu3S3F_mH0jAWD6_H42uPdaoegk",
  authDomain: "maptogo-sw.firebaseapp.com",
  projectId: "maptogo-sw",
  storageBucket: "maptogo-sw.appspot.com",
  messagingSenderId: "221112135439",
  appId: "1:221112135439:web:2c83f0de0dd46741dad87a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export{db}