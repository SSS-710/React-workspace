import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/about'
import NotFound from './Pages/NotFound'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
  <div className='h-screen  bg-black text-white '>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
     
      </div>
  )
}

export default App
