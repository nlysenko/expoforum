/**
 *
 * MenuPopup
 *
 */

import React from 'react'

import Logo from 'shared/components/Logo/Logo.js'
import Navbar from 'shared/components/Navbar/Navbar.js'
import Submenu from 'shared/components/Submenu/Submenu.js'

import useWindowWidth from 'shared/hooks/useWindowWidth.js'

import './style.scss'

const MenuPopup = (props) => {
  const { menuIsOpen, toggleMenuPopup } = props
  const windowWidth = useWindowWidth()

  return (
    <div className="menu">
      {menuIsOpen ? (
        <div className="menu__overlay" onClick={toggleMenuPopup} />
      ) : (
        false
      )}

      <div
        className={`menu__menu-popup ${
          menuIsOpen && windowWidth <= 1130 ? 'menu__menu-popup--active' : ''
        }`}
      >
        <Logo />

        <Navbar />

        <Submenu />
      </div>
    </div>
  )
}

export default MenuPopup
