import React, { useState, useId, useContext } from 'react'

import { ToastContext } from '../App'

import styles from './Form.module.css'

import Button from '../Button'

function Form({ toastvariants }) {
  const { setIsModalOpen, handleToastInfo, isModalOpen } =
    useContext(ToastContext)
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('')
  const id = useId()
  const generatedId = `variant-${id}`

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message && variant) {
      handleToastInfo({ message, variant })
      setIsModalOpen(true)
    }
    setVariant('')
    setMessage('')
  }

  const handleChange = (event) => {
    setVariant(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label
          htmlFor='message'
          className={styles.label}
          style={{ alignSelf: 'baseline' }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id='message'
            className={styles.messageInput}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {toastvariants.map((item) => (
            <label key={`variant-${item}`} htmlFor={`variant-${item}`}>
              <input
                id={generatedId}
                type='radio'
                name='variant'
                value={item}
                checked={variant === item}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  )
}

export default Form
