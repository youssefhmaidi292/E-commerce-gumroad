import '../../styles/about/TeamSection.css'

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Customer Success Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#" }
  }
]

function TeamSection() {
  return (
    <section id="team" className="team-section">
      <div className="container mx-auto px-4">
        
        <div className="team-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet the People Behind Our Success</h2>
          <p className="team-subtitle">
            A passionate team dedicated to delivering the best shopping experience
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="team-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-overlay">
                  <div className="social-links">
                    <a href={member.social.linkedin} className="social-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="social-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TeamSection