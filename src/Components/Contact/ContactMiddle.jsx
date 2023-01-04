import React from 'react'
import Location from '../../Images/Contact/location.png'
import Email from '../../Images/Contact/email.png'
import call from '../../Images/Contact/telephone-call.png'
function ContactMiddle() {
  return (
    <div className='ContactMiddleOuterdiv'>
        <div className='ContactMiddleFirstPart'>
            <div className='emaillocationwaladiv'>
                <img id="ContactMiddleImage" src={Location} alt="error" />
                <p id="ContactMiddlePara">
                93, P.O. Swargashram, Near SBI Hostel, laxman jhula (Himalayas), Uttrakhand-249304, India 
                </p>
            </div>

            <div className='emaillocationwaladiv'>
                <img id="ContactMiddleImage" src={call} alt="error" />
                <p id="ContactMiddlePara">
                +91 9997483438, +91 8630835855
                </p>
            </div>

            <div className='emaillocationwaladiv'>
                <img id="ContactMiddleImage" src={Email} alt="error" />
                <p id="ContactMiddlePara">
                mahendrauniyal@gmail.com
                </p>
            </div>
        </div>

        <div className='ContactForm'>
            <form>
            <label id="contactformname">
             Name
            </label><br/>
                <input id="textinput1" type="text" required/><br></br>

                <label id="contactformname">
               Contact no
                </label><br/>
                <input id="textinput1" type="text" pattern="[0-9]*" required/><br></br>

                <label id="contactformname">
                    Message
                </label><br/>
                
                <input id="textinput" type="text" required/>
                <div className='senddivform'>
                    <h2 id="sendbutton">SEND</h2>
                </div>
            </form>
        </div>

       
    </div>
  )
}

export default ContactMiddle

/*
<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13803.417072972505!2d78.31972327724469!3d30.126983318791233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s93%2C%20P.O.%20Swargashram%2C%20Near%20SBI%20Hostel%2C%20laxman%20jhula%20(Himalayas)%2C%20Uttrakhand-249304%2C%20India!5e0!3m2!1sen!2sin!4v1672660125186!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
*/