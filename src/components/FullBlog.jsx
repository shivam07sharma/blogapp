import React, { useState, useContext, useEffect  } from 'react'
import { BlogData } from '../MyContext.js'
import './FullBlog.css';
import { useParams } from 'react-router-dom';

  const FullBlogPost = () => {
    const Blog = useContext(BlogData);
    const [blog, setBlog] = useState(null);
    const { slug } = useParams();
  
    useEffect(() => {
      const fetchBlog = async () => {
        const index = Blog.findIndex(item => item.id == slug);
        if (index !== -1) {
          setBlog(Blog[index]);
        }
      };
      fetchBlog();
    }, [Blog, slug]);
  
    if (!blog) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
        <div className="fullscreen">
          <div className="blog-cont">
            <div className="image-container">
              <img src={blog.image} alt="" className='blogimage' />
            </div>
            <div className="title">{blog.title}</div>
            <div className="contents">
              {blog.content.map((element, index) => (
                <div key={index} className="content">{element}</div>
              ))}
            </div>
            <div className="authorname">{blog.author.name}</div>
          </div>
        </div>
      </>
    );
  };

export default FullBlogPost;
