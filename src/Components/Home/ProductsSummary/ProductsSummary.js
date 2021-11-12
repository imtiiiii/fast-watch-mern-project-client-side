import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../Shared/Product/Product';

const ProductsSummary = () => {
    let key = 1;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setProducts(res.data))
    }, [])
    // console.log(products);
    return (
        <Box
            sx={{ border: 2, mb: 5 }}
            style={{ backgroundColor: "#04091e" }}
        >
            <Container sx={{ my: 8, borderRadius: 16, boxShadow: 3 }}>
                <Grid container spacing={4}>
                    {
                        products.map(product => <Product key={key++} product={product}></Product>)
                    }
                </Grid>
            </Container>

        </Box>
    );
};

export default ProductsSummary;