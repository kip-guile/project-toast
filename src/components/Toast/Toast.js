import React, { useContext } from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import { ToastContext } from '../ToastProvider'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ toastInfo }) {
  const { allToasts, setAllToasts } = useContext(ToastContext)

  const closeToast = () => {
    const newToasts = allToasts.filter((toast) => toast.id !== toastInfo.id)
    setAllToasts(newToasts)
  }

  if (!toastInfo.variant || !toastInfo.message) {
    return null
  }
  const Tag = ICONS_BY_VARIANT[toastInfo?.variant]
  const variantClassName = styles[toastInfo?.variant]
  return (
    <div className={`${styles.toast} ${variantClassName}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {ICONS_BY_VARIANT[toastInfo?.variant] - toastInfo?.message}
        </VisuallyHidden>
        {toastInfo?.message}
      </p>
      <button
        aria-label='Dismiss message'
        aria-live='off'
        className={styles.closeButton}
        onClick={closeToast}
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast
