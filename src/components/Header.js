import React from 'react'
import  logo  from '../assets/logo.png'

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div><img src={logo} alt="Logo"/></div>
            <div><h2>The Beagle Todo List</h2></div>
        </div>
    )
}

export default Header
