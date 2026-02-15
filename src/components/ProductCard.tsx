import React from 'react'
import { Product } from '../../data/products'
import '../styles/ProductCard.css'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        
        {discount && (
          <span className="discount-badge">-{discount}%</span>
        )}
        
        {product.tags.includes('bestseller') && (
          <span className="tag-badge bestseller">Bestseller</span>
        )}
        
        {product.tags.includes('new') && (
          <span className="tag-badge new">New</span>
        )}

        <button className="wishlist-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>

        <div className="quick-actions">
          <button className="quick-btn">Quick View</button>
          <button className="quick-btn cart-btn">Add to Cart</button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <span className="rating-text">{product.rating} ({product.reviews.toLocaleString()})</span>
        </div>

        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>

        {!product.inStock && (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>
    </div>
  )
}

export default ProductCard