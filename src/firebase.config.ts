// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFyeQyC4E2fkq_rzR9TV-IfxBsnVXY1Tk",
  authDomain: "ubereat-2a258.firebaseapp.com",
  projectId: "ubereat-2a258",
  storageBucket: "ubereat-2a258.appspot.com",
  messagingSenderId: "162215657619",
  appId: "1:162215657619:web:ed9f601370bf0cb89ecd66",
  measurementId: "G-4VXR1D16VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);