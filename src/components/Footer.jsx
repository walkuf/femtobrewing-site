import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.wordmark}>Femtobrewing</span>
        <p className={styles.copy}>Placitas, New Mexico &mdash; small batch, automated.</p>
        <div className={styles.links}>
          <a href="https://github.com/walkuf/placitas-brewery-cbpi4" target="_blank" rel="noopener noreferrer">
            Brewery Config
          </a>
          <a href="https://github.com/walkuf/cbpi4-IFM-SM-Flow-Sensor" target="_blank" rel="noopener noreferrer">
            Flow Sensor Plugin
          </a>
          <a href="https://github.com/walkuf" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
