import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bgimg from '../../img/explorebg2.jpg'
const ExploreProducts = () => {
    return (
        <Box
            style={
                {
                    height: "100vh",

                    backgroundImage: `url(${bgimg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no repeat", backgroundSize: "cover"
                }
            }
        >
            <Container>
                <Typography component="div" variant="h2" sx={{ letterSpacing: 4, color: "white" }}>
                    Explore Our Products
                </Typography>

            </Container>

        </Box >
    );
};

export default ExploreProducts;