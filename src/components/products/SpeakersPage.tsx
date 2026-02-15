import { getProductsByCategory } from '../../data/products'
import ProductCard from '../ProductCard'
import '../../styles/ProductsPage.css'

function SpeakersPage() {
  const products = getProductsByCategory('speakers')

  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundColor: '#3b82f6' }}>
        <div className="container mx-auto px-4">
          <div className="category-hero-content">
            <span className="category-hero-subtitle">ENJOY WITH</span>
            <h1 className="category-hero-title">Speakers</h1>
            <p className="category-hero-desc">
              Fill your space with premium sound quality
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop" 
            alt="Speakers" 
            className="category-hero-image"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="category-header">
          <h2>All Speakers</h2>
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

export default SpeakersPage