/**
 *
 * Footer
 *
 */

import React from 'react'

import SubscriptionForm from 'shared/forms/SubscriptionForm/SubscriptionForm.js'

import { ReactComponent as YouTubeIcon } from 'assets/svg/youtube.svg'
import { ReactComponent as VkIcon } from 'assets/svg/vk.svg'
import { ReactComponent as InstagramIcon } from 'assets/svg/instagram.svg'
import { ReactComponent as FacebookIcon } from 'assets/svg/facebook.svg'

import './style.scss'

const model = [
  {
    title: 'О компании',
    links: [
      { name: 'Вакансии', url: '/#' },
      { name: 'Партнеры', url: '/#' },
      { name: 'Контакты', url: '/#' },
    ],
  },
  {
    title: 'Экспонентам',
    links: [
      { name: 'Общие условия участия', url: '/#' },
      { name: 'Услуги экспонентам', url: '/#' },
      { name: 'Документы экспонентам', url: '/#' },
      { name: 'Забронировать гостиницу', url: '/#' },
    ],
  },
  {
    title: 'Организаторам',
    links: [
      { name: 'Преимущества площадки', url: '/#' },
      { name: 'Структура комплекса', url: '/#' },
      { name: 'Онлайн-заявка на организацию', url: '/#' },
      { name: 'Документы организаторам', url: '/#' },
    ],
  },
  {
    title: 'Посетителям',
    links: [
      { name: 'Сервисы', url: '/#' },
      { name: 'Онлайн-регистрация', url: '/#' },
      { name: 'Забронировать гостиницу', url: '/#' },
      { name: 'Центр деловых контактов', url: '/#' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__menu">
            {model.map((elem, i) => (
              <div className="footer__menu-item" key={i}>
                <h3 className="footer__menu-titel">{elem.title}</h3>

                {elem.links.map((link, i) => (
                  <a className="footer__menu-link" href={link.url} key={i}>
                    {link.name}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="footer__social-wrapper">
            <div className="footer__social-group">
              <div className="footer__press">
                <h3 className="footer__press-title">Прессе</h3>

                <a className="footer__press-link" href="/#">
                  Аккредитация
                </a>

                <a className="footer__press-link" href="/#">
                  Пресс-служба
                </a>

                <a className="footer__press-link" href="/#">
                  Правила аккредитации
                </a>
              </div>

              <div className="footer__apps">
                <h3 className="footer__apps-title">Приложение</h3>

                <a className="footer__apps-link" href="/#">
                  <div className="footer__bg-apple" />
                </a>

                <a className="footer__apps-link" href="/#">
                  <div className="footer__bg-google" />
                </a>
              </div>
            </div>

            <div className="footer__social-group">
              <div className="footer__social" id="contacts">
                <h3 className="footer__social-title">Мы в соц. сетях</h3>

                <a className="footer__social-link" href="/#">
                  <YouTubeIcon />
                </a>

                <a className="footer__social-link" href="/#">
                  <VkIcon />
                </a>

                <a className="footer__social-link" href="/#">
                  <FacebookIcon />
                </a>

                <a className="footer__social-link" href="/#">
                  <InstagramIcon />
                </a>
              </div>
              <div className="footer__news">
                <h3 className="footer__news-title">Подписка на новости</h3>

                <p className="footer__news-info">
                  Получайте все самые последние новости о мероприятиях в
                  Экспофоруме.
                </p>

                <SubscriptionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
