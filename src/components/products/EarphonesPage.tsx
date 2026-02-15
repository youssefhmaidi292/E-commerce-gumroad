import { getProductsByCategory } from '../../data/products'
import ProductCard from '../ProductCard'
import '../../styles/ProductsPage.css'

function EarphonesPage() {
  const products = getProductsByCategory('earphones')

  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundColor: '#18181b' }}>
        <div className="container mx-auto px-4">
          <div className="category-hero-content">
            <span className="category-hero-subtitle">ENJOY WITH</span>
            <h1 className="category-hero-title">Earphones</h1>
            <p className="category-hero-desc">
              Premium audio experience with crystal clear sound and deep bass
            </p>
          </div>
          <img  
            src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop" 
            alt="Earphones" 
            className="category-hero-image"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="category-header">
          <h2>All Earphones</h2>
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

export default EarphonesPage