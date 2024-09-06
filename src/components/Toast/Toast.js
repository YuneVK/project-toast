import React from "react"
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather"

import VisuallyHidden from "../VisuallyHidden"

import styles from "./Toast.module.css"

export const VARIANTS = {
  notice: "notice",
  warning: "warning",
  success: "success",
  error: "error",
}

const ICONS_BY_VARIANT = {
  [VARIANTS.notice]: Info,
  [VARIANTS.warning]: AlertTriangle,
  [VARIANTS.success]: CheckCircle,
  [VARIANTS.error]: AlertOctagon,
}

function Toast({ variant = VARIANTS.notice, onDismiss, children }) {
  const Icon = ICONS_BY_VARIANT[variant]

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={onDismiss}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast
