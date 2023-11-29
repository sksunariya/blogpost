import React from 'react'
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { blogBaseUrl } from '../BaseUrl';
import BlogDetails from '../components/BlogDetails';


const BlogPage = () => {

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading} = useContext(AppContext);

    const blogId = location.pathname.split('/').at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${blogBaseUrl}?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            console.log(data);
            console.log("RelatedBlog");
            setRelatedBlogs(data.relatedBlogs);
            console.log(data.relatedBlogs);
        }
        catch(error){
            alert("Can't fetch data.")
            setBlog(null);
            setRelatedBlogs(null);
        }
        setLoading(false);
    }

    useEffect( () => {
        if (blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname])

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Header/>
        <div className='w-11/12 max-w-[670px]'>
        <div className='mt-[70px] mb-[20px]'>
            <button className='px-2 py-1 border-2 rounded-md' onClick={() => navigation(-1)}>
                Back
            </button>
        </div>

        {
            loading ? <p>Loading</p> : 
            blog ? 
            (<div>
                <BlogDetails post={blog} />
                <h2 className='mt-10 mb-4 underline text-2xl font-semibold'>Related Blogs</h2>
                {
                    relatedBlogs.map( (post) => (
                        <div className='mb-5' key={post.id}>
                            <BlogDetails post={post}/>
                        </div>
                        
                    ))
                    
                }
            </div>) 
            : (<p>No Blog Found.</p>)
        }
        </div>

    </div>
  )
}

export default BlogPage