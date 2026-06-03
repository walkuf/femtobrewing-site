import styles from './Recipes.module.css'

// Each recipe can optionally link to a BeerSmith cloud share URL
const recipes = [
  {
    name: 'Placitas Pils',
    style: 'German Pilsner',
    notes: 'Fully automated lager brewed in Placitas, NM. Recipe currently in development — check BeerSmith for the latest version.',
    beersmithUrl: 'https://beersmithrecipes.com/viewrecipe/5527929',
  },
]

export default function Recipes() {
  return (
    <section id="recipes" className={styles.recipes}>
      <div className={styles.inner}>
        <span className={styles.label}>On Tap &amp; In Progress</span>
        <h2 className={styles.heading}>Recipes</h2>
        <div className={styles.grid}>
          {recipes.map((r) => (
            <div key={r.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.name}>{r.name}</h3>
                  <span className={styles.style}>{r.style}</span>
                </div>
                {(r.og || r.abv) && (
                  <div className={styles.stats}>
                    {r.og && <div className={styles.stat}><span className={styles.statVal}>{r.og}</span><span className={styles.statKey}>OG</span></div>}
                    {r.abv && <div className={styles.stat}><span className={styles.statVal}>{r.abv}</span><span className={styles.statKey}>ABV</span></div>}
                  </div>
                )}
              </div>
              <p className={styles.notes}>{r.notes}</p>
              {r.beersmithUrl ? (
                <a href={r.beersmithUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View in BeerSmith →
                </a>
              ) : (
                <span className={styles.soon}>BeerSmith link coming soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
