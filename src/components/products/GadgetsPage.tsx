import { getProductsByCategory } from '../../data/products'
import ProductCard from '../ProductCard'
import '../../styles/ProductsPage.css'

function GadgetsPage() {
  const products = getProductsByCategory('gadgets')

  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundColor: '#fbbf24' }}>
        <div className="container mx-auto px-4">
          <div className="category-hero-content">
            <span className="category-hero-subtitle">ENJOY WITH</span>
            <h1 className="category-hero-title">Gadgets</h1>
            <p className="category-hero-desc">
              Smart devices and innovative tech to enhance your daily life
            </p>
          </div>
          <img  
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" 
            alt="Gadgets" 
            className="category-hero-image"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="category-header">
          <h2>All Gadgets</h2>
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

export default GadgetsPage