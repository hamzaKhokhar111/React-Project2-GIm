import React from 'react'
import './Footer.css'
import github from './github.png'
import instagram from './instagram.png'
import  linkedin from './linkedin.png'
import logo from './logo.png'
function Footer() {
  return (
    <div className='footer-container'> 
    <hr />
    <div className="footer">
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
    </div>
    <div className="logo-f">
        <img   className='abc' src={logo} alt="" />
    </div>

    </div>
  )
}

export default Footer
