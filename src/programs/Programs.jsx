import React from 'react'
import './Program.css'
import re from './re.png'
import dumbell from './dumbell.png'
function Programs() {
  return (
   <div className="programs" id="programs">
<div className="program-header">
    <span className='bili'>Explore our</span><span>programs</span><span className='bili'>to shape you</span>
</div>

<div className="detail">
    <div className="detail12">
    <span> <img className='img11' src={dumbell} alt="" /> </span>
    <span id='bld'>Strength Training</span>
    <span>in this program,you are trained to imporove your strength through many exercises</span>
    <span>join Now <img  className='cls2' src={re} alt="" /></span>
</div>
<div className="detail12">
    <span> <img className='img11' src={dumbell} alt="" /> </span>
    <span id='bld'>Cardio Training</span>
    <span>in this program,you are trained to imporove your strength through many exercises</span>
    <span>join Now <img  className='cls2' src={re} alt="" /></span>
</div>
<div className="detail12">
    <span> <img className='img11' src={dumbell} alt="" /> </span>
    <span id='bld'>Fat Training</span>
    <span>in this program,you are trained to imporove your strength through many exercises</span>
    <span>join Now <img  className='cls2' src={re} alt="" /></span>
</div>
<div className="detail12">
    <span> <img className='img11' src={dumbell} alt="" /> </span>
    <span id='bld'>Health Training</span>
    <span>in this program,you are trained to imporove your strength through many exercises</span>
    <span>join Now <img  className='cls2' src={re} alt="" /></span>
</div>
</div>
   </div>
  )
}

export default Programs
