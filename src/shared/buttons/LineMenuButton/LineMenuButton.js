/**
 *
 * LineMenuButton
 *
 */

import React from 'react'

import './style.scss'

const LineMenuButton = (props) => {
  const { active, toggleMenuPopup } = props

  return (
    <div
      className={`line-menu-btn ${active ? 'line-menu-btn--active' : ''}`}
      onClick={toggleMenuPopup}
    >
      <div className="line-menu-btn__bar1"></div>
      <div className="line-menu-btn__bar2"></div>
      <div className="line-menu-btn__bar3"></div>
    </div>
  )
}

export default LineMenuButton
