import React, { useContext } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import BlogPosts from '../components/BlogPosts'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

const CategoryPage = () => {

    const {posts} = useContext(AppContext);
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Header/>
        <div className='mt-[70px] w-11/12 max-w-[670px] flex gap-10'>
            <div>
                <button className='px-2 py-1 justify-items-start border-2 rounded-md' onClick={() => navigation(-1)}>
                    Back
                </button>
            </div>
            <h2>
                Blogs Tagged <span className='font-bold underline'> #{category}</span>
            </h2>
        </div>
        <BlogPosts/>
        {
            posts.length === 0 ? (<div></div>) : (<Footer/>)
        }
    </div>
  )
}

export default CategoryPage