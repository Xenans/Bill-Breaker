// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi3IYV9ENZ7tuIRw8v24hEa_fB6vj12kg",
  authDomain: "bill-breakers-development.firebaseapp.com",
  projectId: "bill-breakers-development",
  storageBucket: "bill-breakers-development.appspot.com",
  messagingSenderId: "62743351549",
  appId: "1:62743351549:web:89639f35d3c858cc1cae94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email,password) {
    createUserWithEmailAndPassword(auth, email, password);
}

export function login(email,password) {
    signInWithEmailAndPassword(auth, email, password);
}

// Custom Hook
export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, []);
    return currentUser;
}