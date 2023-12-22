import React, { createContext, useState } from 'react'

import ToastPlayground from '../ToastPlayground'
import Footer from '../Footer'

export const ToastContext = createContext()

function App() {
  const [toastInfo, setToastInfo] = useState({ message: '', variant: 'notice' })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleToastInfo = (toastInfo) => {
    setToastInfo(toastInfo)
  }
  const value = {
    toastInfo: toastInfo,
    handleToastInfo: handleToastInfo,
    isModalOpen: isModalOpen,
    setIsModalOpen: setIsModalOpen,
  }
  return (
    <ToastContext.Provider value={value}>
      <ToastPlayground />
      <Footer />
    </ToastContext.Provider>
  )
}

export default App
