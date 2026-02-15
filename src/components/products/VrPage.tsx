import React from 'react'
import { getProductsByCategory } from '../../data/products'
import ProductCard from '../ProductCard'
import '../../styles/ProductsPage.css'

function VrPage() {
  const products = getProductsByCategory('vr')

  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundColor: '#22c55e' }}>
        <div className="container mx-auto px-4">
          <div className="category-hero-content">
            <span className="category-hero-subtitle">ENJOY WITH</span>
            <h1 className="category-hero-title">VR</h1>
            <p className="category-hero-desc">
              Step into immersive virtual worlds and experiences
            </p>
          </div>
          <img  
            src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop" 
            alt="VR" 
            className="category-hero-image"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="category-header">
          <h2>All VR</h2>
          <span className="product-count">{products.length} Products</span>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VrPage