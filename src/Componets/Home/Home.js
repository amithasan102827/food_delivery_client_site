import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import image1 from '../../images/dinner2.png';
import image2 from '../../images/dinner6.png';
import image3 from '../../images/lunch1.png';
import image4 from '../../images/lunch3.png';
import { Box } from '@mui/material';
import Meal from '../Meal/Meal';
import Blog from '../Blog/Blog';
import FoodCollection from '../FoodCollection/FoodCollection';

const Home = () => {

    const [meals,setMeals]=useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=p')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    const handleSearch = (event) => {
        console.log(event.target.value);
    }


    return (
        <Box className=''>
            <div style={{ border: '2px solid red' }} className='row'>
                <div className='col-lg-6  '>
                    <div className='header-text mx-2'>

                        <div className=''>
                            <h1 style={{ color: 'black', fontSize: '2.8em' }} className=' '>
                                Get Restant Food by <br />
                                Ordering Online
                            </h1>
                            <p style={{ fontSize: '0.8em' }} className=' '>A restaurant sometimes known as a diner is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal.</p>
                        </div>

                        <div className='mt-4'>

                            <input
                                onChange={handleSearch}
                                className='input-field shadow p-3  ' type="text" placeholder='search your food' />


                            <button type="button" class="btn btn-warning search-button rounded-pill shadow">Search</button>

                        </div>




                    </div>
                </div>

                <div className='col-lg-6  mt-4 p-2 mb-4 '>
                    <Carousel>
                        <Carousel.Item interval={1000}>

                            <div className='mx-auto img-container'>
                                <img
                                    className=" d-block w-100 img-fluid "
                                    src={image1}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <div className='mx-auto img-container'>
                                <img
                                    className=" d-block w-100 img-fluid "
                                    src={image2}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='mx-auto img-container'>
                                <img
                                    className=" d-block w-100 img-fluid "
                                    src={image3}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='mx-auto img-container'>
                                <img
                                    className=" d-block w-100 img-fluid "
                                    src={image4}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                    </Carousel>
                </div>



            </div>

            <div className='container'>
                <h1>All food {meals.length}</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                  {
                    meals.slice(0,15).map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                    
                    ></Meal>)  
                  }
                  </div>


            </div>
            <Blog></Blog>
            <FoodCollection></FoodCollection>
        </Box>




    );
};

export default Home;