import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getBlogById, getRelatedBlogs } from '../../data/blogs'
import BlogCard from '../../components/blog/BlogCard'
import '../../styles/blog/BlogDetail.css'

function BlogDetail() {
  const { id } = useParams<{ id: string }>()
  const blog = getBlogById(Number(id))

  if (!blog) {
    return <Navigate to="/blog" replace />
  }

  const relatedBlogs = getRelatedBlogs(blog.id, blog.category)

  return (
    <div className="blog-detail-page">
      {/* Hero Image */}
      <div className="blog-detail-hero">
        <img src={blog.image} alt={blog.title} />
        <div className="hero-overlay"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="blog-detail-grid">
          {/* Main Content */}
          <article className="blog-article">
            <div className="article-header">
              <span className="article-category">{blog.category}</span>
              <h1 className="article-title">{blog.title}</h1>
              
              <div className="article-meta">
                <div className="author-info">
                  <img src={blog.authorImage} alt={blog.author} />
                  <div>
                    <span className="author-name">{blog.author}</span>
                    <span className="publish-date">{blog.date}</span>
                  </div>
                </div>
                <div className="reading-stats">
                  <span>{blog.readTime}</span>
                  <span>•</span>
                  <span>{blog.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>

            <div 
              className="article-content" 
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="article-tags">
              {blog.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>

            {/* Share */}
            <div className="share-section">
              <span>Share this article:</span>
              <div className="share-buttons">
                <button className="share-btn twitter">Twitter</button>
                <button className="share-btn facebook">Facebook</button>
                <button className="share-btn linkedin">LinkedIn</button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Author Box */}
            <div className="sidebar-box author-box">
              <h4>About the Author</h4>
              <div className="author-large">
                <img src={blog.authorImage} alt={blog.author} />
                <span className="author-name-large">{blog.author}</span>
                <span className="author-role">Tech Writer</span>
              </div>
              <p>Expert in consumer electronics with 5+ years of experience reviewing the latest gadgets.</p>
            </div>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <div className="sidebar-box related-box">
                <h4>Related Articles</h4>
                <div className="related-list">
                  {relatedBlogs.map(related => (
                    <Link key={related.id} to={`/blog/${related.id}`} className="related-item">
                      <img src={related.image} alt={related.title} />
                      <div>
                        <span className="related-title">{related.title}</span>
                        <span className="related-date">{related.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* More Articles */}
      {relatedBlogs.length > 0 && (
        <section className="more-articles">
          <div className="container mx-auto px-4">
            <h3 className="section-title">You May Also Like</h3>
            <div className="more-grid">
              {relatedBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default BlogDetail