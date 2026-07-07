export function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line">We Do not Just</span>
          <span className="line highlight">Animate Pixels.</span>
          <span className="line">We Ignite</span>
          <span className="line">Imagination.</span>
        </h1>
        <p className="hero-subtitle">
          A digital art collective crafting 2D motion graphics that defy
          gravity and logic.
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn-glow" data-cursor-hover>
            View Showreel
          </a>
          <a href="#contact" className="btn-outline" data-cursor-hover>
            Start a Project
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to Explore</span>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </div>
    </header>
  );
}
