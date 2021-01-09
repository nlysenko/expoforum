/**
 *
 * Lang
 *
 */

import React from 'react'

import { ReactComponent as Globe } from 'assets/svg/globe.svg'

import './style.scss'

const Lang = () => {
  return (
    <div className="lang">
      <Globe />

      <a className="lang__en" href="/#">
        English
      </a>
    </div>
  )
}

export default Lang
