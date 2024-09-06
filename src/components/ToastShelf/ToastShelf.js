import React from "react"

import styles from "./ToastShelf.module.css"

function ToastShelf({ children }) {
  return (
    <ol className={styles.wrapper}>
      {children.map((child, index) => (
        <li key={index} className={styles.toastWrapper}>
          {child}
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
