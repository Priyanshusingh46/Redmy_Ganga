import React from 'react'
import Vedas from '../../Images/About/vedas.png'
import Astrology from '../../Images/About/astrology.png'
import AOS from "aos";
import "aos/dist/aos.css";


function AboutEducation() {
  return (
    AOS.init(),
    <div className='EducationQualificationOuterBox'>
    <div className='EducationalTextContainer1'>
      <div data-aos="fade-right"  data-aos-offset="300" className='VedasImagediv'>
      <img id ="VedasImage" src={Vedas} alt="error" />
      </div>
      <div className='EducationalText'>
          <h1 id="EducationalTextHeading">Educational Qualification</h1>
          <p id="EducationalTextPara">
          He has done his all education from Uttrakhand Sanskrit
           University Haridwar under the Guidance of Guru's and 
           Shadu's (Primary Education to Post Graduation)  All Vedic Study 
          </p>
      </div>
      </div>


      <div className='EducationalTextContainer2'>

      <div classNmae="EducationalText2">
        <h1 id="EducationalTextHeading">Astrological  Qualification</h1>
        <p id="EducationalTextPara2">
        He is Astro-Vastu Visharad, the Study of which covers the
        knowledge of Vaastu through your Horoscope.Very few Vaastu
        Experts study the Vaastu through Horoscope and  Acharya Mahendra 
        Uniyal is one of them.
        He has done High School to Master post graduation Done by the Astrology Subject 
        He is Jyotish Visharad Expert in Astrological Readings which includes Expertise and
        Advance knowledge of KP as well a Vedic Calculations of Astrololgy.
        He is Vaastu Shastra Visharad through which he has studied Intensely 
        our Indian Ancient Vaastu Shastra for betterment of life.
        </p>
      </div>


      <div data-aos="fade-left"  data-aos-offset="300" className="astrologyImageContainer">
      <img id ="astrologyImage" src={Astrology} alt="error" />
      </div>


      </div>






    </div> 
  )
}

export default AboutEducation

/*

      */

      /*
      
      */