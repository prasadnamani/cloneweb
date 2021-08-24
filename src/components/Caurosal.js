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
       <img src="https://website-assets-fw.freshworks.com/attachments/cksep6tim00um4cg0hz2sy8fv-waterstons.one-half.png" className={"sliderimg"} alt="" width="20%" height="20%">
           </img>
           <h3>“The Freshworks team was a great asset during implementation and continue to be a key partner for Waterstons as we look to further mature and improve our services to customers, tailored to their specific needs.”

           Alex Bookless, Head of Managed Services, Waterstons
           </h3>
           </div>

           <div>
       <img src="https://website-assets-fw.freshworks.com/attachments/cksep7mph00ne2dfzr3115iaq-phone-pe-1.one-half.png" className={"sliderimg"} alt="" width="20%" height="20%">
           </img>
           <h3>“For PhonePe, Freddy fetches context from the transactions made and offers contextual assistance for a personalized self-service experience from right within the app. We have been using it for a year and can confidently say that we have accomplished most of what we had in mind.”

           </h3>
           </div>
      

           <div>
       <img src="https://website-assets-fw.freshworks.com/attachments/cksep8eis00ne4tg0nvamx4pf-payvision-1.one-half.png" className={"sliderimg"} alt="" width="20%" height="20%">
           </img>
           <h3>“Because we're managing and handling tickets faster, satisfaction skyrocketed. 98% of the users say they are 'extremely satisfied' after handling a ticket, and give us a smiley face.”

Alex Anheuer, Manager Workplace Services, Payvision
  

             </h3>
           </div>
      
     
    </AliceCarousel>
    </div>
  );
}