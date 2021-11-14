import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const SingleReview = (props) => {
    const review = props.review
    return (
        <>
            <Grid item lg={4}   >
                <Paper elevation={6} sx={{ m: 5, px: 5, py: 3, textAlign: "left" }} style={{ height: "250px", backgroundColor: "#f4f4ff" }}>
                    <Typography variant="h5">
                        {review.name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {review.review}
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
};

export default SingleReview;