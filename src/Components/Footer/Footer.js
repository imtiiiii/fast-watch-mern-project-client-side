// import { AccountCircle } from '@material-ui/icons';
import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import footerImg from '../../img/footer.jpeg'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Footer = () => {
    return (
        <Grid container spacing={3} style={{ backgroundColor: "#f7f7f7" }}>
            <Grid item lg={4}>
                <img src={footerImg} alt="" style={{ maxWidth: "50%" }}></img>
            </Grid>
            <Grid item lg={4}>
                <Typography container="div" variant="h2" sx={{ letterSpacing: 2 }}>
                    About us
                </Typography>
                <Typography paragraph sx={{ letterSpacing: 2 }}>
                    We are a new watch brand which established in 2021. What is more special is we are already becoming the brand for all watch and smart watch enthusiasts. <br></br>
                    Copyright ©2021 All rights reserved | This website is made   by Imtiaz Ahmed :)
                </Typography>
            </Grid>
            <Grid item lg={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 1 }}>
                <Typography container="div" variant="h4" sx={{ letterSpacing: 2 }}>
                    News Letter !!
                </Typography>
                <Typography container="div" variant="body1" sx={{ letterSpacing: 2 }}>
                    Stay update with our latest
                </Typography>
                <Container>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 1 }} />
                    <TextField id="input-with-sx" label="email" variant="standard" />
                    <Button variant="text">Send</Button>

                </Container>

            </Grid>

        </Grid>
    );
};

export default Footer;