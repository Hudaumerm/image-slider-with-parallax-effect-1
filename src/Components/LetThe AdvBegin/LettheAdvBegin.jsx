import React, { useState } from "react";
import "./LetTheAdvBegin.css";

function LettheAdvBegin() {
  const [offset, setoffset] = useState();
  const handleScroll = () => setoffset(window.pageYOffset);

  window.addEventListener("scroll", handleScroll);

  return (
    <section className="let-the-adv-begin">
      <div className="zoom" style={{ backgroundImage: "url(/Images/bg.jpg)" }}>
        <img src="/Images/bg.jpg" alt="loading" className="bg" />
        <img
          src="/Images/mountain1.png"
          alt=""
          className="img1"
          style={{ width: 100 + offset * 0.3 + "%" }}
        />
        <img
          src="/Images/mountain2.png"
          alt=""
          className="img2"
          style={{ width: 100 + offset * 0.3 + "%" }}
        />
        <img
          src="/Images/text.png"
          alt=""
          className="img3"
          style={{ top: `-${10 + offset * 0.3 + "%"}` }}
        />
      </div>
      <div className="content"></div>
    </section>
  );
}

export default LettheAdvBegin;
