/**
 *
 * ShowMoreButton
 *
 */

import React from 'react'

import { ReactComponent as ArrowIcon } from 'assets/svg/arrow.svg'

import './style.scss'

const ShowMoreButton = (props) => {
  const { name, url } = props

  return (
    <a className="show-more-btn" href={url}>
      <span className="show-more-btn__title">{name}</span>

      <ArrowIcon />
    </a>
  )
}

export default ShowMoreButton
