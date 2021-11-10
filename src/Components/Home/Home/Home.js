// home component
import { Toolbar, Typography } from '@mui/material';
import React from 'react';
import Header from '../../Header/Header/Header';
import Navigation from '../../Shared/Navigation/Navigation';
import FocusedProduct from '../FocusedProduct/FocusedProduct';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FocusedProduct></FocusedProduct>
        </div>
    );
};

export default Home;