import React, { useEffect, useState } from 'react'
import '../../styles/about/StatsSection.css'

function StatsSection() {
  const [counts, setCounts] = useState({ customers: 0, products: 0, countries: 0, rating: 0 })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    
    const targets = { customers: 500, products: 10000, countries: 50, rating: 4.9 }
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setCounts({
        customers: Math.floor(targets.customers * easeOut),
        products: Math.floor(targets.products * easeOut),
        countries: Math.floor(targets.countries * easeOut),
        rating: Math.round(targets.rating * easeOut * 10) / 10
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="stats-section">
      <div className="container mx-auto px-4">
        <div className="stats-grid">
          
          <div className="stat-item">
            <div className="stat-number">{counts.customers}K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">{counts.products.toLocaleString()}+</div>
            <div className="stat-label">Products Sold</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">{counts.countries}+</div>
            <div className="stat-label">Countries Served</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">{counts.rating}</div>
            <div className="stat-label">Average Rating</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default StatsSection