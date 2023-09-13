

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const [readingTime,setReadingTime] =useState(0)

  const handleAdBookmark = blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)

  }

  const handleReadingTime = time =>{
    
    setReadingTime(readingTime + time);
  }
  

  return (
    
    <>
      
      <Header></Header>
      <div className='md:flex max-w-screen-2xl mx-auto'>
      <Blogs handleAdBookmark={handleAdBookmark} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
