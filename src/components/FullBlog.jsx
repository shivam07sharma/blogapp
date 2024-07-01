import React, { useState } from 'react'
import { useContext } from 'react'
import { BlogData } from '../MyContext'
import './FullBlog.css';
import { useParams } from 'react-router-dom';
const FullBlogPost = () => {
  const Blog=[...useContext(BlogData)]
  const {blogId}=useParams();
  const fullpost = Blog.find(blog => blog.id === blogId);
  return (
    <>
      <div className="fullscreen">
        <div className="blog-cont">
          <div className="image-container"><img src={`${fullpost.image}`} alt="" className='blogimage' /></div>
          <div className="title">{fullpost.title}</div>
          <div className="contents">
          {
            fullpost.content.map(element => (
              <div className="content">{element}</div>
            ))
          }
         </div>
         <div className="authorname">{fullpost.author.name}</div>
        </div>
      </div>
    </>
  )
}

export default FullBlogPost;
