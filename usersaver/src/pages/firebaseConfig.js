
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
    apiKey: "AIzaSyCE-_lwGTuAx-PKBXt-ee68GFTUfifdmaY",
    authDomain: "registerfirebase-f4b71.firebaseapp.com",
    projectId: "registerfirebase-f4b71",
    storageBucket: "registerfirebase-f4b71.appspot.com",
    messagingSenderId: "675655220516",
    appId: "1:675655220516:web:b400dcccae6c3aa95307b1",
    measurementId: "G-G7L0BRVHTK"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;