import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const blogData = [
    {
        id: 1,
        name: 'Brief About How to Make Pasta',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog1.jpg",
        date: '1 May 2022',
        description:'Pasta is a type of noodle that traditionally made from durum wheat, water or eggs. It is formed into different noodle shapes and then cooked in boiling water. Nowadays, most products sold as pasta are made from common wheat. However, similar noodles can be made from other grains, such as rice, barley or buckwheat'
    },
    {
        id: 2,
        name: 'Brief About How to Make Pizza',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog2.jpg",
        date: '2 May 2022',
        description:'The following is the process of preparing a pizza. Warm water is poured in a mixing bowl, and then sugar is dissolved in it. Next, yeast is added, and like sugar, one should wait until it dissolves. However, yeast is not added at once, but is it added continuously while stirring.'
    },
    {
        id: 3,
        name: 'Brief About How to Make Burger',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog3.jpg",
        date: '3 May 2022',
        description:'Heat a large skillet over medium/high heat. When the pan is hot, carefully place the patties in the skillet (no need to grease skillet) leaving some space between each patty. Cook the burgers until nicely seared and they have browned halfway up the sides. Flip the burgers and cook to your liking.'
    },
    {
        id: 4,
        name: 'Brief About How to Make Sandwich',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog4.jpg",
        date: '5 May 2022',
        description:'To make a basic sandwich, first grab 2 slices of your favorite bread, like French, white, or wheat bread. Next, spread condiments, like mustard and mayo, evenly on each slice of bread. Then, add your main filling, such as deli meat, egg salad, or hummus, on top of one of the bread slices.'
    },
    {
        id: 5,
        name: 'Brief About How to Make Coffee',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog5.jpg",
        date: '6 May 2022',
        description:'Line the basket of your coffee maker with a filter. Grind coffee beans to medium or medium-fine grind size. Bring filtered water to a boil, then let it sit for a minute. Pour enough water into the filter to wet it completely, and let it drain into your cup or coffee pot.',
    },
    {
        id: 6,
        name: 'Brief About How to Make Tea',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog6.jpg",
        date: '7 May 2022',
        description:'To make tea in bulk, use twice the number of leaves or bags you normally use. If one teaspoon of tea serves you for one cup, use two teaspoons of tea. Steep your tea for the usual period of time. Increasing the steeping time of tea can cause the resulting beverage to be bitter.',
    },
]

const Blog = () => {

const [blog,setBlog]=useState([]);

useEffect(() => {
    fetch('https://whispering-citadel-01362.herokuapp.com/blogs')
        .then(res => res.json())
    .then(data => {setBlog(data)
    console.log(data);
    })
}, [])



    return (
        <div className=' mt-5 '>
            <h1>Our Regular Blogs</h1>
           
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    blog.slice(0,3).map(data =>

                        <div class="col">
                            <div class="card h-100 w-75 mx-auto">
                                <img  src={`data:image/png;base64,${data?.image}`} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{data.name}</h5>
                                    <p class="card-text">{data.description.slice(0,100)}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">{data.date}</small>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
            <Link style={{textDecoration:'none'}}  to='/MainBlogPage'>
            <Button variant="text">Read More Blogs</Button>
            </Link>
            </div>
        
    );
};

export default Blog;