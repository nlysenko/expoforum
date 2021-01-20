/**
 *
 * Header
 *
 */

import React from 'react'

import Logo from 'shared/components/Logo/Logo.js'
import Navbar from 'shared/components/Navbar/Navbar.js'
import Submenu from 'shared/components/Submenu/Submenu.js'
import LineMenuButton from 'shared/buttons/LineMenuButton/LineMenuButton.js'

import useWindowWidth from 'shared/hooks/useWindowWidth.js'
import useScroll from 'shared/hooks/useScroll.js'

import './style.scss'

const Header = (props) => {
  const { menuIsOpen, toggleMenuPopup } = props
  const windowWidth = useWindowWidth()
  const pageYOffset = useScroll()

  return (
    <header className={`header ${pageYOffset > 90 ? 'header--active' : ''}`}>
      <div className="header__navigation">
        <Logo />

        {windowWidth > 1130 ? <Navbar /> : false}

        {windowWidth > 1130 ? <Submenu /> : false}

        {windowWidth <= 1130 ? (
          <LineMenuButton
            toggleMenuPopup={toggleMenuPopup}
            active={menuIsOpen}
          />
        ) : (
          false
        )}
      </div>
    </header>
  )
}

export default Header
