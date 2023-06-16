import React from 'react'
import "./Home.css"
import Navbar from '../allcomponents/reusable_componants/Navbar'
import Header from '../allcomponents/home/Header'
import fff from "../assets/fff.mp4"
import Ourservice from '../allcomponents/home/Ourservice'
import AboutTemp1 from '../allcomponents/reusable_componants/AboutTemp1'
import Slider from '../allcomponents/home/Slider'
import Footer from '../allcomponents/reusable_componants/Footer'

const Home = () => {
  return (
    <div className='home-main-container'>
      <div className="video-container">
        <video autoPlay muted loop className="video-background" >
          <source src={fff} type="video/mp4" />
        </video>
        <div className="header-content">
          <Navbar />
          <Header />
        </div>
      </div>
      <AboutTemp1 />
      <Slider />
      <Ourservice />
      <Footer />
    </div>
  )
}

export default Home