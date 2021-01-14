/**
 *
 * Top
 *
 */

import React from 'react'

import { ReactComponent as ArrowIcon } from 'assets/svg/arrow.svg'

import './style.scss'

const cards = [
  { title: 'Календарь мероприятий', url: '/#' },
  { title: 'Как добраться до Экспофорума', url: '/#' },
  { title: 'Онлайн-заявка на организацию мероприятия', url: '/#' },
  { title: 'План и инфраструктура комплекса', url: '/#' },
]

const Top = () => {
  return (
    <section className="top-section" id="about-forum">
      <div className="container">
        <div className="top-section__inner">
          <div className="top-section__about-forum">
            <h1 className="top-section__title">ЭКСПОФОРУМ</h1>

            <p className="top-section__info-text">
              конгрессно-выставочный центр Санкт-Петербурга
            </p>

            <a className="top-section__more-link" href="/#">
              О комплексе
              <ArrowIcon />
            </a>
          </div>

          <div className="top-section__info">
            {cards.map((elem, i) => (
              <div className="top-section__card" key={i}>
                <h3 className="top-section__card-title">{elem.title}</h3>

                <a className="top-section__card-more-link" href={elem.url}>
                  Подробнее
                  <ArrowIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Top
