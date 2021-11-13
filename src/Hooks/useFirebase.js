import React, { useEffect, useState } from 'react';
import initFirebase from '../Firebase/Firebase.init'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useHistory } from 'react-router';
import { Alert } from '@mui/material';
import axios from 'axios';
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
    // decide whether user is admin or not


    const auth = getAuth();
    const CreateAccountWithEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setIsloading("true");
                // setUser(result.user);
                // a function will be called to store the user in our db
                saveUsers(result.user.email)
                setIsloading("false");
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
                setIsloading("true");


                setIsloading("false");
                setAuthStatus("Sucessfull");
                // checkAdmin();
            })
            .catch((error) => {
                if (isLoading === false) {
                    setAuthStatus("Something Went Wrong ! Try again");
                }
            });
    }

    useEffect(() => {
        setIsloading("true")
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsloading("false")
            } else {
                setUser(null);
                setIsloading("false")
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
    // ---------------------------------------------------------------
    // function to save user to our db
    const saveUsers = (email) => {
        axios.post("http://localhost:5000/users", { email: email })
            .then()
    }
    const [isAdmin, setIsAdmin] = useState(false)
    // // keep user information from your own db
    const [userDb, setUserDb] = useState({})
    useEffect(() => {

        axios.get(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => {
                if (res?.data?.role === "admin") setIsAdmin(true);
                else setIsAdmin(false);
            })
    }, [user])

    // if (userDb?.role === "admin") setIsAdmin(true)
    // else setIsAdmin(false);

    return {
        user,
        loginWithEmailPass,
        authStatus,
        CreateAccountWithEmailPass,
        handleLogout,
        isLoading,
        isAdmin
    }
}
export default useFirebase;