import React from 'react'
import AboutAchyra from '../Components/About/AboutAchyra'
import AboutEducation from '../Components/About/AboutEducation'
import Header from './Common/Header'
import Fotter from './/Common/Fotter'
function About() {
  return (
    <div className='MainBoxEveryPage'>
    <Header />
    <AboutAchyra />
    <AboutEducation />
    <Fotter />
    </div>
  )
}

export default About