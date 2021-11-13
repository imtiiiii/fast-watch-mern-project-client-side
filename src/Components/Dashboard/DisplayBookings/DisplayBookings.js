import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const DisplayBookings = ({ id, role, status, email, _id }) => {

    const [currentStatus, setCurrentStatus] = useState(status)
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/products/explore/${id}`)
            .then(res => {
                // console.log(res.data)
                setProduct(res.data)
            })
    }, [])
    const { img, name, info, price } = product;

    const handleApprove = () => {
        axios.put(`http://localhost:5000/bookings/all`, { status: "approved", email: email, id })
            .then(setCurrentStatus("approved"))
    }
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/bookings/all?id=${_id}`)
            .then(res => console.log(res))
    }
    return (


        <Grid item lg={4} xs={11} sx={{}}>
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
                    style={{ height: "300px", backgroundColor: "#f4f4ff" }}

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
                        role === "user" &&
                        <>
                            <Button size="medium" style={{ color: "black" }}>{status}</Button>
                            <Button size="medium" style={{ color: "black" }} onClick={handleDelete}>Delete</Button>
                        </>
                    }
                    {
                        role === "admin" &&
                        <>
                            <Button size="medium" style={{ color: "black" }}>{currentStatus}</Button>
                            <Button size="large" variant="contained" style={{ color: "black" }} onClick={handleApprove}>Approve</Button>
                        </>
                    }

                </CardActions>
            </Card>
        </Grid >


    );
};

export default DisplayBookings;