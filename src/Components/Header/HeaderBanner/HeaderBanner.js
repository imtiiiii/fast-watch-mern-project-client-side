// this compo is for banner(hero image)
import { Button, Typography } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import bannerbg from '../../../img/bannerbg.jpg'
const HeaderBanner = () => {
    return (
        // giving style to parent div
        <Box
            style={
                {
                    height: "65vh"

                }
            }
            sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", }}
        >
            {/* --------------------------- */}
            <Box sx={{ width: 1, color: orange[50] }} >
                <Typography component="div" variant="subtitle1" sx={{ letterSpacing: 5, }}>
                    NOW YOU CAN FEEL THE HEAT
                </Typography>
                <Typography component="div" variant="h2" sx={{ letterSpacing: 3, fontWeight: 500, my: 6 }}>
                    Smart New Future
                </Typography>
                <Box>
                    <Button variant="" sx={{ backgroundColor: grey[50], color: grey[900], width: 200, borderRadius: 5, letterSpacing: 3 }}>Buy Now</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderBanner;