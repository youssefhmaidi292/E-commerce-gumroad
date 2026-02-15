import React from 'react'
import '../../styles/about/OurStory.css'
 
function OurStory() {
  return (
    <section id="story" className="our-story">
      <div className="container mx-auto px-4">
        <div className="story-grid">
          
          {/* Image Side */}
          <div className="story-image-wrapper">
            <div className="story-image-main">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=700&fit=crop" 
                alt="Our Office"
              />
            </div>
            <div className="story-image-float">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop" 
                alt="Team Working"
              />
            </div>
            <div className="experience-badge">
              <span className="exp-number">9+</span>
              <span className="exp-text">Years of<br/>Excellence</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="story-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">From Small Startup to Industry Leader</h2>
            <p className="story-text">
              Founded in 2015, Online Shop began with a simple mission: make premium technology 
              accessible to everyone. What started as a small garage operation has grown into 
              one of the most trusted e-commerce platforms for electronics.
            </p>
            <p className="story-text">
              Our journey hasn't been easy, but our commitment to quality and customer 
              satisfaction has never wavered. Today, we serve over 500,000 happy customers 
              across the globe, offering everything from the latest smartphones to 
              cutting-edge VR headsets.
            </p>
            
            <div className="story-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div>
                  <h4>Fast Growth</h4>
                  <p>From 0 to 500K+ customers</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <div>
                  <h4>Global Reach</h4>
                  <p>Shipping to 50+ countries</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OurStory