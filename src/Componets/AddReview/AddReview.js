import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
        fetch("https://food-delivery-app-c3hd.onrender.com/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(result => {
                console.log(data);
                if (result.insertedId) {
                    alert('Add Your Review Successfully')
                    reset()
                }
            })
    }
    return (
        <Container style={{}}>
            <h2>Add Review</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={12} md={12} >
                    <Box style={{ height: '95vh', width: "100%", }}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.email} name="image"  {...register("email")} style={{ width: '50%', height: '6vh', margin: '10px' }} /> <br />

                            <input placeholder="Your Name" name="name"   {...register("name")} style={{ width: '50%', height: '6vh', margin: '10px' }} /> <br />


                            <select placeholder="Rating" {...register("rating")} style={{ width: '50%', height: '6vh', margin: '10px' }}  >
                                <option value="rating">rating</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> <br />


                            <textarea type='text' placeholder="Message" name="description" {...register("description")} style={{ width: '50%', height: '12vh', margin: '10px' }} />
                            <br />



                            {/* <input type='text' placeholder="Car Price" name="carprice"  {...register("carprice")} style={{width:'50%',height:'6vh', margin:'10px'}} /> <br /> */}






                            <input type="submit" style={{ width: '50%', height: '6vh', margin: '10px', backgroundColor: 'hotpink', border: 'none', color: 'white' }} />
                        </form>



                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddReview;