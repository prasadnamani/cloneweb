import React from "react";
import './Carscss.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img from './bg.jpg'

export default function App() {
  return (
    <div className={"adjust"}>
     <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls={true} >
       <div>
       <img src="https://website-assets-fw.freshworks.com/attachments/cksep8eis00ne4tg0nvamx4pf-payvision-1.one-half.png" className={"sliderimg"} alt="">
           </img>
           </div>
      <img src={img} className={"sliderimg"} alt=""/>
      <img src={img} className={"sliderimg"} alt=""/>
      <img src={img} className={"sliderimg"} alt=""/>
      <img src={img} className={"sliderimg"} alt=""/>
    </AliceCarousel>
    </div>
  );
}