import React from 'react'
import maaDurga from '../../Images/Header/Maa_durga.png'
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
function PujaDescription() {
  return (
    AOS.init(),
    <div className='PujaDescriptionOuterBox'>

        <div data-aos="fade-left"  data-aos-offset="300" className='PujaDescriptionContainer'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={maaDurga} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Durga Pujan</h1>
                <p id="PujaInfoPara">
                If you feel reverence for the Mother Goddess, then you must do Durga
                 Puja for the positive energy and solutions to the problems in life. 
                 Navratri Puja, Shat Chandi, etc. are done according to the scriptural method.
                </p>
            </div>
        </div>


        <div data-aos="fade-left"  data-aos-offset="300"  className='PujaDescriptionContainer1'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Drum} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Marriage Pujas</h1>
                <p id="PujaInfoPara">Rituals are performed for the removal of Obstacles in Ark Vivah,
                 Ghar Vivah, Manglik Dosh marriage etc. And also perform marriage rites according
                to Sastrokta method.
                </p>
            </div>
        </div>



        <div data-aos="fade-left"  data-aos-offset="300"  className='PujaDescriptionContainer'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Shivling} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Rudra Abhishek</h1>
                <p id="PujaInfoPara">
                “Om Namo Bhagwate Rudraya Namah” By worshiping Lord Shiva and doing abhishek,
                 a person gets full wealth and opulence. In Rudrabhishek, according to the wishes 
                 of the person, Gaughrit, honey, milk, sugar, curd, 
                sugarcane juice, kusha water, mustard oil, giloy juice etc. 
                are done by Vedic Brahmins by scriptural method.
                </p>
            </div>
        </div>



        <div data-aos="fade-left"  data-aos-offset="300"  className='PujaDescriptionContainer1'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Fire} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Maha Mrityunjaya Jaap</h1>
                <p id="PujaInfoPara">
                “Om Namo Bhagwate Rudraya Namah” By worshiping Lord Shiva and doing abhishek,
                 a person gets full wealth and opulence. In Rudrabhishek, according to the wishes 
                 of the person, Gaughrit, honey, milk, sugar, curd, sugarcane 
                juice, kusha water, mustard oil, giloy juice etc. are done by Vedic Brahmins by scriptural method.
                </p>
            </div>
        </div>


        <div data-aos="fade-left"  data-aos-offset="300" className='PujaDescriptionContainer'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Snake} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">kal Sarp</h1>
                <p id="PujaInfoPara">
                Due to the influence of Rahu and Ketu, a person does 
                not get success and there is confusion in life, fear, 
                lack of happiness etc. It is necessary to make peace with it.
                </p>
            </div>
        </div>



        <div data-aos="fade-left"  data-aos-offset="300" className='PujaDescriptionContainer1'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Shiva} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Ganga Pujan</h1>
                <p id="PujaInfoPara">
                    By worshiping Goddess Ganga and performing Abhishek, a person becomes
                     free from Pitra Dosh. And the sins of the previous birth are
                 destroyed. Worship of Ganga according to Vedic method, worship of 
                 Lakshmi Narayan and Abhishek must be done.
                </p>
            </div>
        </div>



        <div data-aos="fade-left"  data-aos-offset="300" className='PujaDescriptionContainer'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Navgrah} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Navgrah Jap</h1>
                <p id="PujaInfoPara">
                Worship, Japa, Home Balarishta Poojan etc. is performed on the banks of the Ganges and at a particular place.
                </p>
            </div>
        </div>



        <div data-aos="fade-left"  data-aos-offset="300" className='PujaDescriptionContainer1'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Fire} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Yagya</h1>
                <p id="PujaInfoPara">
                Worship, Japa, Home Balarishta Poojan etc. 
                is performed on the banks of the Ganges and at a particular place.
                </p>
            </div>
        </div>


        <div data-aos="fade-left"  data-aos-offset="300" className='PujaDescriptionContainer'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Book} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Bhagwat Mool Path</h1>
                <p id="PujaInfoPara">
                For the prevention of Pitra Dosh, the original text of Bhagwat must be done.

                </p>
            </div>
        </div>


        <div data-aos="fade-left"  data-aos-offset="300" className='PujaDescriptionContainer1'>
            <div className='PujaDescriptionImageBox'>
            <img id ="PujaDescriptionContainerImage"src={Yantra} alt="error" />
            </div>
            <div classname="PujaDescriptionContainerInfo">
                <h1 id="pujaInfoHeading">Yantra Pujan</h1>
                <p id="PujaInfoPara">
                All the rituals of Vedic and Tantric rituals are performed by qualified learned Brahmins.
                </p>
            </div>
        </div>

    </div>
  )
}

export default PujaDescription