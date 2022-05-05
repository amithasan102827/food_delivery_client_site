import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewProduct = () => {


    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
        fetch("https://mighty-journey-16776.herokuapp.com/allcars", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(result => {
                console.log(data);
                if (result.insertedId) {
                    alert('Product Add Successfully')
                    reset()
                }
            })
    }












    return (
        <Container style={{}}>
        <h2>Add Product</h2>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={12} >
                <Box style={{ height: '95vh', width: "100%", }}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="image url" name="image"  {...register("image")} style={{ width: '50%', height: '6vh', margin: '10px' }} /> <br />

                        <input placeholder="Car Name" name="name"   {...register("name")} style={{ width: '50%', height: '6vh', margin: '10px' }} /> <br />

                        <input placeholder="Car Price" name="name"   {...register("name")} style={{ width: '50%', height: '6vh', margin: '10px' }} /> <br />

                        <textarea type='text' placeholder="description" name="description" {...register("description")} style={{ width: '50%', height: '12vh', margin: '10px' }} />
                        <br />

                         

                        {/* <select placeholder="Rating" {...register("rating")}  style={{ width: '50%', height: '6vh', margin: '10px' }}  >
                            <option value="rating">rating</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> <br /> */}


                       
                        

                       






                        <input type="submit" style={{ width: '50%', height: '6vh', margin: '10px', backgroundColor: 'hotpink', border: 'none', color: 'white' }} />
                    </form>



                </Box>
            </Grid>
        </Grid>
    </Container>
    );
};

export default AddNewProduct;