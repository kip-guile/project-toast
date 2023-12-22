import React, { useContext, useEffect } from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import { ToastContext } from '../App'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast() {
  const { toastInfo, isModalOpen, setIsModalOpen } = useContext(ToastContext)
  // useEffect(() => {
  //   let timer
  //   if (isModalOpen) {
  //     timer = setTimeout(() => {
  //       setIsModalOpen(false) // closeToast should update the state to hide the toast
  //     }, 2000)
  //   }

  //   // Cleanup function to clear the timer if the component unmounts
  //   return () => clearTimeout(timer)
  // }, [isModalOpen, setIsModalOpen])

  const closeToast = () => {
    setIsModalOpen(false)
  }

  if (!toastInfo.variant || !toastInfo.message || !isModalOpen) {
    return null
  }
  const Tag = ICONS_BY_VARIANT[toastInfo?.variant]
  const variantClassName = styles[toastInfo?.variant]
  return (
    <div className={`${styles.toast} ${variantClassName}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>{toastInfo?.message}</p>
      <button className={styles.closeButton} onClick={closeToast}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
