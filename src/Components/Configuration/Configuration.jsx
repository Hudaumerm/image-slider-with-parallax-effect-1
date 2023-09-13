import React, { useContext, useState } from "react";
import "../ImagSlider/ImageSlider.css";
import { newContext } from "../../App";

function Configuration() {
  const { click, setClick } = useContext(newContext);
  const [inputValue, setinputValue] = useState("");
  const [first, setFirst] = useState(true);
  const handleChange = (e) => {
    setinputValue(e.target.value + "s");
  };
  const handleConfiguration = () => {
    let bodyStyle = document.body.style;
    bodyStyle.setProperty("--transition-time", inputValue);
    setFirst(!first);
    setClick(!click);
  };
  return (
    <div className="form">
      {first && (
        <div className="form-item">
          {" "}
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="transition speed"
          />
          <button onClick={handleConfiguration}>Save Changes</button>
        </div>
      )}
    </div>
  );
}

export default Configuration;
