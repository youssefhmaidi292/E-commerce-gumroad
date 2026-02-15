import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/home/Categories.css'

import category1 from '../../assets/categories/category1.jpg'
import category2 from '../../assets/categories/category2.jpg'
import category3 from '../../assets/categories/category3.jpg'
import category4 from '../../assets/categories/category4.jpg'
import category5 from '../../assets/categories/category5.jpg'
import category6 from '../../assets/categories/category6.jpg'
import category7 from '../../assets/categories/category7.jpg'

const categories = [
  {
    id: 1,
    name: "Earphone",
    subtitle: "ENJOY WITH",
    link: "/products/earphones", // Updated to match route
    bgColor: "#18181b",
    textColor: "#fff",
    buttonStyle: "red",
    image: category1,
    span: "normal"
  },
  {
    id: 2,
    name: "Gadget",
    subtitle: "ENJOY WITH",
    link: "/products/gadgets",
    bgColor: "#fbbf24",
    textColor: "#fff",
    buttonStyle: "white",
    image: category2,
    span: "normal"
  },
  {
    id: 3,
    name: "Camera",
    subtitle: "SHOOT WITH",
    link: "/products/cameras",
    bgColor: "#f97316",
    textColor: "#fff",
    buttonStyle: "white",
    image: category3,
    span: "normal"
  },
  {
    id: 4,
    name: "Laptop",
    subtitle: "ENJOY WITH",
    link: "/products/laptops",
    bgColor: "#ef4444",
    textColor: "#fff",
    buttonStyle: "white",
    image: category4,
    span: "wide"
  },
  {
    id: 5,
    name: "Speakers",
    subtitle: "ENJOY WITH",
    link: "/products/speakers",
    bgColor: "#3b82f6",
    textColor: "#fff",
    buttonStyle: "white",
    image: category5,
    span: "normal"
  },
  {
    id: 6,
    name: "Console",
    subtitle: "GAMING",
    link: "/products/consoles",
    bgColor: "#f3f4f6",
    textColor: "#1f2937",
    buttonStyle: "red",
    image: category6,
    span: "wide"
  },
  {
    id: 7,
    name: "Oculus",
    subtitle: "ENJOY WITH",
    link: "/products/vr",
    bgColor: "#22c55e",
    textColor: "#fff",
    buttonStyle: "white",
    image: category7,
    span: "normal"
  }
]

function Categories() {
  return (
    <section id="shop" className="categories-section py-8 bg-white dark:bg-gray-900 duration-300">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Browse Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our premium collection
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-card-wrapper ${category.span === 'wide' ? 'wide' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link 
                to={category.link}
                className="category-card group"
                style={{ backgroundColor: category.bgColor }}
              >
                <div className="category-content">
                  <span className="category-subtitle" style={{ color: category.textColor }}>
                    {category.subtitle}
                  </span>
                  <h3 className="category-title" style={{ color: category.textColor }}>
                    {category.name}
                  </h3>
                  
                  <button className={`browse-btn ${category.buttonStyle}`}>
                    Browse
                    <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="category-image-container">
                  <div className="image-wrapper">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="category-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories