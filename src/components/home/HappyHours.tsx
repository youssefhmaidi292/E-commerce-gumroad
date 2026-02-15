import React from 'react'
import '../../styles/home/HappyHours.css'
import happyhourImg from '../../assets/happyhour.png'

function HappyHours() {
  return (
    <section className="happy-section">
      <div className="container mx-auto px-4">
        <div className="happy-banner">
          
          {/* Left Content */}
          <div className="happy-left">
            <span className="happy-badge">30% OFF</span>
            <h2 className="happy-title">HAPPY<br/>HOURS</h2>
            <p className="happy-date">14 Jan to 28 Jan</p>
          </div>

          {/* Center Image - Floating Watch */}
          <div className="happy-image-wrapper">
            <img 
              src={happyhourImg} 
              alt="Smart Solo Watch" 
              className="happy-image"
            />
            <div className="happy-shadow"></div>
          </div>

          {/* Right Content */}
          <div className="happy-right">
            <span className="happy-product">Smart Solo</span>
            <h3 className="happy-sale-title">Winter Sale</h3>
            <p className="happy-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis
            </p>
            <button className="happy-shop-btn">
              Shop
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="happy-circle circle-1"></div>
          <div className="happy-circle circle-2"></div>
        </div>
      </div>
    </section>
  )
}

export default HappyHours