import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const SingleReview = (props) => {
    const review = props.review
    return (
        <>
            <Grid item lg={4}   >
                <Paper elevation={2} sx={{}} style={{ height: "200px" }}>
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