import React, { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function AboutAchyra() {
  return (
    AOS.init(),
    <>
    <div className="AboutOuterContainer">
      <p id="AboutUsPara">About Us</p>
    </div>

    <div className='AchraAboutInfoContainer'>
      <div className='AchraAboutInfo'>
        <h1 id="AchraAboutInfoHeading">Certified Astrologer - Vaastu Consultant And Prisest</h1>
        <p id="AchraAboutInfoParagraph">
      Acharya Mahendra Uniyal is a qualified Astrologer and Vaastu Consultant 
      who gives accurate future readings through a medium of Horoscope. He is 
      a Professional Certified Consultant who also uses his intuition to offer
      guidance to all of her clients, encouraging them to move in a positive 
      direction and face the challenges that may lie ahead of them.
     The remedies suggested by his have scientific background and are very 
     easy to follow which does not disturb the regular schedule. While
      predicting he also highlights the period to be taken care of health 
      and for money investments which helps to plan future steps.
      More than 10,000+ clients have taken advantage of the Astrological 
      as well as Vaastu Consultations which includes Politicians, Actors,
       Directors, Producers, Anti-Corruption Officers, IT Professionals, 
       Bank Officers, Businessman from around the globe. He has a repeat clientele
       of 99.9%.
       Join the many thousands of people who have used his services to gain
       a better understanding of their lives, direction and where they are going.
      When you schedule your Horoscope reading or Vaastu Consultation with Acharya 
      Mahendra Uniyal ji you will receive a detailed and highly accurate reading that
       covers the aspects of your life where you feel you need the most guidance.
      He believes that Vedic Astrology has a
      complete remedy for all the problems related
      to our life. Remedies like donating, puja,
      reciting mantras, wearing gems, etc., always
      work and show good results. He has helped
      people facing issues with all aspects of life like
      be it a career, marriage, etc.
        </p>

      </div>
      <div  className="AchraImageContainer">

      </div>
    </div>
    </>
  )
}

export default AboutAchyra

/*

      */