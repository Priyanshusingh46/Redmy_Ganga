import React from 'react'
import Fotter from './Common/Fotter';
import Header from './Common/Header'
import Kundali from './Common/Kundali';
import Puja from './Common/Puja';
import PujaDescription from './Services/PujaDescription';

function Service() {
  return (
    <>
    <Header />
    <div className='serviceBackgroundImageBox'></div>
    <Kundali />
    <Puja />
    <PujaDescription />
    <Fotter />
    </>
  )
}

export default Service