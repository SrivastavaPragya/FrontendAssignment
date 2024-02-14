import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR4g236k15qbNbiv3BFkVJbWGYoQ20MCE",
  authDomain: "frontendproject-f0f1a.firebaseapp.com",
  projectId: "frontendproject-f0f1a",
  storageBucket: "frontendproject-f0f1a.appspot.com",
  messagingSenderId: "896139632416",
  appId: "1:896139632416:web:29feb1ea2f78cc6f390145",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { googleProvider, auth };
