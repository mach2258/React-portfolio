import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return <div className='navbar'>
        <div className='toggleButton'>
            <button></button>
        </div>
        <div className='links'>
            <link to="/"> Home </link>
            <link to="/projects"> Projects </link>
        </div>
    </div>
    
}

export default Navbar;