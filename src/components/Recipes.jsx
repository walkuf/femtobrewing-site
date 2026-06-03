import styles from './Recipes.module.css'

// Each recipe can optionally link to a BeerSmith cloud share URL
const recipes = [
  {
    name: 'Placitas Pils',
    style: 'German Pils (BJCP 5D)',
    og: '1.052',
    fg: '1.010',
    abv: '5.5%',
    ibu: '38',
    srm: '3.5',
    notes: 'Belgian Pilsner malt, noble hops, W-34/70 lager yeast — with a whisper of Cascade at flameout. The Southwest in a glass. Fully automated grain-to-glass in Placitas, NM.',
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
                {(r.og || r.abv || r.ibu || r.srm) && (
                  <div className={styles.stats}>
                    {r.og  && <div className={styles.stat}><span className={styles.statVal}>{r.og}</span><span className={styles.statKey}>OG</span></div>}
                    {r.fg  && <div className={styles.stat}><span className={styles.statVal}>{r.fg}</span><span className={styles.statKey}>FG</span></div>}
                    {r.abv && <div className={styles.stat}><span className={styles.statVal}>{r.abv}</span><span className={styles.statKey}>ABV</span></div>}
                    {r.ibu && <div className={styles.stat}><span className={styles.statVal}>{r.ibu}</span><span className={styles.statKey}>IBU</span></div>}
                    {r.srm && <div className={styles.stat}><span className={styles.statVal}>{r.srm}</span><span className={styles.statKey}>SRM</span></div>}
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
