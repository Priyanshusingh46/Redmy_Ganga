import React from 'react'
import Qr from '../../Images/Payment/Qr.png'
import Qr1 from "../../Images/Payment/QR1.jpeg"
function PaymentMiddle() {
  return (
    <div className='PaymentMiddleContainer'>
        <div className='PaymentBackgroundImageCOntainer'>
        <p id="AboutUsPara">Payment</p>
        </div>

        <div className='PaymentMiddlTitle'>
            <h4 id="PaymentMiddlePara">Book any kind of puja online by advance payment on below details 
            and share your details on whats app - +9199974 83438</h4>
        </div>
        
        <div className='PaymentQrRow'>
        <div className='PaymentMiddleQrWala'>

            <div className='QrPartContainer'>
                <h2 id="AccountHolderName">Mahendra uniyal</h2>
                <div className='QrImageContainer'>
                <img id="QrImage"src={Qr1} alt="error" />
                </div>
            </div>

        </div>

        <div className='verticalLine'></div>


        <div className='PaymentMiddleRightPart'>

          <div className='PaymentMiddleRightPartTop'>
          <h4>Credit and Debit card payment</h4>
          <p id="PaymentMiddleRightPartToplink">Click here to pay via credit and debit card</p>
          </div>

          <div className='PaymentMiddleRightPartBottom'>
            <h3>Direct to Bank Account</h3>
            <p id="AccountDetails">Beneficiary name : Mahendra Uniyal</p>
              <p id="AccountDetails">Account no : 1070104000133913</p>
              <p id="AccountDetails">IFSC code : IBKL0001070</p>
             <p id="AccountDetails"> Bank : IDBI Bank</p>
          </div>

        </div>

        </div>
    </div>
  )
}

export default PaymentMiddle