import { Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import bgimg from '../../img/explorebg2.jpg'
import Navigation from '../Shared/Navigation/Navigation';
import Product from '../Shared/Product/Product';
const ExploreProducts = () => {
    let key = 1;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://salty-lowlands-53344.herokuapp.com/products/explore")
            .then(res => setProducts(res.data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Box
                style={
                    {


                        backgroundImage: `url(${bgimg})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no repeat", backgroundSize: "cover"
                    }
                }
                sx={{}}
            >
                <Typography container="div" variant="h2" sx={{ letterSpacing: 3, color: grey.A400, mb: 3 }}>
                    EXPLORE OUR PRODUCTS
                </Typography>
                <Container sx={{ borderRadius: 16, boxShadow: 3 }}>
                    <Grid container spacing={4}>
                        {
                            products.map(product => <Product key={key++} product={product}>hello</Product>)
                        }
                    </Grid>

                </Container>

            </Box >
        </>
    );
};

export default ExploreProducts;