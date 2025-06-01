import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ResponsiveMenu from './components/Navbar/ResponsiveMenu'
import Hero from './components/Hero/Hero'
import Menus from './components/menus/menus'
import Banner from './components/Banners/Banner'
import Banner2 from './components/Banners/Banner2'
import Banner3 from './components/Banners/Banner3'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'> 
      <Navbar />
      <ResponsiveMenu />
      <Hero />
      <Menus />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Footer />
    </div>
  )
}

export default App
