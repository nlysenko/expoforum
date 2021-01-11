/**
 *
 * Header
 *
 */

import React, { useState } from 'react'

import Logo from 'shared/components/Logo/Logo.js'
import Navbar from 'shared/components/Navbar/Navbar.js'
import Submenu from 'shared/components/Submenu/Submenu.js'
import LineMenuButton from 'shared/buttons/LineMenuButton/LineMenuButton.js'

import './style.scss'

const Header = () => {
  const [menuPopupIsActive, setMenuPopupIsActive] = useState(false)

  const toggleMenuPopup = () => {
    setMenuPopupIsActive(!menuPopupIsActive)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__navigation">
          <Logo />
          <Navbar />
          <Submenu />

          <LineMenuButton
            toggleMenuPopup={toggleMenuPopup}
            active={menuPopupIsActive}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
