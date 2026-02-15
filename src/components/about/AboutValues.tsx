import '../../styles/about/AboutValues.css'

const values = [
  {
    icon: "🎯",
    title: "Customer First",
    description: "Every decision we make starts with our customers' needs in mind."
  },
  {
    icon: "⚡",
    title: "Innovation",
    description: "We constantly evolve to bring you the latest technology trends."
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "Honest pricing, genuine products, and transparent policies."
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Committed to eco-friendly packaging and carbon-neutral shipping."
  }
]

function AboutValues() {
  return (
    <section className="about-values">
      <div className="container mx-auto px-4">
        <div className="values-header">
          <span className="section-label">Our Values</span>
          <h2 className="section-title">What We Stand For</h2>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="value-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutValues