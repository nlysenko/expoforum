/**
 *
 * Submenu
 *
 */

import React from 'react'
import SearchForm from 'shared/forms/SearchForm/SearchForm.js'
import Lang from 'shared/components/Lang/Lang.js'

import './style.scss'

const Submenu = () => {
  return (
    <div className="submenu">
      <SearchForm />
      <Lang />
    </div>
  )
}

export default Submenu
