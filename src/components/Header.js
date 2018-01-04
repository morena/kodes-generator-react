import React from 'react'
import Navigation from './Navigation'

const Header = () => (
    <div>
        <a href="/" className="navbar-brand page-scroll">
            <img src="../../assets/images/kodes-logo.png" alt="Kodes Accessories" width="100"/>
        </a>
        <Navigation/>
    </div>
)

export default Header
