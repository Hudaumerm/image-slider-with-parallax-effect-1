import React, { useRef } from 'react'
import './ImageSliderParallax.css'

function ImageSliderParallax() {
    const divRef = useRef();
  return (
   <section className="parallax-slider">
    <input type="radio" name="butoons" id="a1"/>
    <input type="radio" name="butoons" id="a2"/>
    <input type="radio" name="butoons" id="a3"/>
    <input type="radio" name="butoons" id="a4"/>
    <input type="radio" name="butoons" id="a5"/>

    <div className="slider-bg">
        <div className='slider-1'>
            <img src="/Images/pexels-eberhard-grossgasteiger-12600610.jpg" alt="" />
        </div>
        <div>
        <img src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>
        <div>
        <img src="https://images.pexels.com/photos/9208713/pexels-photo-9208713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>
        <div>
        <img src="https://images.pexels.com/photos/12067725/pexels-photo-12067725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>
        <div>
        <img src="/Images/pexels-aleksey-lebedev-9574383.jpg" alt="" />

        </div>
    </div>
    <div className="controls">
        <label htmlFor="a1"></label>
        <label htmlFor="a2"></label>
        <label htmlFor="a3"></label>
        <label htmlFor="a4"></label>
        <label htmlFor="a5"></label>

    </div>
   </section>
  )
}

export default ImageSliderParallax