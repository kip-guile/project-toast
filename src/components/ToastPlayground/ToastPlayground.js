import React from 'react'

import Form from '../Form'
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <div className={styles.controlsWrapper}>
        <ToastShelf />
        <Form toastvariants={VARIANT_OPTIONS} />
      </div>
    </div>
  )
}

export default ToastPlayground
