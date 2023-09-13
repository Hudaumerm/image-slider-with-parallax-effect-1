import React, { useContext, useState } from "react";
import "./ImageSlider.css";
import Configuration from "../Configuration/Configuration";
import { newContext } from "../../App";

function ImageSlider() {
  const { click, setClick } = useContext(newContext);
 

  return (
    <div className="slider-wrapper-section">
      <div className="btn-div">
        <button
          onClick={() => {
            setClick(!click);
          }}
          className={click ? "btn-hide" : "btn-show"}
        >
          Configuration Button
        </button>
      </div>
      {click && <Configuration />}
      <p className="msg-para">
        {click
          ? "Enter a transition speed"
          : "click here to change the transition speed"}
      </p>
      <section className="slider-bgd">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            
            <>
              <div className="slide first">
                <img
                  src="https://images.pexels.com/photos/2782969/pexels-photo-2782969.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://images.pexels.com/photos/9400988/pexels-photo-9400988.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://images.pexels.com/photos/5892261/pexels-photo-5892261.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://images.pexels.com/photos/7350402/pexels-photo-7350402.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
            </>
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div class="auto-btn4"></div>
            </div>
          </div>
          <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageSlider;
