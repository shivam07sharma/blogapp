import { useContext, useEffect, useState } from 'react'
import './App.css'
import Blog from './components/Blog'
import { BlogData } from './MyContext.js'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import FullBlogPost from './components/FullBlog'
function App() {
  const [blogs, setBlogs] = useState([]);
  
 useEffect(()=>{
  const fetchData = async () => {
    try {
      let response = await fetch('http://localhost:3000/');
      let data = await response.json();
      console.log(data);
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
 },[])

  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Homepage/></>
    },
    {
      path:"/FullBlog",
      element:<><FullBlogPost/></>

    }
  ])
  return (

    <>
<BlogData.Provider value={blogs}>
<RouterProvider router={router}>
</RouterProvider>
</BlogData.Provider>
     </>
  )
}
const Homepage = () => {
  const blogs=useContext(BlogData);
  return (
    <>
    <div className='fullscreen'>
    <div className='homepage'>
    {blogs.map(blog=>(
      <Blog key={blog.id} image={blog.image} title={blog.title} content={blog.content[0]} author={blog.author.name}/>)
  )
} 
 </div> </div>
    </>
  )
}


export default App;
