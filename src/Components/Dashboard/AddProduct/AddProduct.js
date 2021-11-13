import { Button, Container, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post("https://salty-lowlands-53344.herokuapp.com/products", data)
            .then(res => {
                console.log(res);
                reset();
            });

    }
    return (
        <Box style={{
            height: "100vh", backgroundColor: "#DFE4E0"

        }} sx={{ border: 2, width: 1 }} >
            <Typography component="div" variant="h4" sx={{ letterSpacing: 3, my: 3 }}>
                Add Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField id="standard-basic" label="name" variant="standard"
                        sx={{ width: "50%", my: 4 }}
                        {...register("name", { required: true })}

                    />
                </div>
                <div>
                    <TextField id="standard-basic" label="info" variant="standard"
                        sx={{ width: "50%", my: 4 }}
                        {...register("info", { required: true })}
                    />
                </div>
                <div>
                    <TextField id="standard-basic" label="price" variant="standard" sx={{ width: "50%", my: 4 }}
                        {...register("price", { required: true })} />
                </div>
                <div>
                    <TextField id="standard-basic" label="picture url" variant="standard" sx={{ width: "50%", my: 4 }}
                        {...register("img", { required: true })} />
                </div>
                <div>
                    <Button variant="text" type="submit" sx={{ color: grey.A700 }}>Submit </Button>
                </div>

            </form>


        </Box>
    );
};

export default AddProduct;