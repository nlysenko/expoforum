/**
 *
 * App
 *
 */

import React, { useState, useEffect } from 'react'

import MenuPopup from 'components/MenuPopup/MenuPopup.js'
import Header from 'components/Header/Header.js'
import Main from 'components/Main/Main.js'
import Footer from 'components/Footer/Footer.js'

import './style.scss'

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenuPopup = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  useEffect(() => {
    document.body.classList.toggle('menu-popup-open', menuIsOpen)
  }, [menuIsOpen])

  return (
    <div className="app">
      <MenuPopup menuIsOpen={menuIsOpen} toggleMenuPopup={toggleMenuPopup} />

      <Header menuIsOpen={menuIsOpen} toggleMenuPopup={toggleMenuPopup} />

      <Main />

      <Footer />
    </div>
  )
}

export default App
