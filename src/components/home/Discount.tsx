import React from 'react'
import '../../styles/home/Discount.css'
// Import your image - adjust path based on your structure
import discount from '../../assets/discount.png'

function Discount() {
  return (
    <section className="discount-section">
      <div className="container mx-auto px-4">
        <div className="discount-banner">
          
          {/* Left Content */}
          <div className="discount-left">
            <span className="discount-badge">30% OFF</span>
            <h2 className="discount-title">FINE<br/>SMILE</h2>
            <p className="discount-date">10 Jan to 28 Jan</p>
          </div>

          {/* Center Image - Floating Effect */}
          <div className="discount-image-wrapper">
            <img 
              src={discount} 
              alt="Air Solo Bass Headphones" 
              className="discount-image"
            />
            {/* Shadow beneath */}
            <div className="image-shadow"></div>
          </div>

          {/* Right Content */}
          <div className="discount-right">
            <span className="product-model">Air Solo Bass</span>
            <h3 className="sale-title">Winter Sale</h3>
            <p className="sale-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis
            </p>
            <button className="shop-btn">
              Shop
            </button>
          </div>

          {/* Decorative Circles */}
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Discount