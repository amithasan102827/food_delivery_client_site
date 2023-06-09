import { Box, Button, Container, Grid, Input, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddNewProduct = () => {


    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('rating', rating);
        formData.append('image', image);

        fetch('https://food-delivery-app-c3hd.onrender.com/meals', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Food added successfully')
                    console.log('Food added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }














    return (
        <div>
            <h3>Add A New Food</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%', marginTop: '20px' }}
                    label="Category"
                    required
                    onChange={e => setCategory(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', marginTop: '20px' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', marginTop: '20px' }}
                    label="Price"
                    required
                    onChange={e => setPrice(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', marginTop: '20px' }}
                    label="Rating"
                    required
                    onChange={e => setRating(e.target.value)}
                    variant="standard" />
                <br />


                <Input
                    sx={{ marginTop: '20px' }}
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button sx={{ marginTop: '20px' }} variant="contained" type="submit">
                    Add Food
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddNewProduct;