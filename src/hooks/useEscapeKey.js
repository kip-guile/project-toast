export const useEscapeKey = (callback, activeKey) => {
  const handleEscapePress = (event) => {
    if (event.key === activeKey) {
      callback()
    }
  }
  return handleEscapePress
}
