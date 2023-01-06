import React from 'react'
import AchrayaBox from './Home/AchrayaBox'
import Fotter from './Common/Fotter'
import Header from './Common/Header'
import Headerabout from './Home/Headerabout'
import Kundali from './Common/Kundali'
import Middle from './Home/Middle'
import Puja from './Common/Puja'
import Triangle from './Home/Triangle'

function Home() {
  return (
    <div className='MainBoxEveryPage'>
        <Header />
        <Middle />
        <Triangle />
        <Headerabout />
        <AchrayaBox />
        <Kundali />
        <Puja />
        <Fotter />
    </div>
  )
}

export default Home