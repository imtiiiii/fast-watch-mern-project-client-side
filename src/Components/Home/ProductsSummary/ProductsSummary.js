import { Button, Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Product from '../../Shared/Product/Product';

const ProductsSummary = () => {
    let history = useHistory();
    let key = 1;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://salty-lowlands-53344.herokuapp.com/products")
            .then(res => setProducts(res.data))
    }, [])
    const handleExploreMore = () => {

        history.push('/explore')
    }
    return (
        <Box
            sx={{ border: 2, mb: 5 }}
            style={{ backgroundColor: "#04091e" }}
        >
            <Typography container="div" variant="h2" sx={{ letterSpacing: 3, color: grey.A400, my: 3 }}>
                TAKE A GLANCE TO OUR WATCH COLLECTIONS
            </Typography>
            <Container sx={{ my: 8, borderRadius: 16, boxShadow: 3 }}>
                <Grid container spacing={4}>
                    {
                        products.map(product => <Product key={key++} product={product}>hello</Product>)
                    }
                </Grid>
                <Button variant="contained" sx={{ my: 4 }} onClick={handleExploreMore}>Explore More</Button>
            </Container>

        </Box>
    );
};

export default ProductsSummary;