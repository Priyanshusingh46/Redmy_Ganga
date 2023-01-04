import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function AchrayaBox() {
  return (
    AOS.init(),
    <div className='AchraBox'>
        <div data-aos="fade-right"  data-aos-offset="300" className='AchraImageBox'>

        </div>
        
        <div data-aos="fade-left"  data-aos-offset="300" className='AchraInfoBox'>
            
        <div className='AchraInfo'>
            <p id="AcharayaName">Acharya Mahendra Uniyal -Certified Astrologer </p>
        </div>

        <div className='AchraInfoTextBox'>
            <p id="AchraEducationText">
            Acharya Mahendra Uniyal is a qualified Astrologer and Vaastu Consultant who gives accurate future 
            readings through a medium of Horoscope. He is a Professional Certified Consultant who also uses her
            intuition to offer guidance to all of her clients encouraging them to move in a positive direction 
            and face the challenges that may lie ahead of them.
            </p>
        </div>

        </div>

    </div>
  )
}

export default AchrayaBox