import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';



const labels = {
  0: 'Useless',
  1: 'Useless+',
  2: 'Poor',
  
  3: 'Ok',
  
  4: 'Good',
  
  5: 'Excellent',

};

const Review = ({ review }) => {

  return (
    <Grid item xs={12} sm={12} md={4} sx={{ mt: 1 }} >
      <Card >
        <CardActionArea>
          {/* <CardMedia
            component="img"
            // height="140"
            image={review.image}
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {review.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {review.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name="text-feedback"
              value={review.rating}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Box sx={{ ml: 2 }}>{labels[review.rating]}</Box>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Review;