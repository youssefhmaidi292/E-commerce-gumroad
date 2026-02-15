import React from 'react'
import '../styles/Navbar.css'

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/shop" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Blogs", link: "/blog" }
]

function Navbar() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container">
          <div className="flex justify-between items-center">

            {/* LOGO */}
            <div className="logo-wrapper">
              <a
                href="/"
                className="logo-3d font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                style={{ color: 'var(--primary)' }}
              >
                Online <span>Shop</span>
              </a>
            </div>

            {/* MENU */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {MenuLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="menu-link font-medium"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
