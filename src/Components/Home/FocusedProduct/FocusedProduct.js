// this compo will hold just only a picture that we are focusing in this website
import { Box, width } from '@mui/system';
import React from 'react';
import focusProduct from '../../../img/focusproduct5.png'
const FocusedProduct = () => {
    return (
        <Box sx={
            {
                width: 1, border: 1

            }
        }>
            <img src={focusProduct} alt="product"
                style={
                    {
                        marginTop: "-300px", height: "400px",
                        maxWidth: "100%"


                    }
                }
            ></img>


        </Box>
    );
};

export default FocusedProduct;