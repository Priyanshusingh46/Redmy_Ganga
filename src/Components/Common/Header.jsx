import React from 'react'
import {Link } from "react-router-dom";
import Kalash from "../../Images/Header/Kalash.png"
import css from "../../style.css";
function Header() {
  return (
    <div className='HeaderBox'>
        < div className='KalashnameBox'>
            <img id="kalashimage" src={Kalash} alt="error"/>
            <span id="Remedy_ganga"> Remedy Ganga</span>
        </div>
        <div className='linkTab'>

        <ul className="link">
                    <li >
                    <Link to="/">Home</Link>
                    </li>

                    <li >
                    <Link to="/about">About</Link>
                    </li>

                    <li>
                    <Link to="/service">Services</Link>
                    </li>

                    <li>
                    <Link to="/payment">Payment</Link>
                    </li>

                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                    
                </ul>
               

        </div>
    </div>
  )
}

export default Header

/*  <Link to="/home">Home</Link> */