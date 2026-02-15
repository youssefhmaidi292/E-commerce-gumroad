import React from 'react'
import '../../styles/about/MissionVision.css'

function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="container mx-auto px-4">
        <div className="mv-grid">
          
          <div className="mv-card mission">
            <div className="mv-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To democratize technology by making premium electronics accessible to everyone. 
              We strive to bridge the gap between innovation and affordability, ensuring 
              no one is left behind in the digital revolution.
            </p>
            <ul className="mv-list">
              <li>✓ Quality First Approach</li>
              <li>✓ Customer-Centric Service</li>
              <li>✓ Sustainable Practices</li>
            </ul>
          </div>

          <div className="mv-card vision">
            <div className="mv-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              To become the world's most trusted technology marketplace, where innovation 
              meets reliability. We envision a future where everyone has access to tools 
              that empower their digital lifestyle.
            </p>
            <ul className="mv-list">
              <li>✓ Global Market Leader</li>
              <li>✓ Innovation Hub</li>
              <li>✓ Community Builder</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MissionVision