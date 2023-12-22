import React, { createContext } from 'react'

import ToastPlayground from '../ToastPlayground'
import ToastProvider from '../ToastProvider'
import Footer from '../Footer'

export const ToastContext = createContext()

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  )
}

export default App
