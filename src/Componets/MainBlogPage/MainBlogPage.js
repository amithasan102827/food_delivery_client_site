import React from 'react';
import blogBanner from '../../images/blog-banner.jpg';
import Blog from '../Blog/Blog';
import './MainBlogPage.css';

const MainBlogPage = () => {
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
      <Blog></Blog>
    </div>
  );
};

export default MainBlogPage;