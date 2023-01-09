import React from 'react'
import { NavLink } from "react-router-dom";
import Kalash from "../../Images/Header/Kalash.png"
import css from "../../style.css";
function Header() {
  return (
    <div className='HeaderBox'>
      <NavLink to ="/">
        < div className='KalashnameBox'>
            <img id="kalashimage" src={Kalash} alt="error"/>
            <span id="Remedy_ganga"> Remedy Ganga</span>
        </div>
        </NavLink>
        <div className='linkTab'>

        <ul className="link">
                    <li >
                    <NavLink to="/">Home</NavLink>
                    </li>

                    <li >
                    <NavLink to="/about">About</NavLink>
                    </li>

                    <li>
                    <NavLink to="/service">Services</NavLink>
                    </li>

                    <li>
                    <NavLink to="/payment">Payment</NavLink>
                    </li>

                    <li>
                    <NavLink to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>
               

        </div>
    </div>
  )
}

export default Header

/*  <Link to="/home">Home</Link> */