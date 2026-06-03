import styles from './Gallery.module.css'

// Drop your photos into public/gallery/ and add filenames + captions here
const photos = [
  { src: '/gallery/photo1.jpg', alt: 'Brewing equipment' },
  { src: '/gallery/photo2.jpg', alt: 'Brewing equipment' },
  { src: '/gallery/photo3.jpg', alt: 'Brewing equipment' },
]

export default function Gallery() {
  if (photos.length === 0) return null

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.inner}>
        <span className={styles.label}>The Setup</span>
        <h2 className={styles.heading}>Equipment Gallery</h2>
        <div className={styles.grid}>
          {photos.map((p, i) => (
            <div key={i} className={styles.item}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
