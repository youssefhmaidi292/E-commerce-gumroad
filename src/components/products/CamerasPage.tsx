import React from 'react'
import { getProductsByCategory } from '../../data/products'
import ProductCard from '../ProductCard'
import '../../styles/ProductsPage.css'

function CamerasPage() {
  const products = getProductsByCategory('cameras')

  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundColor: '#f97316' }}>
        <div className="container mx-auto px-4">
          <div className="category-hero-content">
            <span className="category-hero-subtitle">SHOOT WITH</span>
            <h1 className="category-hero-title">Cameras</h1>
            <p className="category-hero-desc">
              Capture life's moments with professional-grade photography gear
            </p>
          </div>
          <img  
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop" 
            alt="Cameras" 
            className="category-hero-image"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="category-header">
          <h2>All Cameras</h2>
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

export default CamerasPage