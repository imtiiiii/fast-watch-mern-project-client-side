import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import DisplayBookings from '../DisplayBookings/DisplayBookings';

const AllBookings = () => {
    const { user } = useAuth();
    let key = 1;
    const [data, setData] = useState([])
    const email = user.email;
    useEffect(() => {
        axios.get(`http://localhost:5000/bookings/all`)
            .then(res => setData(res.data))
    }, [])
    return (
        <Box style={{ width: "100%", }} >
            <Grid container spacing={3} sx={{ mt: 3, mx: 3 }}>
                {
                    data.map(ele => <DisplayBookings id={ele.productId} key={key++} role={"admin"} status={ele.status}></DisplayBookings>)
                }
            </Grid>
        </Box>
    );
};

export default AllBookings;