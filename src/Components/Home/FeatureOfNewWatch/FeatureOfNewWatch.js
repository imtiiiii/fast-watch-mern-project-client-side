// this compo will tell the newly launched watches features
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import newlylaunched from '../../../img/newly_launched.png'
import rocketIcon from "../../../img/rocket.png"
import chargeIcon from "../../../img/charge.png"
import wirelessIcon from "../../../img/wireless.png"
import systemIcon from "../../../img/system.png"
const FeatureOfNewWatch = () => {
    return (
        <Box sx={
            {
                width: 1, my: 5
            }
        }
            style={
                {
                    backgroundColor: "#f9f9ff"
                }
            }
        >
            <Typography component="div" variant="h3" sx={{ letterSpacing: 1, my: 2 }}>
                Top feautures of your newly launched watch
            </Typography>
            <Typography component="div" variant="body2" sx={{ letterSpacing: 2, mb: 2 }}>
                People are in love with this eco system of ours
            </Typography>
            {/* grid starts from here  */}
            {/* it will contain 3 sides */}
            <Container sx={{ my: 5, py: 3 }}>
                <Grid container spacing={2}>
                    {/* 1st */}
                    <Grid item lg={4} xs={11}>
                        <Container sx={{ textAlign: 'left', my: 5 }}>

                            <Typography variant="h6">
                                <img src={rocketIcon} alt="rocket"
                                    style={
                                        {
                                            width: "30px"
                                        }
                                    }
                                ></img>
                            </Typography>
                            <Typography variant="h6">
                                High Performance
                            </Typography>
                            <Typography variant="body1">
                                Most people know that the Apple Watch records your workouts and sets and tracks goals and incentivizes you to work out more. The watch keeps track of your exercise automatically, and reminds and encourages you to meet your goals and do more to feel great every day and live longer.
                            </Typography>
                        </Container>
                        <Container sx={{ textAlign: 'left', my: 5 }}>
                            <Typography variant="h6">
                                <img src={chargeIcon} alt="charge"
                                    style={
                                        {
                                            width: "30px"
                                        }
                                    }
                                ></img>
                            </Typography>
                            <Typography variant="h6">
                                Fast Charging System
                            </Typography>
                            <Typography variant="body1">
                                Fast charging requires an Apple USB-C Magnetic Fast Charging Cable. This cable has aluminum around the magnetic charger and a USB-C connector. You also need one of these power adapters: Apple 18W, 20W, 29W, 30W, 61W, 87W, or 96W USB-C Power Adapter.
                            </Typography>
                        </Container>
                    </Grid>
                    {/* 2nd */}
                    <Grid item lg={4} xa={11}>
                        <img src={newlylaunched} style={{ maxWidth: "100%" }} alt="watch"></img>
                    </Grid>
                    {/* 3rd */}
                    <Grid item lg={4} xs={11}>
                        <Container sx={{ textAlign: 'left', my: 5 }}>
                            <Typography variant="h6">
                                <img src={wirelessIcon} alt="wireless"
                                    style={
                                        {
                                            width: "30px"
                                        }
                                    }
                                ></img>
                            </Typography>
                            <Typography variant="h6">
                                Wireless Charging
                            </Typography>
                            <Typography variant="body1">
                                A safe way to transfer power to your phone. Simple to just drop your phone on the charging pad. Puts less strain on the charging port of your phone.
                            </Typography>
                        </Container>
                        <Container sx={{ textAlign: 'left', my: 5 }}>
                            <Typography variant="h6">
                                <img src={systemIcon} alt="system"
                                    style={
                                        {
                                            width: "30px"
                                        }
                                    }
                                ></img>
                            </Typography>
                            <Typography variant="h6">
                                System
                            </Typography>
                            <Typography variant="body1">
                                Our new watch comes with all new technologies. it will feel very good to hand of a user. It will be very hard for someone to find any lag in this system. No bad things can irritate our user.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
                {/* ----------------- End of Grid----------- */}
            </Container>

        </Box>
    );
};

export default FeatureOfNewWatch;