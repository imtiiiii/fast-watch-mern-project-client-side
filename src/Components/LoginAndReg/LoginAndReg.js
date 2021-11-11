// this component will keep both login and registration field

import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const LoginAndReg = () => {
    // taking all necessary things from our useAuth custom hook
    const { CreateAccountWithEmailPass, loginWithEmailPass, handleLogout, isLoading } = useAuth();
    // -----------------------------------------------------------
    // console.log(CreateAccountWithEmailPass);
    // console.log(loginWithEmailPass);
    // keeping user all data i.e email,password,name in a single object
    const [loginData, setLoginData] = useState({});
    // ----------------------------------------------------------
    const [loginOrReg, setLoginOrReg] = useState("login")
    // -------------fucntioin after submit-------------
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (loginOrReg === 'reg') {
            if (loginData?.password !== loginData?.password2) {
                alert("password do not match , try again");
                return;
            }
            CreateAccountWithEmailPass(loginData?.email, loginData?.password)
        }
        else {
            loginWithEmailPass(loginData?.email, loginData?.password)
        }
        document.form.reset();

    }
    // --------------------------------------

    // ---------------fucntion to get input values-------------
    const inputValue = e => {
        // console.log(e.target.name, e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[name] = value;
        // console.log(newData);
        setLoginData(newData);
    }
    // ----------------------------------------------
    // functions to choose between login or registration
    const chooseReg = () => {
        setLoginOrReg("reg");

    }
    const chooseLogin = () => {
        setLoginOrReg("login");

    }
    // --------------------------------------
    return (
        <>
            <Navigation></Navigation>
            <Container maxWidth="xl"
                sx={{
                    border: 1, my: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderColor: 'grey.500', boxShadow: 1, fontStyle: 'italic', fontWeight: "bold"
                }}
                style={{
                    height: "100vh", backgroundColor: "#fafafa"
                }}
            >


                {
                    loginOrReg === 'login' ?
                        // <Grid item md={6}>
                        <Container>
                            <Box >
                                <Typography variant="h3" gutterBottom component="div" sx={{ letterSpacing: 3, textDecoration: "underline" }}>
                                    LOGIN
                                </Typography>
                            </Box>
                            <form
                                onSubmit={handleFormSubmit}
                                name="form"
                            >
                                <TextField id="standard-basic" label="EMAIL" variant="standard"
                                    name="email"
                                    type="email"
                                    onBlur={inputValue}
                                    sx={{
                                        width: "75%",
                                        m: 5
                                    }}
                                />
                                <TextField id="standard-basic2" label="PASSWORD" variant="standard"
                                    name="password"
                                    type="password"
                                    onBlur={inputValue}
                                    sx={{
                                        width: "75%",
                                        m: 5
                                    }}
                                />
                                <div>
                                    <Button variant="text" type="submit">Login</Button>
                                </div>
                            </form>
                            <Button variant="text" onClick={chooseReg} >New user? Register here.</Button>
                        </Container>
                        // else
                        :
                        <Container>
                            <Box >
                                <Typography variant="h3" gutterBottom component="div" sx={{ letterSpacing: 3, textDecoration: "underline" }} >
                                    Registration
                                </Typography>
                            </Box>
                            <form
                                onSubmit={handleFormSubmit}
                                name="form"
                            >
                                <TextField id="standard-basic" label="NAME" variant="standard"
                                    name="name"
                                    type="text"
                                    onBlur={inputValue}
                                    sx={{
                                        width: "75%",
                                        m: 5
                                    }}
                                />
                                <TextField id="standard-basic" label="EMAIL" variant="standard"
                                    name="email"
                                    type="email"
                                    onBlur={inputValue}
                                    sx={{
                                        width: "75%",
                                        m: 5
                                    }}
                                />
                                <TextField id="standard-basic2" label="PASSWORD (must be 6 or more characters)" variant="standard"
                                    name="password"
                                    type="password"

                                    onBlur={inputValue}
                                    sx={{
                                        width: "75%",
                                        m: 5
                                    }}
                                />
                                <TextField id="standard-basic2" label="Re-Type PASSWORD" variant="standard"
                                    name="password2"
                                    type="password"
                                    onBlur={inputValue}
                                    sx={{
                                        width: "75%",
                                        m: 5
                                    }}
                                />
                                <div>
                                    <Button variant="text" type="submit">Register </Button>
                                </div>
                            </form>
                            <Button variant="text" onClick={chooseLogin} >Or Login here</Button>
                        </Container>
                }

                {
                    isLoading === true &&
                    < CircularProgress />

                }
            </Container>

        </>
    );
};

export default LoginAndReg;