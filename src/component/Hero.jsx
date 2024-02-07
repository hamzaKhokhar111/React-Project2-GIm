import React from 'react'
import './Hero.css'
import heart from './heart.png'
import cal from './cal.png'
import pic from './pic.png'
import Header from '../header/Header'

function Hero() {
  return (
    <>
    <div className="hero">
 <div className="hero-blur blur"></div>
    <div className="left-h">
      <Header/>
      <div className="best">
        <div></div>
        <span>the best fitness club in the town</span>
      </div>
      
      <div className="text">
        <div>
        <span className='bili'>shape </span>
        <span>your</span>
          </div>
          <div><span>
            ideal body  </span></div>

            <div><span> IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
             </span></div>
      </div>

       <div className="figure">
        <div><span>+140</span><span>expert  coaches</span></div>
        <div><span>+978</span><span>members joined</span></div>
        <div><span>+50</span><span>fitness programs</span></div>
       </div>


       <div className="hero-button">
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>

       </div>

    </div>

    <div className="right-h">
      <button className="btn">Join Now</button>


      <div className="hert-rate">
        <img src={heart} alt="" />
        <span>Heart Rate</span><span>116 bpm</span>
      </div>

      <img className='hero-img' src={pic} alt="" />
      <div className="calories">
        <img src={cal} alt="" />
        <div>
        <span>calaries Burned</span>
        <span>220 kcal</span>
        </div>
        
      </div>
      
    </div>

    </div>
    </>
  )
}

export default Hero
