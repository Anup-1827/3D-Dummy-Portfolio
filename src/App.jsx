import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
  return (
    <BrowserRouter>
      <div className='bg-primary'>
        <div className='bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <Navbar/>
          <Hero/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App