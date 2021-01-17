/**
 *
 * Events
 *
 */

import React from 'react'

import { ReactComponent as ArrowIcon } from 'assets/svg/arrow.svg'

import EventCard from 'shared/components/EventCard/EventCard.js'

import Event1 from 'assets/img/event_1.webp'
import Event2 from 'assets/img/event_2.webp'
import Event3 from 'assets/img/event_3.webp'
import Event4 from 'assets/img/event_4.webp'
import Event5 from 'assets/img/event_5.webp'
import Event6 from 'assets/img/event_6.webp'

import './style.scss'

const model = [
  {
    title: 'ЭКСПО ЕЛКА',
    banner: Event1,
    specification: 'Парк интерактивных развлечений',
    duration: '2 января 2020 г. – 7 января 2020 г.',
  },
  {
    title: 'Junwex Петербург',
    banner: Event2,
    specification: 'Выставка ювелирных изделий',
    duration: '5 февраля 2020 г. – 9 февраля 2020 г.',
  },
  {
    title: 'Невский ларец',
    banner: Event3,
    specification:
      'Выставка-ярмарка народных художественных промыслов и ремесел',
    duration: '7 февраля 2020 г. – 9 февраля 2020 г.',
  },
  {
    title: 'ПОНАЕХАЛИ!',
    banner: Event4,
    specification: 'Специализированная арт-ярмарка',
    duration: '14 февраля 2020 г. – 23 февраля 2020 г.',
  },
  {
    title: 'VET.CAMP',
    banner: Event5,
    specification: 'Конференция для ветеринарных врачей',
    duration: '18 февраля 2020 г. – 21 февраля 2020 г.',
  },
  {
    title: 'ExpoHoReCa',
    banner: Event6,
    specification: 'Специализированная выставка',
    duration: '26 февраля 2020 г. – 28 февраля 2020 г.',
  },
]

const Events = () => {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="events__title-wrapper">
          <h2 className="events__title">Текущие и будущие мероприятия</h2>

          <div className="events__more-events">
            <a className="events__more-link" href="/#">
              Все мероприятия
            </a>

            <ArrowIcon />
          </div>
        </div>

        <div className="events__list">
          {model.map((event, i) => {
            const { title, banner, specification, duration } = event

            return (
              <EventCard
                title={title}
                banner={banner}
                specification={specification}
                duration={duration}
                key={i}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Events
