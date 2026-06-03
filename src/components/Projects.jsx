import styles from './Projects.module.css'

const projects = [
  {
    name: 'placitas-brewery-cbpi4',
    description:
      'Full brewery automation config: CBPI4 recipe steps, flow-calibrated volume transfers, fermenter profile with Tilt Brix targeting, GPIO actor definitions, and calibration data for an 11-gallon all-grain system.',
    topics: ['cbpi4', 'raspberry-pi', 'homebrewing', 'automation'],
    url: 'https://github.com/walkuf/placitas-brewery-cbpi4',
  },
  {
    name: 'cbpi4-IFM-SM-Flow-Sensor',
    description:
      'CBPI4 plugin for IFM SM-series flow sensors via ADS1115 bitbang I2C on Raspberry Pi GPIO. Supports multiple sensors on a shared ADS1115 instance with per-channel calibration factors.',
    topics: ['cbpi4', 'plugin', 'flow-sensor', 'ads1115', 'i2c'],
    url: 'https://github.com/walkuf/cbpi4-IFM-SM-Flow-Sensor',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <span className={styles.label}>Open Source</span>
        <h2 className={styles.heading}>Automation Projects</h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.cardHeader}>
                <svg className={styles.ghIcon} viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                    -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                    .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                    -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0
                    1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82
                    1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
                    1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span className={styles.repoName}>{p.name}</span>
              </div>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.topics}>
                {p.topics.map((t) => (
                  <span key={t} className={styles.topic}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
