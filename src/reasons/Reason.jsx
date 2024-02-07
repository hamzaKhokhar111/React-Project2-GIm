import React from 'react'
import './Reason.css'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import nb from './nb.png'
import nike from './nike.png'
import tick from './tick.png'
import adi from './adi.png'
function Reason() {
  return (
    <div className='Reasons' id='reasons'>
<div className="left-r">
    <img src={image1} alt="" />
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    <img src={image4} alt="" />
</div>
<div className="right-r">
    <span>some rerasons</span>
    <div><span className='bili'>Why</span>
    <span>Choose Us</span>
    </div>

    <div className='detail-r'> 
    <div><img src={tick} alt=""></img><span>OVER 140+ EXPERT COACHES</span></div>
    <div><img src={tick} alt="" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
    <div><img src={tick} alt="" /><span>I FREE PROGRAM FOR A NEW MEMBER</span></div>
    <div><img src={tick} alt="" /><span>RELIABLE PARTINERS</span></div>
    </div>
    <span style={{
    color:"gray",fontWeight:"normal", 
}}>  OUR PARTNERS </span>
<div className="partners"><img src={nb} alt="" /><img src={nike} alt="" /><img src={adi} alt="" /></div>
</div>


   
    </div>
  )
}

export default Reason
