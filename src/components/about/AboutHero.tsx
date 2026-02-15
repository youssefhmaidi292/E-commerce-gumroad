import '../../styles/about/AboutHero.css'

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container mx-auto px-4">
        <div className="about-hero-content">
          <span className="about-badge">About Us</span>
          <h1 className="about-title">
            We Are <span>Online Shop</span>
          </h1>
          <p className="about-subtitle">
            Your trusted destination for premium electronics and gadgets since 2015. 
            We believe in quality, innovation, and exceptional customer service.
          </p>
          <div className="about-hero-buttons">
            <a href="#story" className="btn-primary">Our Story</a>
            <a href="#team" className="btn-secondary">Meet Team</a>
          </div>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  )
}

export default AboutHero