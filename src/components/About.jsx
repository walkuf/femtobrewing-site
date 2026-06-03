import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <span className={styles.label}>The Brewery</span>
        <h2 className={styles.heading}>Automated from grain to glass</h2>
        <div className={styles.body}>
          <p>
            Femtobrewing is a fully automated 11-gallon all-grain homebrewery in Placitas,
            New Mexico. Built on a Raspberry Pi 4 running CraftBeerPi 4, it controls
            everything from mash temperature to fly sparging to fermentation — all from
            a browser dashboard.
          </p>
          <p>
            The system uses IFM flow sensors, custom GPIO actors, and a Tilt Bluetooth
            hydrometer to monitor transfers and gravity in real time. Recipes are
            developed in BeerSmith, then translated into CBPI4 step sequences with
            flow-calibrated volume targets.
          </p>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>11</span>
            <span className={styles.statLabel}>Gallon batches</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>Pi 4B</span>
            <span className={styles.statLabel}>Automation core</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>CBPI4</span>
            <span className={styles.statLabel}>Brewery OS</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>NM</span>
            <span className={styles.statLabel}>Placitas, USA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
