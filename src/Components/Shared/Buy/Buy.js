import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Buy = () => {
    const { user } = useAuth();
    const bookedId = useParams();
    const [product, setProduct] = useState({})
    const { name, info, price, img } = product;
    // console.log(bookedId)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    useEffect(() => {
        axios.get(`http://localhost:5000/products/explore/${bookedId.buy}`)
            .then(res => {
                // console.log(res.data)
                setProduct(res.data);
            })
    }, [user])
    console.log(product);
    const onSubmit = data => {
        console.log(data);

        // axios.post("http://localhost:5000/allbookings", data)
        //     .then(res => {
        //         console.log(res);
        //         reset();
        //     });

    }
    let history = useHistory();
    const handlePayNow = () => {
        history.push('/pay')
    }

    return (
        <Container style={{ backgroundColor: "#AEF2DE" }} sx={{ mt: 5, borderRadius: 12, boxShadow: 3 }}>
            <Typography container="div" variant="h2" sx={{ letterSpacing: 4, pt: 3 }} style={{ color: "teal" }}>
                Confirm Your Order
            </Typography>
            <Grid container spacing={3} >
                {
                    user?.email &&
                    <Grid item lg={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <TextField id="standard-basic" label="user name" variant="standard"
                                    sx={{ width: "50%", my: 4 }}
                                    {...register("name", { required: true })}

                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="email" variant="standard"
                                    sx={{ width: "50%", my: 4 }} defaultValue={user?.email}
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="price" variant="standard" sx={{ width: "50%", my: 4 }}
                                    {...register("price", { required: true })} />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="status" variant="standard" sx={{ width: "50%", my: 4 }}
                                    {...register("status", { required: true })} defaultValue="pending" />
                            </div>
                            <div>
                                <Button size="large" style={{ color: "black" }}
                                    onClick={handlePayNow}

                                >
                                    Pay Now
                                </Button>
                            </div>

                        </form>
                    </Grid>
                }
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


                        </CardActions>
                    </Card>
                </Grid >

            </Grid>
        </Container>
    );
};

export default Buy;