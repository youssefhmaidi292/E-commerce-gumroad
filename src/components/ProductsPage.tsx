import React from 'react'
import { useParams } from 'react-router-dom'
import {
  allProducts,
  getProductsByCategory,
  getCategoryDisplayName,
  getCategoryColor
} from '../data/products'
import ProductCard from '../components/ProductCard'
import '../styles/ProductsPage.css'

function ProductsPage() {
  const { category } = useParams<{ category?: string }>()

  const validCategories = [
    'earphones',
    'gadgets',
    'cameras',
    'laptops',
    'speakers',
    'consoles',
    'vr'
  ]

  const isCategory = category && validCategories.includes(category)

  const products = isCategory
    ? getProductsByCategory(category!)
    : allProducts

  const title = isCategory
    ? getCategoryDisplayName(category!)
    : 'All Products'

  const bgColor = isCategory
    ? getCategoryColor(category!)
    : '#18181b'

  return (
    <div className="category-page">
      {/* Hero */}
      <div className="category-hero" style={{ backgroundColor: bgColor }}>
        <div className="container mx-auto px-4">
          <h1 className="category-hero-title text-white">
            {title}
          </h1>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-12">
        <span className="product-count">
          {products.length} Products
        </span>

        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
