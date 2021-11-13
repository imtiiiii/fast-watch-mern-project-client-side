import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import DisplayBookings from '../DisplayBookings/DisplayBookings';

const MyBookings = () => {
    const { user } = useAuth();
    let key = 1;
    const [data, setData] = useState([])
    const email = user.email;
    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${email}`)
            .then(res => setData(res.data))
    }, [])
    // console.log(data);
    return (
        <Box style={{ width: "100%", m: 5 }} >
            <Grid container spacing={3} sx={{ mt: 3, mx: 3 }}>
                {
                    data.map(ele => <DisplayBookings id={ele.productId} _id={ele._id} key={key++} role={"user"} status={ele.status}></DisplayBookings>)
                }
            </Grid>
        </Box>
    );
};

export default MyBookings;