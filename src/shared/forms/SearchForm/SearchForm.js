/**
 *
 * SearchForm
 *
 */

import React, { useState } from 'react'

import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'

import './style.scss'

const SearchForm = () => {
  const [searchQueryIsValid, setSearchQueryIsValid] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const handleChangeSearchQuery = (elem) => {
    const regExpText = /[a-я][А-Я]?/
    let value = elem.target.value

    setSearchQueryIsValid(regExpText.test(value))
    setSearchQuery(value)
  }

  const handleSubmitSearchQuery = (e) => {
    e.preventDefault()

    if (searchQuery && searchQueryIsValid) {
      const formData = new FormData(document.forms.SearchForm)

      console.log('formData: ', formData)
    }
  }

  return (
    <form
      className="search-form"
      name="SearchForm"
      onSubmit={handleSubmitSearchQuery}
    >
      <label className="search-form__search" htmlFor="search">
        <input
          className="search-form__search-query"
          type="text"
          name="search_query"
          onChange={handleChangeSearchQuery}
        />
      </label>

      <button
        className="search-form__submit-btn"
        type="submit"
        onClick={handleSubmitSearchQuery}
      >
        <SearchIcon className="search-form__icon" />
      </button>
    </form>
  )
}

export default SearchForm
