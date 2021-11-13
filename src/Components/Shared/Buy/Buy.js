import React from 'react';
import { useParams } from 'react-router';

const Buy = () => {
    const id = useParams();
    console.log(id);

    return (
        <div>
            <h1>im buy now</h1>
        </div>
    );
};

export default Buy;