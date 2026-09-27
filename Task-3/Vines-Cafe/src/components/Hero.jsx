export default function Hero() {
  return (
    <section className="hero-landing" aria-label="The VINES CAFE welcome hero">
      <div className="hero-copy-panel">
        <p className="hero-eyebrow">THE VINES</p>

        <h1 className="hero-title" aria-label="The VINES CAFE">
          <span className="hero-title-line">THE</span>
          <span className="hero-title-line">VINES</span>
          <span className="hero-title-line hero-title-line-accent">CAFE</span>
        </h1>

        <p className="hero-subtitle">GOOD FOOD. WARM SPACES. BETTER MOMENTS.</p>
      </div>

      <div className="hero-visual-panel">
        <img
          src="/images/image-2.jpg"
          alt="Warm café interior with hanging lights, greenery, and a premium dining setup"
        />
      </div>
    </section>
  )
}
