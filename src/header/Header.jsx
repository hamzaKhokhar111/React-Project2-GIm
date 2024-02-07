import React from 'react'
import './Header.css'
import logo from './logo.png'
function Header() {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="" />

      <ul className='menu'>
        <li>Home</li>
      <li>Programs</li>
      <li>Why us</li>
      <li>Plans</li>
      <li>Testimonial</li>
      </ul>
    </div>
  )
}

export default Header
