import React from 'react'
import om from '../../Images/Header/om.png'
import AOS from "aos";
import "aos/dist/aos.css";
function Triangle() {
  return (
    AOS.init(),
    <div className='triangleBox'>
        <div className='triangleText1Box'>
        <p id="textmantra"> ॐ नमो गंगायै विश्वरुपिणी नारायणी नमो नम:।। </p>
        </div>
        <div data-aos="fade-up-right"  data-aos-offset="300"  className='omBox'>
        <img id="omImage" src={om} alt="error"/>
        </div>
        <div className='triangleText2Box'>
            <p id="textmantra1">गंगां वारि मनोहारि मुरारिचरणच्युतं ।त्रिपुरारिशिरश्चारि पापहारि पुनातु मां ।।</p>
        </div>
    </div>
  )
}

export default Triangle

/*

    */