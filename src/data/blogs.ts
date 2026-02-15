import blog1 from '../assets/blog/blog1.jpg'
import blog2 from '../assets/blog/blog2.jpg'
import blog3 from '../assets/blog/blog3.jpg'
import blog4 from '../assets/blog/blog4.jpg'
import blog5 from '../assets/blog/blog5.jpg'
import blog6 from '../assets/blog/blog6.jpg'

import author1 from '../assets/auhtor/author1.jpg'
import author2 from '../assets/auhtor/author2.jpg'
import author3 from '../assets/auhtor/author3.jpg'

export interface Blog {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  authorImage: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
  featured: boolean
  views: number
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Choose the Perfect Smartwatch for Your Lifestyle",
    excerpt: "Discover the key features to consider when selecting a smartwatch that matches your daily needs and fitness goals.",
    content: `
      <p>Smartwatches have evolved from simple notification devices to powerful health and fitness companions. With so many options available, choosing the right one can be overwhelming.</p>
      
      <h2>1. Define Your Primary Use</h2>
      <p>Before diving into specifications, consider what you'll primarily use the smartwatch for. Are you a fitness enthusiast tracking workouts? A professional needing seamless notification management? Or someone who wants health monitoring features?</p>
      
      <h2>2. Battery Life Matters</h2>
      <p>One of the most critical factors is battery life. Apple Watches typically last 18 hours, while Garmin and Fitbit models can go 7-14 days. Consider your charging habits and daily routine.</p>
      
      <h2>3. Health & Fitness Features</h2>
      <p>Modern smartwatches offer ECG monitoring, blood oxygen levels, sleep tracking, and stress management. Determine which metrics matter most to you.</p>
      
      <h2>4. Compatibility</h2>
      <p>Ensure your smartwatch works seamlessly with your smartphone. Apple Watch requires an iPhone, while Wear OS and Samsung watches work with both Android and iOS.</p>
      
      <h2>5. Budget Considerations</h2>
      <p>Prices range from $50 to $800+. Set a realistic budget and prioritize features that matter most to you.</p>
      
      <p>By following these guidelines, you'll find the perfect smartwatch companion for your lifestyle.</p>
    `,
    author: "Dilshad",
    authorImage: author1,
    date: "Jan 20, 2024",
    readTime: "5 min read",
    category: "Gadgets",
    image: blog1,
    tags: ["smartwatch", "wearables", "buying-guide", "tech-tips"],
    featured: true,
    views: 12500
  },
  {
    id: 2,
    title: "Top 10 Gaming Laptops of 2024: Power Meets Portability",
    excerpt: "Explore the best gaming laptops that deliver desktop-level performance in a portable form factor.",
    content: `
      <p>Gaming laptops have reached new heights in 2024, offering RTX 4090 performance in surprisingly slim chassis. Here are our top picks.</p>
      
      <h2>What Makes a Great Gaming Laptop?</h2>
      <p>GPU performance, thermal management, display quality, and keyboard comfort are crucial factors.</p>
      
      <h2>Our Top Picks</h2>
      <p>From the Razer Blade 16 to the ASUS ROG Zephyrus G14, we've tested them all to bring you the best options for every budget.</p>
    `,
    author: "Satya",
    authorImage: author2,
    date: "Jan 18, 2024",
    readTime: "8 min read",
    category: "Laptops",
    image: blog2,
    tags: ["gaming", "laptops", "rtx-4090", "buying-guide"],
    featured: true,
    views: 18900
  },
  {
    id: 3,
    title: "VR Headsets: A Complete Beginner's Guide to Virtual Reality",
    excerpt: "Step into the metaverse with our comprehensive guide to choosing your first VR headset.",
    content: `
      <p>Virtual Reality has transformed from a niche technology to an accessible entertainment medium. Here's everything you need to know.</p>
      
      <h2>Standalone vs PC VR</h2>
      <p>Standalone headsets like Meta Quest 3 offer convenience, while PC VR provides superior graphics and performance.</p>
      
      <h2>Resolution and Refresh Rate</h2>
      <p>Higher resolution means clearer images, while 90Hz+ refresh rates reduce motion sickness.</p>
    `,
    author: "Sabir",
    authorImage: author3,
    date: "Jan 15, 2024",
    readTime: "6 min read",
    category: "VR",
    image: blog3,
    tags: ["vr", "virtual-reality", "metaverse", "beginners-guide"],
    featured: false,
    views: 8400
  },
  {
    id: 4,
    title: "Camera Buying Guide: DSLR vs Mirrorless in 2024",
    excerpt: "Is mirrorless the clear winner, or does DSLR still have a place? We break down the pros and cons.",
    content: `
      <p>The camera landscape has shifted dramatically toward mirrorless, but DSLRs still offer unique advantages.</p>
      
      <h2>Why Mirrorless Dominates</h2>
      <p>Compact size, electronic viewfinders, and superior autofocus make mirrorless ideal for most users.</p>
      
      <h2>When to Choose DSLR</h2>
      <p>Battery life, optical viewfinder preference, and budget constraints make DSLRs viable for certain photographers.</p>
    `,
    author: "Maria",
    authorImage: author2,
    date: "Jan 12, 2024",
    readTime: "7 min read",
    category: "Cameras",
    image: blog4,
    tags: ["cameras", "photography", "dslr", "mirrorless"],
    featured: false,
    views: 11200
  },
  {
    id: 5,
    title: "The Future of Wireless Audio: What's Next for Earphones",
    excerpt: "From spatial audio to health monitoring, discover the innovations coming to your earbuds.",
    content: `
      <p>Wireless earphones are becoming sophisticated health devices and audio powerhouses.</p>
      
      <h2>Spatial Audio Revolution</h2>
      <p>Head-tracking spatial audio creates immersive 3D soundscapes for music and movies.</p>
      
      <h2>Health Integration</h2>
      <p>Future earphones will monitor body temperature, detect falls, and even measure blood pressure.</p>
    `,
    author: "Dilshad",
    authorImage: author1,
    date: "Jan 10, 2024",
    readTime: "4 min read",
    category: "Earphones",
    image: blog5,
    tags: ["earphones", "wireless", "spatial-audio", "future-tech"],
    featured: false,
    views: 6700
  },
  {
    id: 6,
    title: "Console Wars 2024: PlayStation vs Xbox vs Nintendo",
    excerpt: "Which gaming console deserves your money this year? Our detailed comparison helps you decide.",
    content: `
      <p>Each console offers unique strengths. We compare exclusives, performance, and value.</p>
      
      <h2>PlayStation 5</h2>
      <p>Sony's exclusives like Spider-Man 2 and God of War make it essential for single-player fans.</p>
      
      <h2>Xbox Series X</h2>
      <p>Game Pass provides unbeatable value, making it perfect for budget-conscious gamers.</p>
      
      <h2>Nintendo Switch OLED</h2>
      <p>Portability and family-friendly exclusives keep Nintendo relevant despite weaker hardware.</p>
    `,
    author: "Satya",
    authorImage: author3,
    date: "Jan 08, 2024",
    readTime: "9 min read",
    category: "Consoles",
    image: blog6,
    tags: ["gaming", "consoles", "playstation", "xbox", "nintendo"],
    featured: true,
    views: 23100
  }
]

export const getBlogById = (id: number) => {
  return blogs.find(blog => blog.id === id)
}

export const getFeaturedBlogs = () => {
  return blogs.filter(blog => blog.featured)
}

export const getRecentBlogs = (count: number = 6) => {
  return blogs.slice(0, count)
}

export const getBlogsByCategory = (category: string) => {
  return blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase())
}

export const getRelatedBlogs = (currentId: number, category: string) => {
  return blogs
    .filter(blog => blog.id !== currentId && blog.category === category)
    .slice(0, 3)
}