/**
 *
 * News
 *
 */

import React from 'react'

import ShowMoreButton from 'shared/buttons/ShowMoreButton/ShowMoreButton.js'

import Banner1 from 'assets/img/ad-1.webp'
import Banner2 from 'assets/img/ad-2.webp'
import News1 from 'assets/img/news_1.webp'
import News2 from 'assets/img/news_2.webp'
import News3 from 'assets/img/news_3.webp'

import './style.scss'

const news = [
  {
    title: 'Как объединилась реальность и виртуальность – LIKEE PARTY',
    image: News1,
    date: '4 января 2020 г.',
    url: '/#',
  },

  {
    title: 'Как объединилась реальность и виртуальность – LIKEE PARTY',
    image: News2,
    date: '12 января 2020 г.',
    url: '/#',
  },

  {
    title: 'Как объединилась реальность и виртуальность – LIKEE PARTY',
    image: News3,
    date: '20 января 2020 г.',
    url: '/#',
  },
]

const News = () => {
  return (
    <section className="news-section" id="news">
      <div className="container">
        <div className="news-section__inner">
          <div className="news-section__banners">
            <img className="news-section__banner" src={Banner1} alt="banner" />

            <img className="news-section__banner" src={Banner2} alt="banner" />
          </div>

          <div className="news-section__news">
            <div className="news-section__news-header">
              <h2 className="news-section__title">Новости</h2>

              <ShowMoreButton name="Все новости" url="/#" />
            </div>

            <ul className="news-section__news-list">
              {news.map((item, i) => (
                <li className="news-section__news-item" key={i}>
                  <a href={item.url}>
                    <img
                      className="news-section__news-img"
                      src={item.image}
                      alt="news"
                    />
                  </a>

                  <div className="news-section__item-inner">
                    <span className="news-section__date">{item.date}</span>

                    <a className="news-section__link" href={item.url}>
                      <h3 className="news-section__news-title">{item.title}</h3>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
