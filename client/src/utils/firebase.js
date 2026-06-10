
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "interview-agent-954f7.firebaseapp.com",
  projectId: "interview-agent-954f7",
  storageBucket: "interview-agent-954f7.firebasestorage.app",
  messagingSenderId: "617431884609",
  appId: "1:617431884609:web:8c7e30290e7b58bb90b7c0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}