import React from "react"

import Button from "../Button"
import { VARIANTS } from "../Toast"
import ToastShelf from "../ToastShelf"
import { useToast } from "../ToastProvider"

import styles from "./ToastPlayground.module.css"

const VARIANT_OPTIONS = Object.keys(VARIANTS)
const DEFAULT_VARIANT = VARIANT_OPTIONS[0]

function ToastPlayground() {
  const { createToast } = useToast()

  const [message, setMessage] = React.useState("")
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT)

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleVariantChange = (event) => {
    setVariant(event.target.value)
  }

  const handleCreateToast = (event) => {
    event.preventDefault()

    createToast(message, variant)

    setMessage("")
    setVariant(DEFAULT_VARIANT)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`

              return (
                <label key={id} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={handleVariantChange}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
