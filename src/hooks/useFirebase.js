import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut,
        signUpWithEmail,
        setUserName,
        signInUsingEmail
    }
};

export default useFirebase;