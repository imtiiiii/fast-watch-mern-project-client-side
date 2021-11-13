import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Product = (props) => {
    const { user, isAdmin } = useAuth();
    console.log(props.role);
    let history = useHistory();
    const { name, info, price, img } = props.product;
    const handleBuy = (id) => {
        history.push(`/${id}`)
    }
    const handleDelete = () => {
        let x = window.confirm("Are you sure ?")
        if (x) {
            axios.delete(`https://salty-lowlands-53344.herokuapp.com/products/explore/${props.product._id}`)
                .then(res => console.log(res))
        }

    }
    return (
        <>
            <Grid item lg={4} xs={11} sx={{ my: 5 }}>
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
                    <CardContent sx={{ textAlign: "left", boxShadow: 1, fontWeight: 500 }}
                        style={{ height: "250px", backgroundColor: "#f4f4ff" }}

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
                        {
                            props?.role === "admin" ? <Button size="large" onClick={handleDelete} style={{ color: "black" }}>
                                Delete
                            </Button>
                                :
                                <Button size="large" style={{ color: "black" }}
                                    onClick={() => handleBuy(props.product._id)}
                                >
                                    Buy
                                </Button>
                        }

                    </CardActions>
                </Card>
            </Grid >

        </>
    );
};

export default Product;