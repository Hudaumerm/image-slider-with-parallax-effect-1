import React from "react";
import "./ParallaxScroll.css";

function ParallaxScroll() {
  return (
    <section className="scroll-parallax-section">
      <div className="scroll-parallax">
        <div className="slider">
          <div className="image1">
            <img className="moon" src="/Images/moon-1303512_640.png" alt="" />
          </div>
          <div className="image2">
            <img
              className="jupiter"
              src="https://www.sliderrevolution.com/wp-content/uploads/revslider/artistic-parallax-slider/planet.png"
              alt=""
            />
            {/* <img className="people" src="https://www.sliderrevolution.com/wp-content/uploads/revslider/artistic-parallax-slider/people.png" alt="" /> */}
            <img
              className="ground"
              src="https://www.sliderrevolution.com/wp-content/uploads/revslider/artistic-parallax-slider/land.png"
              alt=""
            />
          </div>
          <div className="earth-div">
            <div className="earth"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParallaxScroll;
