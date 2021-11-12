// home component
import { Toolbar, Typography } from '@mui/material';
import React from 'react';
import Header from '../../Header/Header/Header';
import Navigation from '../../Shared/Navigation/Navigation';
import FeatureOfNewWatch from '../FeatureOfNewWatch/FeatureOfNewWatch';
import FocusedProduct from '../FocusedProduct/FocusedProduct';
import ProductsSummary from '../ProductsSummary/ProductsSummary';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FocusedProduct></FocusedProduct>
            <FeatureOfNewWatch></FeatureOfNewWatch>
            <ProductsSummary></ProductsSummary>
        </div>
    );
};

export default Home;