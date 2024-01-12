import React from 'react'
import "./Home.css"
import Header_Logo from "../img/header.svg"
import Header_Sub_Logo from "../img/headerlogo.png"

const Home = () => {
  return (
    <section className='home-container'>

      {/* right */}

        <div className='home-image'>
        <img src={Header_Logo} alt="" />
        </div>


         {/* left */}
         <div className='home-content'>
            <img src={Header_Sub_Logo} alt="" />
            <p>Refresh with an energy drink and go without stretch <br/> always be the best</p>
            <button>Start</button>
        </div>
    </section>
  )
}

export default Home