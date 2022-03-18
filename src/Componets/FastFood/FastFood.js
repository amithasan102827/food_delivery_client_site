import React, { useState } from 'react';



const fastFood = [
    {
        id: 1,
        category:'Fastfood',
        name: 'Burger',
        image: "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646__340.jpg",
        price:'10'
        
    },
    {
        id: 2,
        category:'Fastfood',
        name: 'Potato fry',
        image: "https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414423__340.jpg",
        price:'12'
    },
    {
        id: 3,
        category:'Fastfood',
        name: 'Pizza',
        image: "https://cdn.pixabay.com/photo/2017/01/22/19/20/pizza-2000614__340.jpg",
        price:'15'
    },
   
]



const FastFood = () => {
   
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    fastFood.map(data =>

                        <div class="col">
                            <div class="card h-100">
                                <img src={data.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{data.name}</h5>
                                    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                </div>
                                {/* <div class="card-footer">
                                    <small class="text-muted">{data.date}</small>
                                </div> */}
                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default FastFood;