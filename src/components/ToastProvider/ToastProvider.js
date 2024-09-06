import React from "react"

import useKeydown from "../../hooks/useKeydown"

const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const dismissAllToasts = React.useCallback(() => {
    setToasts([])
  }, [])

  useKeydown("Escape", dismissAllToasts)

  const createToast = (message, variant) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ])
  }

  const dismissToast = (id) => {
    setToasts((currentToasts) => {
      const newToasts = currentToasts.filter((toast) => toast.id !== id)

      return newToasts
    })
  }

  const value = { toasts, createToast, dismissToast }

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

function useToast() {
  const context = React.useContext(ToastContext)

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return context
}

export { ToastProvider, useToast }
