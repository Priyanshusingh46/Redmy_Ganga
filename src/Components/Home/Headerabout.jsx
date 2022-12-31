import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function Headerabout() {
  return (
    AOS.init(),
    <div className='Headeraboutcontainer'>
        <div data-aos="fade-right"  data-aos-offset="300" className='HeaderaboutBox1'>
            <div className='HeaderaboutBox1Text'>
            <p id='HeaderaboutText1'>
            It is said that the holy water of the river Ganga removes all the sins and spiritualizes your soul.
             It is said that the person who takes a dip in the river Ganga will get Moksha.
            Also Ganga is seen as a mother to humanity.
            Pilgrims immerse the ashes of their kin in the river Ganga
            </p>
            </div>

        </div>


        <div data-aos="fade-left"  data-aos-offset="300" className='HeaderaboutBox2'>
            
        </div>
    </div>
  )
}

export default Headerabout