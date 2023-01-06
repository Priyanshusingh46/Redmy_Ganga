import React from 'react'
import Fotter from './Common/Fotter';
import Header from './Common/Header'
import Kundali from './Common/Kundali';
import Puja from './Common/Puja';
import PujaDescription from './Services/PujaDescription';

function Service() {
  return (
    <div className='MainBoxEveryPage'>
    <Header />
    <div className='serviceBackgroundImageBox'></div>
    <Kundali />
    <Puja />
    <PujaDescription />
    <Fotter />
    </div>
  )
}

export default Service