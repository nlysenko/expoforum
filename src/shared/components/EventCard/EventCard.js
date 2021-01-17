/**
 *
 * EventCard
 *
 */

import React from 'react'

import './style.scss'

const EventCard = (props) => {
  const { banner, duration, title, specification } = props

  return (
    <div className="card">
      <img className="card__banner" src={banner} alt="banner" />

      <p className="card__duration">{duration}</p>

      <h3 className="card__title">{title}</h3>

      <p className="card__specification">{specification}</p>
    </div>
  )
}

export default EventCard
