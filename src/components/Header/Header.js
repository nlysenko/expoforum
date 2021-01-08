/**
 *
 * Header
 *
 */

import React from 'react'

import Logo from 'shared/components/Logo/Logo.js'
import Navbar from 'shared/components/Navbar/Navbar.js'

import './style.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
