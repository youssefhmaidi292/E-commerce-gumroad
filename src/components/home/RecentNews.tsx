import '../../styles/home/RecentNews.css'

import news1 from '../../assets/news/news1.jpg'
import news2 from '../../assets/news/news2.jpg'
import news3 from '../../assets/news/news3.jpg'

const newsData = [
  {
    id: 1,
    image: news1,
    date: "Jan 20, 2024",
    author: "Dilshad",
    title: "How to choose perfect smartwatch",
    excerpt: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae..."
  },
  {
    id: 2,
    image: news2,
    date: "Jan 20, 2024",
    author: "Satya",
    title: "How to choose perfect gadget",
    excerpt: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae..."
  },
  {
    id: 3,
    image: news3,
    date: "Jan 20, 2024",
    author: "Sabir",
    title: "How to choose perfect VR headset",
    excerpt: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae..."
  }
]

const partners = ["GOLDEN", "JR", "SWEETY", "LIEBér", "FastLane"]

function RecentNews() {
  return (
    <section className="recent-news-section">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="news-header">
          <h2 className="news-title">Recent News</h2>
          <p className="news-subtitle">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {newsData.map((news, index) => (
            <article 
              key={news.id} 
              className="news-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="news-image-wrapper">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="news-image"
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">{news.date}</span>
                  <span className="separator">by</span>
                  <span className="news-author">{news.author}</span>
                </div>
                
                <h3 className="news-headline">
                  <a href={`/blog/${news.id}`}>{news.title}</a>
                </h3>
                
                <p className="news-excerpt">{news.excerpt}</p>
                
                <a href={`/blog/${news.id}`} className="read-more">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="partners-section">
          <div className="partners-divider"></div>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                {partner === "GOLDEN" && <span className="logo-golden">GOLDEN</span>}
                {partner === "JR" && <span className="logo-jr">JR</span>}
                {partner === "SWEETY" && <span className="logo-sweety">SWEETY</span>}
                {partner === "LIEBér" && <span className="logo-lieber">LIEBér</span>}
                {partner === "FastLane" && <span className="logo-fastlane">FastLane</span>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default RecentNews