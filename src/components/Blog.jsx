import React from 'react'
import './Blog.css'
const Blog = ({image,title,content,author}) => {
  return (
   <>
   <div className='blog-preview'>
   <div className='blog-image'><img src={image} alt=""  /></div>
   <div className="blog-title">{title}</div>
   <div className="blog-content">{content}</div>
   <div className='author'>~ {author}</div>
   </div>

   </>
  )
}

export default Blog