import React, { useRef, useState } from 'react'
import './RowCard.css'
import {GrNext, GrPrevious} from 'react-icons/gr'

function RowCard() {
    const scrollLeft=useRef()
    const scroll = (scrollOffset) => {
      scrollLeft.current += scrollOffset;
      };
    const imgData=[{img:"https://images.pexels.com/photos/2674064/pexels-photo-2674064.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img:"https://images.pexels.com/photos/3974145/pexels-photo-3974145.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img:"https://images.pexels.com/photos/2825237/pexels-photo-2825237.jpeg?auto=compress&cs=tinysrgb&w=600"},
   { img:"https://images.pexels.com/photos/1054198/pexels-photo-1054198.jpeg?auto=compress&cs=tinysrgb&w=600"},
   { img:"https://images.pexels.com/photos/3426869/pexels-photo-3426869.jpeg?auto=compress&cs=tinysrgb&w=600"},
{    img:"https://images.pexels.com/photos/4076494/pexels-photo-4076494.jpeg?auto=compress&cs=tinysrgb&w=600"},
{    img:"https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&w=600"},
   { img:"https://images.pexels.com/photos/18196127/pexels-photo-18196127/free-photo-of-boat-by-the-seashore.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img:"https://images.pexels.com/photos/18199118/pexels-photo-18199118/free-photo-of-taj-mahal-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600"},
   { img:"https://images.pexels.com/photos/18192282/pexels-photo-18192282/free-photo-of-hot-air-balloons-floating-over-fairy-chimneys-in-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {img:"https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=600"}]
  return (
    <div className='row-card'>
        <h1 className="h1">Top Destinations</h1>
        <div className="row">
            {imgData.map((data,index)=>{
                return(
                    <div className="card">
                    <div className="card-img">
                        <img key={index} src={data.img} alt="loading" />
                    </div>
                   
                </div>
                )
            })}
          
        </div>
        
    </div>
  )
}

export default RowCard