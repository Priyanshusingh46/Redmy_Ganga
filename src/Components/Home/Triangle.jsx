import React from 'react'
import om from '../../Images/Header/om.png'
import AOS from "aos";
import "aos/dist/aos.css";
function Triangle() {
  return (
    AOS.init(),
    <div className='triangleBox'>
        <div className='triangleText1Box'>
        <span id="textmantra"> ॐ नमो गंगायै विश्वरुपिणी </span> <br></br>
        <span id="textmantra"> नारायणी नमो नम:।।</span>
        </div>
        <div data-aos="fade-up-right"  data-aos-offset="300"  className='omBox'>
        <img id="omImage" src={om} alt="error"/>
        </div>
        <div className='triangleText2Box'>
            <span id="textmantra1">गंगां वारि मनोहारि मुरारिचरणच्युतं ।</span><br></br>
            <span id="textmantra1">त्रिपुरारिशिरश्चारि पापहारि पुनातु मां ।।</span>
        </div>
    </div>
  )
}

export default Triangle