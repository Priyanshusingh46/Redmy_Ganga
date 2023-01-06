import React from 'react'
import Fotter from './Common/Fotter'
import Header from './Common/Header'
import ContactMiddle from './Contact/ContactMiddle' 
import Map from './Contact/Map'
function Contact() {
  return (
    <div className='MainBoxEveryPage'>
    <Header />
    <ContactMiddle />
    <Map />
    <Fotter />
    </div>
  )
}

export default Contact