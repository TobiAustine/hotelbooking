import React from 'react'
import styles from './MailList.module.css'

const MailList = () => {
  return (
    <div className={styles.mail}>
      <h1 className={styles.mailTitle}>
        Save time, Save money!
      </h1>

      <span className={styles.mailDesc}>
        Sign up and we will send the best deals to you.
      </span>

      <div className={styles.mailInputContainer}>
        <input type="text"  placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList