import { Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../Shared/Product/Product';


const ManageOrders = () => {
    let key = 1;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://salty-lowlands-53344.herokuapp.com/products/explore")
            .then(res => setProducts(res.data))
    }, [])
    return (
        <>

            <Box
                // style={
                //     {


                //         backgroundImage: `url(${bgimg})`,
                //         backgroundPosition: "center",
                //         backgroundRepeat: "no repeat", backgroundSize: "cover"
                //     }
                // }
                sx={{ width: 1 }}
            >

                <Container sx={{ borderRadius: 16, boxShadow: 3 }}>
                    <Typography container="div" variant="h2" sx={{
                        letterSpacing: 3, color: grey.A400, my: 3, py: 3
                    }}>
                        Manage Orders
                    </Typography>
                    <Grid container spacing={4}>
                        {
                            products.map(product => <Product key={key++} product={product} role={"admin"}></Product>)
                        }
                    </Grid>

                </Container>

            </Box >
        </>
    );
};

export default ManageOrders;