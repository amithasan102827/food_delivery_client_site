import React, { useEffect, useState } from 'react';
import blogBanner from '../../images/blog-banner.jpg';
import Blog from '../Blog/Blog';
import './MainBlogPage.css';

const MainBlogPage = () => {

  const [blog,setBlog]=useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/blogs')
          .then(res => res.json())
      .then(data => {setBlog(data)
      console.log(data);
      })
  }, [])

  return (
    <div>
      <div class="blogBanner">
        <div class="hero-image">
          <div class="hero-text">
            <h1>Our Regular Blog</h1>
            {/* <p>And I'm a Photographer</p> */}
            {/* <button>Hire me</button> */}
          </div>
        </div>
      </div>
      {/* <Blog></Blog> */}
      <div  className='container mt-5 mb-5'>
      <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    blog.map(data =>

                        <div class="col">
                            <div class="card h-100 w-75 mx-auto">
                                <img src={data.image} class="card-img-top" alt="..." />
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
            </div>
    </div>
  );
};

export default MainBlogPage;