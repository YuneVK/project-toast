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

function Toast({ variant = VARIANTS.notice, onClose, children }) {
  const Icon = ICONS_BY_VARIANT[variant]

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={onClose}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
