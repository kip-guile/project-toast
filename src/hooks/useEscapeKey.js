import { useEffect, useCallback } from 'react'

export const useEscapeKey = (callback, activeKey) => {
  const handleEscapePress = useCallback(
    (event) => {
      if (event.key === activeKey) {
        callback()
      }
    },
    [callback, activeKey]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleEscapePress)
    return () => {
      document.removeEventListener('keydown', handleEscapePress)
    }
  }, [handleEscapePress])
}
