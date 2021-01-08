/**
 *
 * App
 *
 */

import React from 'react'

import Header from 'components/Header/Header.js'
import Main from 'components/Main/Main.js'
import Footer from 'components/Footer/Footer.js'

import './style.scss'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
