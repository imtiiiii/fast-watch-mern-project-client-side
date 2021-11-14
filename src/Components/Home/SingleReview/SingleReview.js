import { Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const SingleReview = (props) => {
    const review = props.review

    let rating = parseInt(review?.rating);
    if (rating < 0) rating = 0;
    if (rating > 5) rating = 5;
    // setRatingValue(rating)

    return (
        <>
            <Grid item lg={4}   >
                <Paper elevation={6} sx={{ m: 5, px: 5, py: 3, textAlign: "left" }} style={{ height: "350px", backgroundColor: "#f4f4ff" }}>
                    <Box style={{ height: "250px" }}>
                        <Typography variant="h5">
                            {review.name}
                        </Typography>
                        <Typography variant="subtitle1">
                            {review.review}
                        </Typography>
                    </Box>
                    <Rating name="read-only" value={rating} readOnly />
                </Paper>
            </Grid>
        </>
    );
};

export default SingleReview;