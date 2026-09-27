import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { galleryImages } from '../data/siteData'

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    if (selectedIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (current + 1) % galleryImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  const openImage = (index) => setSelectedIndex(index)

  return (
    <section className="page-shell gallery-page">
      <header className="gallery-header">
        <p className="eyebrow">Gallery</p>
        <h1>Inside The VINES CAFE</h1>
        <p>A glimpse into the atmosphere, details and warm everyday moments at the café.</p>
      </header>

      <div className="gallery-grid" aria-label="Café photo gallery">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={`gallery-item ${index === 0 ? 'feature' : ''}`}
            onClick={() => openImage(index)}
            aria-label={`Open gallery image ${index + 1}`}
          >
            <img src={image.src} alt={image.alt} loading={index < 2 ? 'eager' : 'lazy'} />
            <span>View</span>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Café photo viewer" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Close gallery">
              <X size={18} />
            </button>

            <button
              type="button"
              className="lightbox-nav left"
              onClick={() => setSelectedIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <img src={galleryImages[selectedIndex].src} alt={galleryImages[selectedIndex].alt} />

            <button
              type="button"
              className="lightbox-nav right"
              onClick={() => setSelectedIndex((current) => (current + 1) % galleryImages.length)}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <div className="lightbox-count">
              {String(selectedIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
