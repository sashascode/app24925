import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC86s9WWUh1FJM0dirkGyqAB9wQL6Mzx4o",
  authDomain: "imarket-24925.firebaseapp.com",
  projectId: "imarket-24925",
  storageBucket: "imarket-24925.appspot.com",
  messagingSenderId: "1080378061463",
  appId: "1:1080378061463:web:8bdb560127f8070c856fd2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);