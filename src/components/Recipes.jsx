import styles from './Recipes.module.css'

// Each recipe can optionally link to a BeerSmith cloud share URL
const recipes = [
  {
    name: 'Placitas Pils',
    style: 'German Pilsner',
    og: '1.049',
    abv: '5.0%',
    notes: 'Run 4 — pitched 2026-05-28. Lager fermentation: 56°F primary until Tilt hits 2.5 Brix, D-rest 65°F, crash 34°F, 42-day lager.',
    beersmithUrl: null, // replace with BeerSmith share link when available
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
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statVal}>{r.og}</span>
                    <span className={styles.statKey}>OG</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statVal}>{r.abv}</span>
                    <span className={styles.statKey}>ABV</span>
                  </div>
                </div>
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
