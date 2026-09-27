import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home-page-shell">
      <section className="hero-landing" aria-label="The VINES CAFE welcome hero">
        <div className="hero-copy-panel">
          <p className="hero-eyebrow">Welcome to</p>
          <h1 className="hero-title" aria-label="The VINES CAFE">
            <span className="hero-title-line">THE</span>
            <span className="hero-title-line">VINES</span>
            <span className="hero-title-line hero-title-line-accent">CAFE</span>
          </h1>
          <p className="hero-subtitle">Good food. Warm spaces. Better moments.</p>
          <div className="hero-actions">
            <Link to="/menu" className="hero-button hero-button-primary">Explore Menu</Link>
            <a href="https://www.google.com/maps/search/?api=1&query=Jagruti+Vihar+Meerut" target="_blank" rel="noreferrer" className="hero-button hero-button-secondary">Visit Us</a>
          </div>
        </div>

        <div className="hero-visual-panel">
          <img src="/images/image-2.jpg" alt="Warm café interior with hanging lights and a stylish dining atmosphere" />
        </div>
      </section>
    </div>
  )
}
