import React from 'react'
import Baby from '../../Images/Header/baby.png'
import Question from '../../Images/Header/question.png'
import Heart from '../../Images/Header/hearts.png'
import Gem from '../../Images/Header/gem.png'
import Palm from '../../Images/Header/palm.png'
import AOS from "aos";
import "aos/dist/aos.css";
function Kundali() {
  return (
    AOS.init(),
    <div className='KundaliBox'>
        <h1 id="KundaliText">Kundli</h1>
        <div className='KundaliItemBox'>

            <div data-aos="flip-left" data-aos-offset="100" className='kundaliItem'>
                <div className='extraBox'>
                <img id ="KudaliItemImage" src={Baby} alt="error" />
                </div>
                <p id ="KundaliName">Janam Kundli</p>
            </div>


            <div data-aos="flip-left" data-aos-offset="100" className='kundaliItem'>
                <div className='extraBox'>
                <img id ="KudaliItemImage" src={Question} alt="error" />
                </div>
                <p id ="KundaliName">Prashna Kundli</p>
            </div>


            <div data-aos="flip-left" data-aos-offset="100" className='kundaliItem'>
                <div className='extraBox'>
                <img id ="KudaliItemImage" src={Heart} alt="error" />
                </div>
                <p id ="KundaliName">Kundli Milan</p>
            </div>


            <div data-aos="flip-left" data-aos-offset="100" className='kundaliItem'>
                <div className='extraBox'>
                <img id ="KudaliItemImage" src={Gem} alt="error" />
                </div>
                <p id ="KundaliName">Ratna</p>
            </div>


            <div data-aos="flip-right" data-aos-offset="100" className='kundaliItem'>
                <div className='extraBox'>
                <img id ="KudaliItemImage" src={Palm} alt="error" />
                </div>
                <p id ="KundaliName">Hasth Rekha</p>
            </div>

        </div>
    </div>
  )
}

export default Kundali