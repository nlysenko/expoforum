/**
 *
 * Navbar
 *
 */

import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './style.scss'

const NavbarList = [
  { name: 'О комплексе', id: 'about-forum' },
  { name: 'О компании', id: 'resources' },
  { name: 'Новости', id: 'news' },
  { name: 'Медиа-банк', id: 'media-bank' },
  { name: 'Контакты', id: 'contacts' },
]

const Navbar = (props) => {
  const { toggleMenuPopup } = props

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {NavbarList.map((elem, i) => (
          <li className="navbar__item" key={i}>
            <AnchorLink
              className="navbar__link"
              href={`#${elem.id}`}
              onClick={toggleMenuPopup}
            >
              {elem.name}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
