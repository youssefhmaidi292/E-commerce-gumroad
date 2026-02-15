import { useState } from 'react'
import { blogs, getFeaturedBlogs } from '../../data/blogs'
import BlogCard from '../../components/blog/BlogCard'
import '../../styles/blog/BlogList.css'

function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All')
  const featuredBlogs = getFeaturedBlogs()
  const recentBlogs = blogs.filter(b => !b.featured)

  const categories = ['All', 'Gadgets', 'Laptops', 'VR', 'Cameras', 'Earphones', 'Consoles']

  const filteredBlogs = activeCategory === 'All' 
    ? recentBlogs 
    : recentBlogs.filter(blog => blog.category === activeCategory)

  return (
    <div className="blog-list-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container mx-auto px-4">
          <div className="blog-hero-content">
            <span className="blog-hero-badge">Our Blog</span>
            <h1 className="blog-hero-title">Latest News & Articles</h1>
            <p className="blog-hero-desc">
              Discover the latest trends, buying guides, and tech insights from our experts
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-section">
        <div className="container mx-auto px-4">
          {featuredBlogs[0] && <BlogCard blog={featuredBlogs[0]} variant="featured" />}
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container mx-auto px-4">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blogs-section">
        <div className="container mx-auto px-4">
          <div className="blogs-grid">
            {filteredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container mx-auto px-4">
          <div className="newsletter-box">
            <div className="newsletter-content">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest tech news and exclusive deals delivered to your inbox</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogList