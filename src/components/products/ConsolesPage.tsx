import React from 'react'
import { getProductsByCategory } from '../../data/products'
import ProductCard from '../ProductCard'
import '../../styles/ProductsPage.css'

function ConsolesPage() {
  const products = getProductsByCategory('consoles')

  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundColor: '#f3f4f6' }}>
        <div className="container mx-auto px-4">
          <div className="category-hero-content" style={{ color: '#1f2937' }}>
            <span className="category-hero-subtitle" style={{ color: '#6b7280' }}>GAMING</span>
            <h1 className="category-hero-title" style={{ color: '#1f2937' }}>Console</h1>
            <p className="category-hero-desc" style={{ color: '#4b5563' }}>
              Next-generation gaming consoles for ultimate entertainment
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=400&fit=crop" 
            alt="Consoles" 
            className="category-hero-image"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="category-header">
          <h2>All Consoles</h2>
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

export default ConsolesPage