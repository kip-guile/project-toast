import React, { useId, useContext } from 'react'

import { ToastContext } from '../ToastProvider'

import styles from './Form.module.css'

import Button from '../Button'

function Form({ toastvariants }) {
  const { setToastInfo, toastInfo, setAllToasts, allToasts } =
    useContext(ToastContext)
  const id = useId()

  function generateRandomId() {
    const randomPart = Math.random().toString(36).substring(2, 15) // Generates a random string
    const timePart = new Date().getTime().toString(36) // Current timestamp in base 36
    return `id_${randomPart}_${timePart}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (toastInfo.message && toastInfo.variant) {
      setAllToasts([
        ...allToasts,
        {
          id: generateRandomId(),
          message: toastInfo.message,
          variant: toastInfo.variant,
        },
      ])
    }
    setToastInfo({ id: '', message: '', variant: 'notice' })
  }

  const handleChangeVariant = (event) => {
    setToastInfo({ ...toastInfo, variant: event.target.value })
  }

  const handleChangeMessage = (event) => {
    setToastInfo({ ...toastInfo, message: event.target.value })
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
            onChange={handleChangeMessage}
            value={toastInfo?.message}
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
                id={`variant-${item}-${id}`}
                type='radio'
                name='variant'
                value={item}
                checked={toastInfo?.variant === item}
                onChange={handleChangeVariant}
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
