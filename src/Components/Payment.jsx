import React from 'react'
import Header from './Common/Header'
import PaymementMiddle from './Payment/PaymentMiddle'
import Fotter from './Common/Fotter'
function Payment() {
  return (
    <div className='MainBoxEveryPage'>
    <Header />
    <PaymementMiddle />
    <Fotter />
    </div>
  )
}

export default Payment