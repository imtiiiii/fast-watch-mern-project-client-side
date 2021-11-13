import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';

const Review = () => {
    const nameRef = useRef();
    const reviewRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const review = reviewRef.current.value;
        const data = {
            name: name,
            review: review
        }
        document.reviewForm.reset();
        axios.post("http://localhost:5000/reviews", data)
            .then(res => console.log(res.data));
    }
    return (
        <Box style={{ height: "110vh", width: "100%" }} sx={{ border: 2, justifyContent: "center", alignItems: "center", flexDirection: "column" }}
        >
            <Typography container="div" variant="h2" sx={{ letterSpacing: 3 }}>
                Review time!!!
            </Typography>
            <Container sx={{ width: 1, my: 5, py: 10 }}>
                <form name="reviewForm" onSubmit={handleSubmit} >
                    <input type="input" placeholder="your name" ref={nameRef} style={{ width: "32%", height: "30px", padding: "10px 20px 10px 20px" }}></input>
                    <div style={{ margin: "20px" }}></div>
                    <TextareaAutosize
                        maxRows={6}
                        aria-label="maximum height"
                        placeholder="Your review"

                        style={{ width: 200, height: 200 }}
                        sx={{ mt: 10 }}
                        ref={reviewRef}
                    />
                    <div style={{ margin: "20px" }}>
                    </div>
                    <input type="submit" style={{ width: "15%", height: "60px", padding: "10px 10px", margin: "0 10px" }}></input>
                </form>
            </Container>

        </Box>
    );
};

export default Review;