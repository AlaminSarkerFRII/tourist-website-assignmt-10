// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB14-UPggrYL1QJSWm5ak7qpL5LN1IHMNs",
  authDomain: "visit-world-with-me.firebaseapp.com",
  projectId: "visit-world-with-me",
  storageBucket: "visit-world-with-me.appspot.com",
  messagingSenderId: "597639758078",
  appId: "1:597639758078:web:19bdf808905100466a25af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
