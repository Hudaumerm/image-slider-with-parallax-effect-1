import logo from './logo.svg';
import './App.css';
import ImageSliderParallax from './Components/ImageSliderParallax/ImageSliderParallax';
import ParallaxScroll from './Components/ParallaxScroll/ParallaxScroll';
import ImageSlider from './Components/ImagSlider/ImageSlider';
import LettheAdvBegin from './Components/LetThe AdvBegin/LettheAdvBegin';
import RowCard from './Components/RowCard/RowCard';
import Travel from './Components/Travel/Travel';
import { createContext, useState } from 'react';

export const newContext=createContext()
function App() {
  const [click, setClick] = useState(false)

  return (
    <div className="App">
     <newContext.Provider value={{click,setClick}}>
      {/* <ImageSliderParallax/> */}
      {/* <ParallaxScroll/> */}
      <LettheAdvBegin/>
      <RowCard/>
      
      <ImageSlider/>
     
      <Travel/>
      
      </newContext.Provider>
     
    </div>
  );
}

export default App;
