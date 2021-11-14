import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleReview from '../../Home/SingleReview/SingleReview';
import bg from '../../../img/reviewbg2.jpg'
const Reviews = () => {
    let key = 1;
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get("https://salty-lowlands-53344.herokuapp.com/reviews")
            .then(res => setReviews(res.data))
    }, [])
    // console.log(reviews)
    return (
        <Box sx={{ my: 5, py: 2 }} style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Typography component="div" variant="h3" sx={{ my: 3, py: 4, fontWeight: "bold", letterSpacing: 3 }}>Review from our valueable customers</Typography>
            <Container maxWidth="xl" sx={{}}>
                <Grid container spacing={2}>


                    {
                        reviews.map(review => <SingleReview key={key++} review={review}></SingleReview>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;