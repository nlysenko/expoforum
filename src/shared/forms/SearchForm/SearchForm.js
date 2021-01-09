/**
 *
 * SearchForm
 *
 */

import React, { useState } from 'react'

import { ReactComponent as Search } from 'assets/svg/search.svg'

import './style.scss'

const SearchForm = () => {
  const [searchInputIsActive, setSearchInputIsActive] = useState(false)

  return (
    <form
      className="search-form"
      id="searchForm"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <label className="search-form__search" htmlFor="search">
        {searchInputIsActive ? (
          <input
            className="search-form__query"
            type="text"
            name="query"
            id="search"
          />
        ) : (
          false
        )}

        <Search
          className={`search-form__icon ${
            searchInputIsActive ? 'search-form__icon--active' : ''
          }`}
          onClick={() => setSearchInputIsActive(!searchInputIsActive)}
        />

        <input type="submit" hidden />
      </label>
    </form>
  )
}

export default SearchForm
