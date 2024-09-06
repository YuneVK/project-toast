import React from "react"

import Toast from "../Toast"
import { useToast } from "../ToastProvider"

import styles from "./ToastShelf.module.css"

function ToastShelf() {
  const { toasts, dismissToast } = useToast()

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            key={toast.id}
            variant={toast.variant}
            onDismiss={() => {
              dismissToast(toast.id)
            }}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
