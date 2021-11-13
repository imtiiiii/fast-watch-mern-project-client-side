import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleReview from '../../Home/SingleReview/SingleReview';

const Reviews = () => {
    let key = 1;
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/reviews")
            .then(res => setReviews(res.data))
    }, [])
    console.log(reviews)
    return (
        <Box sx={{ border: 1, my: 5, py: 2 }} style={{ height: "100vh" }}>
            <Typography component="div" variant="h3" sx={{ my: 3, py: 4 }}>Review from our valueable customers</Typography>
            <Container>
                <Grid container spacing={3}>


                    {
                        reviews.map(review => <SingleReview key={key++} review={review}></SingleReview>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;