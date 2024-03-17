import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Course from './Pages/Course/Course'
import Contact from './Pages/Contact/Contact'
import EmailFooter from './Components/EmailFooter'
import Teacher from './Pages/Teacher/Teacher'
import Preloader from './Components/Preloader'

import ClipLoader from "react-spinners/ClipLoader";


function App() {
  

  return (
    <>
     
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <EmailFooter /> */}
      <Footer />
    </Router>
    </>
  )
}

export default App
