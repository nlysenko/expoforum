/**
 *
 * SearchForm
 *
 */

import React from 'react'

import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'

import './style.scss'

const onSubmitForm = (e) => {
  e.preventDefault()
}

const SearchForm = () => {
  return (
    <form className="search-form" id="searchForm" onSubmit={onSubmitForm}>
      <label className="search-form__search" htmlFor="search">
        <input
          className="search-form__query"
          type="text"
          name="query"
          id="search"
        />

        <SearchIcon className="search-form__icon" onClick={onSubmitForm} />

        <input type="submit" hidden />
      </label>
    </form>
  )
}

export default SearchForm
