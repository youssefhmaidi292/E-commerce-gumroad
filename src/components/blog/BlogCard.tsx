import React from 'react'
import { Link } from 'react-router-dom'
import { Blog } from '../../data/blogs'
import '../../styles/blog/BlogCard.css'

interface BlogCardProps {
  blog: Blog
  variant?: 'default' | 'horizontal' | 'featured'
}

function BlogCard({ blog, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <Link to={`/blog/${blog.id}`} className="blog-card-featured">
        <div className="blog-featured-image">
          <img src={blog.image} alt={blog.title} />
          <span className="featured-badge">Featured</span>
        </div>
        <div className="blog-featured-content">
          <div className="blog-meta">
            <span className="blog-category">{blog.category}</span>
            <span className="blog-date">{blog.date}</span>
          </div>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-excerpt">{blog.excerpt}</p>
          <div className="blog-author">
            <img src={blog.authorImage} alt={blog.author} />
            <span>{blog.author}</span>
            <span className="read-time">{blog.readTime}</span>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <Link to={`/blog/${blog.id}`} className="blog-card-horizontal">
        <div className="blog-horizontal-image">
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className="blog-horizontal-content">
          <div className="blog-meta">
            <span className="blog-category">{blog.category}</span>
            <span className="blog-date">{blog.date}</span>
          </div>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-excerpt">{blog.excerpt}</p>
          <div className="blog-author-row">
            <img src={blog.authorImage} alt={blog.author} />
            <span>{blog.author}</span>
            <span className="dot">•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/blog/${blog.id}`} className="blog-card">
      <div className="blog-image-wrapper">
        <img src={blog.image} alt={blog.title} className="blog-image" />
        <span className="blog-category-badge">{blog.category}</span>
      </div>
      <div className="blog-content">
        <div className="blog-meta-row">
          <span className="blog-date">{blog.date}</span>
          <span className="blog-read-time">{blog.readTime}</span>
        </div>
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-excerpt">{blog.excerpt}</p>
        <div className="blog-author-small">
          <img src={blog.authorImage} alt={blog.author} />
          <span>By {blog.author}</span>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard