import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const BlogPosts = () => {

    const { loading, posts } = useContext(AppContext);

  return (
    <div className='min-h-screen w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mb-[50px]'>
        {
            loading ?

            (<Spinner/>) :

            (
                posts.length === 0 ?
                (<div className='mt-[100px] w-full flex justify-center items-center'>
                    <p className='text-lg font-bold'>No Post Found</p>
                </div>)  :
                (posts.map ((post,index) => (
                    <BlogDetails key={index} post={post}/>
                )))
            )
        }
    </div>
  )
}

export default BlogPosts