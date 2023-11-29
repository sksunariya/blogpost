import './App.css';
import { AppContext } from './context/AppContext';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import Home from './pages/Home';


function App() {

  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes('tags')){
      const tag = location.pathname.split('/').at(-1).replace('-', ' ');
      fetchBlogPosts(Number(page), tag);
    }
    else if (location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1);
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }

  },[location.pathname, location.search])

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:blogId' element={<BlogPage/>} />
        <Route path='/tags/:tag' element={<TagPage/>} />
        <Route path='/categories/:category' element={<CategoryPage/>} />
      </Routes>

    </div>
  );
}

export default App;
