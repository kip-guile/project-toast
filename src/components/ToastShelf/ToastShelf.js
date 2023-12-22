import React, { useContext } from 'react'

import { ToastContext } from '../ToastProvider'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf() {
  const { allToasts } = useContext(ToastContext)

  return (
    <ol
      role='region'
      aria-live='polite'
      aria-label='notification'
      className={styles.wrapper}
    >
      {allToasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast toastInfo={toast} />
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
