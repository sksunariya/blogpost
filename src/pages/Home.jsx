import React from 'react'
import Header from '../components/Header'
import BlogPosts from '../components/BlogPosts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mt-[60px] w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Header/>
        <BlogPosts/>
        <Footer/>
    </div>
  )
}

export default Home