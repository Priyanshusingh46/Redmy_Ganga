import React from 'react';
import css from "../../style.css";
import whatsapp  from "../../Images/Fotter/whatsapp .png";
import Instagram  from "../../Images/Fotter/instagram.png"
import Facebook  from "../../Images/Fotter/facebook .png"
function Fotter(){
    return (
        <div className ="Fotter-outer">
            <div className="fotteraddress">
                <h1 id ="headingFotter">Contact</h1>

                <span className="span1">93, P.O. Swargashram, Near SBI Hostel, laxman jhula</span><br></br>
                <span className="span1"> Uttrakhand-249304, India </span><br></br>
                <span className="span1">Email: mahendrauniyal@gmail.com</span><br></br>
                <span className="span1">Phone : +91 9997483438, +91 8630835855</span><br></br>
            </div>

            <div className="map">
                <h1 id ="headingFotter"> Locate Us</h1>
                <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6901.709169931712!2d78.3241006763999!3d30.12697425696091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sContact%20Us%20%2093%2C%20P.O.%20Swargashram%2C%20Near%20SBI%20Hostel%2C%20laxman%20jhula%20(Himalayas)%2C%20Uttrakhand-249304%2C%20India%20%20%20!5e0!3m2!1sen!2sin!4v1672228832962!5m2!1sen!2sin" style={{width:"400", height:"300" ,style:"border:0"}}></iframe>
                </p>
                   
            </div>


            <div className="fotteraddress">
                <h1 id ="headingFotter">Social Media</h1>

                <div className='socialImageContainer'>

                    <img id="imagesocial" src={whatsapp} alt="error" />
                    <a href="https://www.instagram.com/uniyalmahendra/">
                    <img id="imagesocial" src={Instagram} alt="error" />
                    </a>
                    <a href="https://www.facebook.com/mahendra.uniyal.5">
                    <img id="imagesocial" src={Facebook} alt="error" />
                    </a>

                </div>
            </div>

        </div>
    );
}
export default Fotter;