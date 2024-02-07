import React from 'react'
import './Plan.css'
import re from './re.png'
import dumbell from './dumbell.png'
import whiteTick from './whiteTick.png'
import heart from './heart.png'
function Plan() {
  return (
    <div className='plans-container'>
      <div className="plan-blur-1 blur"></div>
      <div className="plan-blur-2 blur"></div>
      <div className="program-header" style={{gap: '2rem'}}>
        <span className='bili'>READY TO START</span><span >YOUR JOURNEY</span><span className='bili'>NOW WITHUS</span>
      </div>
      <div className="plans">
        <div className="plan1">
          <span><img className='my' src={dumbell} alt="" /></span>
          <span className='dlr' > $ 25 </span>
          <span> <img src={whiteTick} alt="" /> 2 hours of exercises</span>
          <span><img src={whiteTick} alt="" /> free consultaion to coaches</span>
          <span><img src={whiteTick} alt="" /> Access to the CommunityS</span>
          <span>see more benifits <img src="" alt="" /></span>
          <button className='bb'>Join Now</button>
        </div>
        <div className="plan2">
        <span><img className='my' src={heart} alt="" /></span>
          <span  className='dlr' > $ 25 </span>
          <span> <img src={whiteTick} alt="" /> 2 hours of exercises</span>
          <span><img src={whiteTick} alt="" /> free consultaion to coaches</span>
          <span><img src={whiteTick} alt="" /> Access to the CommunityS</span>
          <span>see more benifits <img src="" alt="" /></span>
          <button className='bb'>Join Now</button>
        </div>
        <div className="plan3">
        <span><img className='my' src={dumbell} alt="" /></span>
          <span  className='dlr' > $ 25 </span>
          <span> <img src={whiteTick} alt="" /> 2 hours of exercises</span>
          <span><img src={whiteTick} alt="" /> free consultaion to coaches</span>
          <span><img src={whiteTick} alt="" /> Access to the CommunityS</span>
          <span>see more benifits <img src="" alt="" /></span>
          <button className='bb'>Join Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default Plan
