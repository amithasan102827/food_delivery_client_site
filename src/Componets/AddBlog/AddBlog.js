import { Button, Input, TextareaAutosize, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddBlog = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('date', date);
        formData.append('description', description);
        formData.append('image', image);

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Blog added successfully')
                    console.log('Blog added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }





    return (
        <div>
            <h3>Add A Blog</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%', marginTop: '20px' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                {/* <TextField
                    sx={{ width: '50%',marginTop:'20px' }}
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" /> */}

                <Input
                    onChange={e => setDate(e.target.value)}
                    sx={{ width: '50%', marginTop: '20px' }}
                    type="date">
                </Input>
                <br />

                <textarea
                    onChange={e => setDescription(e.target.value)}
                    style={{ width: '50%', height: '90px', marginTop: '20px' }}
                    placeholder='Details'
                >

                </textarea>
                <br />


                <Input
                    sx={{ marginTop: '20px' }}
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button sx={{ marginTop: '20px' }} variant="contained" type="submit">
                    Add Blog
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddBlog;