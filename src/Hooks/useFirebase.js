import React, { useEffect, useState } from 'react';
import initFirebase from '../Firebase/Firebase.init'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useHistory } from 'react-router';
import { Alert } from '@mui/material';
initFirebase();
const useFirebase = () => {
    /* 
        A state to keep the user after login or registration
    */
    const [user, setUser] = useState(null);
    // -------------------------------------------------------
    // A state to set the login/reg status
    // it will send info about whether the user login/logout/reg attempt was successfull or not
    const [authStatus, setAuthStatus] = useState('');
    // ------------------------------------------------
    // A STATE TO DECIDE WHETHER IT IS LOADING OR NOT 
    // *initially the state will be null 
    // * then if the user do any activity of login/logout/reg it will be true
    // *after the data gets loaded the state will be false
    const [isLoading, setIsloading] = useState(null);

    const auth = getAuth();
    const CreateAccountWithEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setIsloading(true);
                setUser(result.user);
                setIsloading(false);
                setAuthStatus("Sucessfull");

            })
            .catch((error) => {
                if (isLoading === false) {
                    console.log(error.message);
                    setAuthStatus("Something Went Wrong ! Try again");
                }

            });
    }
    // this fucntion for= login with email and password
    const loginWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setIsloading(true);
                setUser(result.user);
                setIsloading(false);
                setAuthStatus("Sucessfull");
            })
            .catch((error) => {
                if (isLoading === false) {
                    setAuthStatus("Something Went Wrong ! Try again");
                }
            });
    }
    // fucntion for google sign in 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, [])
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {
            alert("Try again");
        });
    }
    return {
        user,
        loginWithEmailPass,
        authStatus,
        CreateAccountWithEmailPass,
        handleLogout,
        isLoading
    }
}
export default useFirebase;