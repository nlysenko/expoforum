/**
 *
 * Resources
 *
 */

import React from 'react'

import './style.scss'

const model = [
  {
    users: 'Организаторам',
    resources: [
      { name: 'Документы организаторам', url: '/#' },
      { name: 'Услуги организаторам', url: '/#' },
      { name: 'Выставочные площади', url: '/#' },
      { name: 'Рестораны и кафе', url: '/#' },
      { name: 'Конгресс-центр', url: '/#' },
      { name: 'Спорт-центр', url: '/#' },
    ],
  },
  {
    users: 'Экспонентам',
    resources: [
      { name: 'Общие условия участия', url: '/#' },
      { name: 'Услуги экспонентам', url: '/#' },
      { name: 'Документы экспонентам', url: '/#' },
      { name: 'Центр деловых контактов', url: '/#' },
      { name: 'Забронировать гостиницу', url: '/#' },
    ],
  },
  {
    users: 'Посетителям',
    resources: [
      { name: 'Сервисы', url: '/#' },
      { name: 'Онлайн-регистрация  на мероприятие', url: '/#' },
      { name: 'Забронировать гостиницу', url: '/#' },
      { name: 'Центр деловых контактов', url: '/#' },
    ],
  },
  {
    users: 'Прессе',
    resources: [
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
          {model.map((block, i) => (
            <div className="res-section__item" key={i}>
              <h2 className="res-section__title">{block.users}</h2>

              {block.resources.map((item, i) => (
                <a className="res-section__link" href={item.url} key={i}>
                  {item.name}
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
