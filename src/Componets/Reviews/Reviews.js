import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { useState,useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import Review from '../Review/Review';



const Reviews = () => {
    
   const [reviews,setReviews]=useState([]);
   const {isLoading}=useAuth();
   useEffect(()=>{
       fetch("https://whispering-citadel-01362.herokuapp.com/reviews")
       .then(res=>res.json())
       .then(data=>setReviews(data))
   },[])

    return (
        <div style={{marginTop:'70px'}} className="container " sx={{mb: 6}}>
            <h2 className="text-info">Customers Reviews</h2>
         {!isLoading && <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3, sm: 2}} columns={{ xs:12, sm: 12, md: 12 }}>
     
              {
                  
                  
                  reviews.map(review=><Review
                  key={review._id}
                  review={review}
                  ></Review>)
              }
            
          </Grid>
        
     
    </Box> } 

    {
                isLoading && <CircularProgress />
            }
    </div>
    );
};

export default Reviews;