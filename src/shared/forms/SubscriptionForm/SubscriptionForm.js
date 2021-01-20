/**
 *
 * SubscriptionForm
 *
 */

import React, { useState } from 'react'

import './style.scss'

const SubscriptionForm = () => {
  const [userEmailIsValid, setUserEmailIsValid] = useState(true)
  const [userEmail, setUserEmail] = useState('')

  const handleChangeUserEmail = (elem) => {
    const regExpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let value = elem.target.value

    setUserEmailIsValid(regExpEmail.test(value))
    setUserEmail(value)
  }

  const handleSubmitUserEmail = (e) => {
    e.preventDefault()

    if (userEmail && userEmailIsValid) {
      const formData = new FormData(document.forms.SubscriptionForm)

      console.log('formData: ', formData)
    }
  }

  return (
    <form
      className="subscription-form"
      onSubmit={handleSubmitUserEmail}
      name="SubscriptionForm"
    >
      <div className="subscription-form__group">
        <label className="subscription-form__item" htmlFor="user_email">
          <input
            className="subscription-form__email"
            placeholder="Введите ваш email"
            type="email"
            name="user_email"
            onChange={handleChangeUserEmail}
          />
        </label>

        <button
          className="subscription-form__submit-btn"
          type="submit"
          onClick={handleSubmitUserEmail}
        >
          <i className="subscription-form__icon" />
        </button>
      </div>

      {!userEmailIsValid ? (
        <span className="subscription-form__error-message">
          Введите крорректрый email!
        </span>
      ) : (
        false
      )}
    </form>
  )
}

export default SubscriptionForm
