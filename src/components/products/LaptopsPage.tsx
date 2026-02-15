import React from 'react'
import { getProductsByCategory } from '../../data/products'
import ProductCard from '../ProductCard'
import '../../styles/ProductsPage.css'

function LaptopsPage() {
  const products = getProductsByCategory('laptops')

  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundColor: '#ef4444' }}>
        <div className="container mx-auto px-4">
          <div className="category-hero-content">
            <span className="category-hero-subtitle">ENJOY WITH</span>
            <h1 className="category-hero-title">Laptops</h1>
            <p className="category-hero-desc">
              Powerful computing for work, gaming, and creativity
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop" 
            alt="Laptops" 
            className="category-hero-image"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="category-header">
          <h2>All Laptops</h2>
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

export default LaptopsPage