// APP BAR COMPO
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';
import { Container } from '@mui/material';
import { createTheme } from '@material-ui/core';
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const { handleLogout, user } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: 5 }}>
                        Fast Watch
                    </Typography>
                    {
                        !user && <Button color="inherit"> <NavLink to="/login" style={{ textDecoration: "none", color: "black" }} > Login </NavLink> </Button>
                    }

                    <Button color="inherit"> <NavLink to="/home" style={{ textDecoration: "none", color: "black" }}> Home </NavLink> </Button>
                    <Button color="inherit"> <NavLink to="/explore" style={{ textDecoration: "none", color: "black" }}> explore </NavLink> </Button>
                    {
                        user?.email &&
                        <>
                            <Button color="inherit"> <NavLink to="/dashboard" style={{ textDecoration: "none", color: "black" }} >Dashboard</NavLink></Button>
                            <Button color="inherit" onClick={handleLogout}>logout</Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default Navigation;