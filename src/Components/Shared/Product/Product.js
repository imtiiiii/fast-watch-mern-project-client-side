import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = (props) => {
    const { name, info, price, img } = props.product;
    return (
        <Grid item lg={4}>
            <Card sx={{ maxWidth: 345 }}>

                <CardMedia
                    component="img"
                    height="300"
                    image={img}
                    alt="Paella dish"
                />

                {/* <div>

                    <img src={img} alt="pic"></img>
                </div> */}
                <CardContent sx={{ textAlign: "left", boxShadow: 1 }}
                    style={{ height: "250px", backgroundColor: "#f9f9ff" }}

                >
                    <Typography gutterBottom variant="h5" component="div" sx={{ letterSpacing: 3, mb: 2 }}>
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {info}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{ backgroundColor: "#f9f9ff" }}
                    sx={{ boxShadow: 1 }}
                >
                    <Button size="large" style={{ color: "black" }}>${price}</Button>
                    <Button size="large" style={{ color: "black" }}>Buy</Button>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Product;