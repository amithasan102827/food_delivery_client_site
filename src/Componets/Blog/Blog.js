import React from 'react';

const blogData = [
    {
        id: 1,
        name: 'Brief About How to Make Pasta',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog1.jpg",
        date: '1 May 2022'
    },
    {
        id: 2,
        name: 'Brief About How to Make Pizza',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog2.jpg",
        date: '2 May 2022'
    },
    {
        id: 3,
        name: 'Brief About How to Make Burger',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog3.jpg",
        date: '3 May 2022'
    },
    {
        id: 4,
        name: 'Brief About How to Make Sandwich',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog4.jpg",
        date: '5 May 2022'
    },
    {
        id: 5,
        name: 'Brief About How to Make Coffee',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog5.jpg",
        date: '6 May 2022'
    },
    {
        id: 6,
        name: 'Brief About How to Make Tea',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/blog6.jpg",
        date: '7 May 2022'
    },
]

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h1>Our Regular Blogs</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    blogData.slice(0,3).map(data =>

                        <div class="col">
                            <div class="card h-100">
                                <img src={data.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">{data.date}</small>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default Blog;