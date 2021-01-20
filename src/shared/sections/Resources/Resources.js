/**
 *
 * Resources
 *
 */

import React from 'react'

import './style.scss'

const model = [
  {
    title: 'Организаторам',
    links: [
      { name: 'Документы организаторам', url: '/#' },
      { name: 'Услуги организаторам', url: '/#' },
      { name: 'Выставочные площади', url: '/#' },
      { name: 'Рестораны и кафе', url: '/#' },
      { name: 'Конгресс-центр', url: '/#' },
      { name: 'Спорт-центр', url: '/#' },
    ],
  },
  {
    title: 'Экспонентам',
    links: [
      { name: 'Общие условия участия', url: '/#' },
      { name: 'Услуги экспонентам', url: '/#' },
      { name: 'Документы экспонентам', url: '/#' },
      { name: 'Центр деловых контактов', url: '/#' },
      { name: 'Забронировать гостиницу', url: '/#' },
    ],
  },
  {
    title: 'Посетителям',
    links: [
      { name: 'Сервисы', url: '/#' },
      { name: 'Онлайн-регистрация  на мероприятие', url: '/#' },
      { name: 'Забронировать гостиницу', url: '/#' },
      { name: 'Центр деловых контактов', url: '/#' },
    ],
  },
  {
    title: 'Прессе',
    links: [
      { name: 'Аккредитация', url: '/#' },
      { name: 'Пресс-служба', url: '/#' },
      { name: 'Правила аккредитации', url: '/#' },
    ],
  },
]

const Resources = () => {
  return (
    <section className="res-section" id="resources">
      <div className="container">
        <div className="res-section__inner">
          {model.map((elem, i) => (
            <div className="res-section__item" key={i}>
              <h2 className="res-section__title">{elem.title}</h2>

              {elem.links.map((link, i) => (
                <a className="res-section__link" href={link.url} key={i}>
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources
