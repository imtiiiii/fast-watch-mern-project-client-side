import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const { user } = useAuth();
    const emailRef = useRef();
    console.log(emailRef)


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        axios.put("https://salty-lowlands-53344.herokuapp.com/users/all", { email: email })
            .then(res => console.log(res))
        document.makeadmin.reset();
    }
    return (
        <Box style={{ height: "100vh", width: "100%" }} sx={{ border: 2, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
        >
            <Typography container="div" variant="h2" sx={{ letterSpacing: 3 }}>
                Make Admin
            </Typography>
            <Container sx={{ width: 1, my: 5, py: 10 }}>
                <form name="makeadmin" onSubmit={handleSubmit}>
                    <input type="email" placeholder="new admin's email" ref={emailRef} style={{ width: "40%", height: "60px", padding: "10px 20px 10px 20px" }}></input>
                    <input type="submit" style={{ width: "15%", height: "60px", padding: "10px 10px", margin: "0 10px" }}></input>
                </form>
            </Container>

        </Box>
    );
};

export default MakeAdmin;