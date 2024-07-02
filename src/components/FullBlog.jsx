import React, { useState, useContext, useEffect  } from 'react'
import { BlogData } from '../MyContext.js'
import './FullBlog.css';
import { useParams } from 'react-router-dom';

  const FullBlogPost = () => {
    const Blogs = useContext(BlogData);
    const [blog, setBlog] = useState(null);
    const { slug } = useParams();
  
    useEffect(() => {
      const fetchBlog = async () => {
        const index = Blogs.findIndex(item => item.id == slug);
        if (index !== -1) {
          setBlog(Blogs[index]);
        }
      };
      fetchBlog();
    }, [Blogs, slug]);
  
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
            <div className='authordetails'>
            <div className="authorname">{blog.author.name}</div><a href={blog.author.linkedin}><div className='linkedin'><img src="/linkedinicon.png" alt="" /></div></a></div>
          </div>
        </div>
      </>
    );
  };

export default FullBlogPost;
