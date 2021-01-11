/**
 *
 * Logo
 *
 */

import React from 'react'

import LogoImg from 'assets/img/logo.webp'

import './style.scss'

const Logo = () => {
  return (
    <a href="/#" className="logo-link">
      <img alt="logo" src={LogoImg} />
    </a>
  )
}

export default Logo
