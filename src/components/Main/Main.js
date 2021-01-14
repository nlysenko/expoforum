/**
 *
 * Main
 *
 */

import React from 'react'

import Top from 'shared/sections/Top/Top.js'
import Resources from 'shared/sections/Resources/Resources.js'
import Events from 'shared/sections/Events/Events.js'

import './style.scss'

const Main = () => {
  return (
    <main className="main">
      <Top />
      <Resources />
      <Events />
    </main>
  )
}

export default Main
