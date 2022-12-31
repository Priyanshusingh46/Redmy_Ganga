import React from 'react'
import Durga from '../../Images/Header/Maa_durga.png'
import Drum from '../../Images/Header/Drum.png'
import Shivling from '../../Images/Header/Shivling.png'
import Snake from '../../Images/Header/Snake.png'
import Fire from "../../Images/Header/fire.png"
import Shiva from "../../Images/Header/God_shiva.png"
import Navgrah from "../../Images/Header/Navgrah.png"
import Book from "../../Images/Header/Book.png"
import Yantra from "../../Images/Header/Yantra.png"
import AOS from "aos";
import "aos/dist/aos.css";
function Puja() {
  return (
    AOS.init(),
    <div className='PujaBox'>
        <h1 id="KundaliText">Puja</h1>
        <div className='PujaItemsCard'>

        
        <div data-aos="flip-right" data-aos-offset="100" className='PujaItems'>
        <div className='PujaItemImageBox'>
            <img  id ="PujaItemImage" src={Durga} alt="error" />
        </div>
         <p id="PujaName">Durga Pujan</p>
        </div>


        <div data-aos="flip-right" data-aos-offset="100" className='PujaItems'>
        <div className='PujaItemImageBox'>
            <img  id ="PujaItemImage" src={Drum} alt="error" />
        </div>
         <p id="PujaName">Marriage Pujas</p>
        </div>


        <div data-aos="flip-right" data-aos-offset="100" className='PujaItems'>
        <div className='PujaItemImageBox'>
            <img  id ="PujaItemImage" src={Shivling} alt="error" />
        </div>
         <p id="PujaName">Rudra Abhishek</p>
        </div>


        <div data-aos="flip-right" data-aos-offset="100" className='PujaItems'>
        <div className='PujaItemImageBox'>
            <img  id ="PujaItemImage" src={Fire} alt="error" />
        </div>
         <p id="PujaName">Maha Mrityunjaya</p>
        </div>

        <div data-aos="flip-left" data-aos-offset="100" className='PujaItems'>
        <div className='PujaItemImageBox'>
            <img  id ="PujaItemImage" src={Snake} alt="error" />
        </div>
         <p id="PujaName">Kal Sarp</p>
        </div>
        
    </div>





    <div className='PujaItemsCard'>

        
    <div data-aos="flip-right" data-aos-offset="100" className='PujaItems'>
    <div className='PujaItemImageBox'>
        <img  id ="PujaItemImage" src={Shiva} alt="error" />
    </div>
    <p id="PujaName">Ganga Pujan</p>
    </div>


    <div data-aos="flip-right" data-aos-offset="100" className='PujaItems'>
    <div className='PujaItemImageBox'>
        <img  id ="PujaItemImage" src={Navgrah} alt="error" />
    </div>
    <p id="PujaName">Navgrah Jap</p>
    </div>


    <div data-aos="flip-right" data-aos-offset="100" className='PujaItems'>
    <div className='PujaItemImageBox'>
        <img  id ="PujaItemImage" src={Book} alt="error" />
    </div>
    <p id="PujaName">Bhagwat mool Path</p>
    </div>


    <div data-aos="flip-right" data-aos-offset="100" className='PujaItems'>
    <div className='PujaItemImageBox'>
        <img  id ="PujaItemImage" src={Fire} alt="error" />
    </div>
    <p id="PujaName">Yagya</p>
    </div>

    <div data-aos="flip-left" data-aos-offset="100" className='PujaItems'>
    <div className='PujaItemImageBox'>
        <img  id ="PujaItemImage" src={Yantra} alt="error" />
    </div>
    <p id="PujaName">Yantra Pujan</p>
    </div>

    </div>
    </div>
  )
}

export default Puja