import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/Footer.css'

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Success toast notification
    toast.success(`Thank you ${formData.name}! Your message has been sent successfully.`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        background: '#10b981',
        fontWeight: 600,
      }
    })

    setIsLoading(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Quick contact toast (for phone/email clicks)
  const showCopiedToast = (text: string) => {
    toast.info(`Copied to clipboard: ${text}`, {
      position: "bottom-right",
      autoClose: 3000,
      theme: "dark",
    })
  }

  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4">
        
        <div className="footer-grid">
          
          {/* Left Side - Contact Form */}
          <div className="footer-form-section">
            <h3 className="footer-title">Send us a message</h3>
            <p className="footer-subtitle">We'd love to hear from you!</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="form-input form-textarea"
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Right Side - Contact Info */}
          <div className="footer-info-section">
            <div className="contact-block">
              <h3 className="footer-title">Contact Us</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>123 Commerce Street, Tech City, TC 12345</p>
                </div>
              </div>

              <div 
                className="contact-item cursor-pointer" 
                onClick={() => {
                  navigator.clipboard.writeText('+1 (555) 123-4567')
                  showCopiedToast('+1 (555) 123-4567')
                }}
              >
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div 
                className="contact-item cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText('contact@onlineshop.com')
                  showCopiedToast('contact@onlineshop.com')
                }}
              >
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>contact@onlineshop.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-block">
              <h3 className="footer-title">Follow Us</h3>
              <div className="social-icons">
                <a 
                  href="#" 
                  className="social-link" 
                  aria-label="Facebook"
                  onClick={(e) => {
                    e.preventDefault()
                    toast.success('Opening Facebook...', { autoClose: 2000 })
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="social-link" 
                  aria-label="Twitter"
                  onClick={(e) => {
                    e.preventDefault()
                    toast.success('Opening Twitter...', { autoClose: 2000 })
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="social-link" 
                  aria-label="Instagram"
                  onClick={(e) => {
                    e.preventDefault()
                    toast.success('Opening Instagram...', { autoClose: 2000 })
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="social-link" 
                  aria-label="LinkedIn"
                  onClick={(e) => {
                    e.preventDefault()
                    toast.success('Opening LinkedIn...', { autoClose: 2000 })
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2024 Online Shop. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer