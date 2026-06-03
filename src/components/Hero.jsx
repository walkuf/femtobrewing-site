import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Placitas, New Mexico</p>
        <h1 className={styles.title}>Femtobrewing</h1>
        <p className={styles.tagline}>Small batch. Big precision.</p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#recipes" className={styles.btnSecondary}>Recipes</a>
        </div>
      </div>
    </section>
  )
}
