import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.nav}>
      <a href="#hero" className={styles.wordmark}>Femtobrewing</a>
      <nav className={styles.links}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#gallery">Gallery</a>
        <a href="#recipes">Recipes</a>
      </nav>
    </header>
  )
}
