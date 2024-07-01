import React, { useState } from 'react'
import { useContext } from 'react'
import { BlogData } from '../MyContext'
import './FullBlog.css'
const FullBlogPost = () => {
  const [Blog,setBlog] = useState(useContext(BlogData));
  return (
    <>
      <div className="fullscreen">
        <div className="blog-cont">
          <div className="image-container"><img src={Blog[0].image} alt="" className='blogimage' /></div>
          <div className="title">{Blog[0].title}</div>
          <div className="contents">
          {
            Blog[0].content.map(element => (
              <div className="content">{element}</div>
            ))
          }
         </div>
        </div>
      </div>
    </>
  )
}

export default FullBlogPost;
