import React, { createContext, useState, useEffect } from 'react'

import { useEscapeKey } from '../../hooks/useEscapeKey'

export const ToastContext = createContext()

export default function ToastProvider({ children }) {
  const [toastInfo, setToastInfo] = useState({
    id: '001',
    message: '',
    variant: 'notice',
  })
  const [allToasts, setAllToasts] = useState([])
  useEscapeKey(() => setAllToasts([]), 'Escape')

  const value = {
    toastInfo,
    setToastInfo,
    allToasts,
    setAllToasts,
  }

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
