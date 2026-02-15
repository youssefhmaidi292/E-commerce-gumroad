// src/data/products.ts
import product1 from '../assets/products/product1.jpg'

export interface Product {
  id: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  tags: string[]
  inStock: boolean
  description: string
  features: string[]
}

export const allProducts: Product[] = [
  // EARPHONES (8 products)
  {
    id: 101,
    name: "Air Solo Bass",
    brand: "SoundMax",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 2340,
    image: product1,
    category: "earphones",
    tags: ["wireless", "noise-cancelling", "bestseller"],
    inStock: true,
    description: "Premium wireless headphones with deep bass and 30-hour battery life.",
    features: ["Active Noise Cancellation", "30h Battery", "Bluetooth 5.2", "Foldable Design"]
  },
  {
    id: 102,
    name: "Pro Buds Elite",
    brand: "TechAudio",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    reviews: 1856,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    category: "earphones",
    tags: ["wireless", "earbuds", "new"],
    inStock: true,
    description: "True wireless earbuds with crystal clear sound and comfortable fit.",
    features: ["Touch Controls", "24h Battery", "IPX5 Water Resistant", "Quick Charge"]
  },
  {
    id: 103,
    name: "Studio Master",
    brand: "ProSound",
    price: 449,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    category: "earphones",
    tags: ["professional", "studio", "wired"],
    inStock: true,
    description: "Professional studio headphones for audiophiles and producers.",
    features: ["Hi-Res Audio", "Closed Back", "Memory Foam", "Detachable Cable"]
  },
  {
    id: 104,
    name: "Sport Flow",
    brand: "FitAudio",
    price: 89,
    originalPrice: 119,
    rating: 4.5,
    reviews: 3201,
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500&h=500&fit=crop",
    category: "earphones",
    tags: ["sports", "wireless", "waterproof"],
    inStock: true,
    description: "Sweat-resistant sports earphones for active lifestyles.",
    features: ["IPX7 Waterproof", "Secure Fit", "8h Battery", "Built-in Mic"]
  },
  {
    id: 105,
    name: "Bass King X",
    brand: "SoundMax",
    price: 199,
    rating: 4.7,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
    category: "earphones",
    tags: ["wireless", "bass", "gaming"],
    inStock: true,
    description: "Gaming headset with surround sound and RGB lighting.",
    features: ["7.1 Surround", "RGB Lighting", "Noise Cancelling Mic", "50mm Drivers"]
  },
  {
    id: 106,
    name: "Mini Pods",
    brand: "TechAudio",
    price: 79,
    originalPrice: 99,
    rating: 4.3,
    reviews: 4523,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&h=500&fit=crop",
    category: "earphones",
    tags: ["budget", "wireless", "compact"],
    inStock: true,
    description: "Compact and affordable wireless earbuds for everyday use.",
    features: ["Compact Case", "16h Battery", "Auto Pairing", "Voice Assistant"]
  },
  {
    id: 107,
    name: "Audiophile Pro",
    brand: "PureSound",
    price: 899,
    rating: 5.0,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
    category: "earphones",
    tags: ["premium", "audiophile", "limited"],
    inStock: true,
    description: "Reference-grade open-back headphones for critical listening.",
    features: ["Planar Magnetic", "Open Back", "Handcrafted", "Leather & Wood"]
  },
  {
    id: 108,
    name: "Kids Safe",
    brand: "SafeAudio",
    price: 49,
    rating: 4.4,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&h=500&fit=crop",
    category: "earphones",
    tags: ["kids", "safe", "colorful"],
    inStock: true,
    description: "Volume-limited headphones designed specifically for children.",
    features: ["85dB Limit", "Durable Design", "Fun Colors", "Adjustable Headband"]
  },

  // GADGETS (8 products)
  {
    id: 201,
    name: "Smart Watch Pro",
    brand: "FitTech",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "gadgets",
    tags: ["smartwatch", "fitness", "bestseller"],
    inStock: true,
    description: "Advanced fitness tracking with heart rate, GPS, and 7-day battery.",
    features: ["ECG Monitor", "GPS", "Water Resistant", "Always-On Display"]
  },
  {
    id: 202,
    name: "Power Bank Ultra",
    brand: "ChargeMax",
    price: 59,
    rating: 4.8,
    reviews: 8923,
    image: "https://images.unsplash.com/photo-1609592809794-8534f7d1677e?w=500&h=500&fit=crop",
    category: "gadgets",
    tags: ["powerbank", "fast-charge", "portable"],
    inStock: true,
    description: "20000mAh power bank with 65W fast charging for laptops.",
    features: ["20000mAh", "65W Output", "USB-C PD", "Digital Display"]
  },
  {
    id: 203,
    name: "Smart Ring",
    brand: "BioTech",
    price: 199,
    rating: 4.5,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1616353071588-708dcff912e2?w=500&h=500&fit=crop",
    category: "gadgets",
    tags: ["wearable", "health", "new"],
    inStock: true,
    description: "Titanium smart ring for sleep and activity tracking.",
    features: ["Sleep Tracking", "7-Day Battery", "Titanium", "Water Resistant"]
  },
  {
    id: 204,
    name: "Drone Air 3",
    brand: "FlyTech",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    category: "gadgets",
    tags: ["drone", "camera", "4k"],
    inStock: true,
    description: "4K camera drone with 45-minute flight time and obstacle avoidance.",
    features: ["4K Camera", "45min Flight", "10km Range", "ActiveTrack"]
  },
  {
    id: 205,
    name: "Smart Home Hub",
    brand: "HomeAI",
    price: 129,
    rating: 4.6,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&h=500&fit=crop",
    category: "gadgets",
    tags: ["smarthome", "ai", "speaker"],
    inStock: true,
    description: "Voice-controlled smart home center with premium speaker.",
    features: ["Voice Control", "Matter Support", "360° Audio", "Touch Screen"]
  },
  {
    id: 206,
    name: "Action Cam 360",
    brand: "ViewMax",
    price: 399,
    rating: 4.7,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1564466021188-1e155c461db2?w=500&h=500&fit=crop",
    category: "gadgets",
    tags: ["camera", "action", "360"],
    inStock: true,
    description: "Waterproof 360° action camera with stabilization.",
    features: ["5.7K 360°", "FlowState Stabilization", "Waterproof 10m", "AI Editing"]
  },
  {
    id: 207,
    name: "Laser Keyboard",
    brand: "TypeTech",
    price: 89,
    originalPrice: 129,
    rating: 4.2,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    category: "gadgets",
    tags: ["keyboard", "laser", "portable"],
    inStock: true,
    description: "Virtual laser keyboard that projects on any flat surface.",
    features: ["Laser Projection", "Bluetooth", "Gesture Control", "Compact"]
  },
  {
    id: 208,
    name: "Smart Glasses",
    brand: "VisionTech",
    price: 599,
    rating: 4.4,
    reviews: 321,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    category: "gadgets",
    tags: ["ar", "glasses", "audio"],
    inStock: true,
    description: "AR glasses with built-in audio and voice assistant.",
    features: ["AR Display", "Bone Conduction", "Voice Control", "Prescription Ready"]
  },

  // CAMERAS (8 products)
  {
    id: 301,
    name: "Pro Mirrorless X",
    brand: "LensMaster",
    price: 1999,
    originalPrice: 2299,
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
    category: "cameras",
    tags: ["mirrorless", "professional", "4k"],
    inStock: true,
    description: "Full-frame mirrorless camera with 45MP sensor and 8K video.",
    features: ["45MP Sensor", "8K Video", "In-Body Stabilization", "Weather Sealed"]
  },
  {
    id: 302,
    name: "Vlog Cam Lite",
    brand: "LensMaster",
    price: 699,
    rating: 4.7,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop",
    category: "cameras",
    tags: ["vlogging", "compact", "flip-screen"],
    inStock: true,
    description: "Compact camera perfect for vloggers with flip screen.",
    features: ["Flip Screen", "4K 60fps", "Fast Autofocus", "Compact Body"]
  },
  {
    id: 303,
    name: "Instant Print Cam",
    brand: "RetroCam",
    price: 129,
    rating: 4.5,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    category: "cameras",
    tags: ["instant", "fun", "portable"],
    inStock: true,
    description: "Print photos instantly with this retro-style camera.",
    features: ["Instant Print", "Selfie Mirror", "Auto Flash", "USB Charging"]
  },
  {
    id: 304,
    name: "Cinema Beast",
    brand: "FilmPro",
    price: 4999,
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=500&h=500&fit=crop",
    category: "cameras",
    tags: ["cinema", "6k", "professional"],
    inStock: true,
    description: "Professional cinema camera for filmmakers and studios.",
    features: ["6K Raw", "15+ Stops DR", "Dual ISO", "Timecode"]
  },
  {
    id: 305,
    name: "360 Cam Pro",
    brand: "ViewMax",
    price: 799,
    originalPrice: 999,
    rating: 4.6,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1564466021188-1e155c461db2?w=500&h=500&fit=crop",
    category: "cameras",
    tags: ["360", "vr", "action"],
    inStock: true,
    description: "Dual-lens 360 camera for immersive content creation.",
    features: ["8K 360", "Invisible Selfie Stick", "Waterproof", "Live Streaming"]
  },
  {
    id: 306,
    name: "Underwater Cam",
    brand: "AquaTech",
    price: 449,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=500&fit=crop",
    category: "cameras",
    tags: ["underwater", "diving", "rugged"],
    inStock: true,
    description: "Rugged waterproof camera for diving and adventures.",
    features: ["30m Waterproof", "Shockproof", "Macro Mode", "GPS Tagging"]
  },
  {
    id: 307,
    name: "Lens 50mm f/1.2",
    brand: "LensMaster",
    price: 1299,
    rating: 4.9,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&h=500&fit=crop",
    category: "cameras",
    tags: ["lens", "portrait", "pro"],
    inStock: true,
    description: "Professional portrait lens with stunning bokeh.",
    features: ["f/1.2 Aperture", "Weather Sealed", "Nano Coating", "Ring USM"]
  },
  {
    id: 308,
    name: "Gimbal Stabilizer",
    brand: "SmoothTech",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1564466021188-1e155c461db2?w=500&h=500&fit=crop",
    category: "cameras",
    tags: ["gimbal", "stabilizer", "video"],
    inStock: true,
    description: "3-axis gimbal for smooth cinematic footage.",
    features: ["3-Axis Stabilization", "ActiveTrack", "12h Battery", "Foldable"]
  },

  // LAPTOPS (8 products)
  {
    id: 401,
    name: "ProBook Ultra",
    brand: "TechGiant",
    price: 1999,
    originalPrice: 2299,
    rating: 4.8,
    reviews: 2340,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    category: "laptops",
    tags: ["ultrabook", "professional", "bestseller"],
    inStock: true,
    description: "14-inch professional laptop with M3 chip and 18-hour battery.",
    features: ["M3 Chip", "18h Battery", "Liquid Retina", "1TB SSD"]
  },
  {
    id: 402,
    name: "Gaming Beast X",
    brand: "GameTech",
    price: 2499,
    rating: 4.9,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
    category: "laptops",
    tags: ["gaming", "rtx", "144hz"],
    inStock: true,
    description: "RTX 4090 gaming laptop with 240Hz display.",
    features: ["RTX 4090", "i9-13900HX", "240Hz QHD", "Per-Key RGB"]
  },
  {
    id: 403,
    name: "Chromebook Flex",
    brand: "WebTech",
    price: 449,
    originalPrice: 599,
    rating: 4.5,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1544099858-75feeb57f01e?w=500&h=500&fit=crop",
    category: "laptops",
    tags: ["chromebook", "budget", "2-in-1"],
    inStock: true,
    description: "Versatile 2-in-1 Chromebook for students and casual use.",
    features: ["2-in-1 Design", "Touch Screen", "All-Day Battery", "Lightweight"]
  },
  {
    id: 404,
    name: "Creator Studio",
    brand: "ProTech",
    price: 3299,
    rating: 4.9,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500&fit=crop",
    category: "laptops",
    tags: ["creator", "4k", "workstation"],
    inStock: true,
    description: "Mobile workstation for video editing and 3D rendering.",
    features: ["RTX 4080", "64GB RAM", "4K OLED", "Color Accurate"]
  },
  {
    id: 405,
    name: "Slim Air 15",
    brand: "TechGiant",
    price: 1199,
    rating: 4.6,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop",
    category: "laptops",
    tags: ["thin", "light", "student"],
    inStock: true,
    description: "Ultra-thin 15-inch laptop weighing just 1.2kg.",
    features: ["1.2kg Weight", "15.6 Display", "10h Battery", "Fast Charge"]
  },
  {
    id: 406,
    name: "Business Elite",
    brand: "CorpTech",
    price: 1599,
    originalPrice: 1899,
    rating: 4.7,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=500&h=500&fit=crop",
    category: "laptops",
    tags: ["business", "security", "dock"],
    inStock: true,
    description: "Enterprise laptop with enhanced security and docking.",
    features: ["Fingerprint", "Smart Card", "LTE Option", "Dock Support"]
  },
  {
    id: 407,
    name: "Budget Student",
    brand: "EduTech",
    price: 399,
    rating: 4.3,
    reviews: 5678,
    image: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=500&h=500&fit=crop",
    category: "laptops",
    tags: ["budget", "student", "basic"],
    inStock: true,
    description: "Affordable laptop perfect for students and basic tasks.",
    features: ["Intel i3", "8GB RAM", "256GB SSD", "Office Included"]
  },
  {
    id: 408,
    name: "Foldable X",
    brand: "InnovateTech",
    price: 3999,
    rating: 4.6,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1531297424006-9c11e0a64e23?w=500&h=500&fit=crop",
    category: "laptops",
    tags: ["foldable", "innovation", "oled"],
    inStock: true,
    description: "World's first foldable 17-inch OLED laptop.",
    features: ["Foldable OLED", "Tablet Mode", "5 Speakers", "Haptic Touch"]
  },

  // SPEAKERS (8 products)
  {
    id: 501,
    name: "HomePod Max",
    brand: "SoundMax",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 4523,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "speakers",
    tags: ["smart", "home", "bestseller"],
    inStock: true,
    description: "Smart speaker with room-filling sound and voice assistant.",
    features: ["360° Sound", "Voice Control", "Spatial Audio", "Stereo Pair"]
  },
  {
    id: 502,
    name: "Party Box 300",
    brand: "BassKing",
    price: 449,
    rating: 4.7,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop",
    category: "speakers",
    tags: ["party", "portable", "lights"],
    inStock: true,
    description: "Portable party speaker with 300W output and light show.",
    features: ["300W Output", "Light Show", "12h Battery", "Mic & Guitar Inputs"]
  },
  {
    id: 503,
    name: "SoundBar Pro",
    brand: "CinemaSound",
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop",
    category: "speakers",
    tags: ["soundbar", "home-theater", "dolby"],
    inStock: true,
    description: "Dolby Atmos soundbar with wireless subwoofer.",
    features: ["Dolby Atmos", "Wireless Sub", "eARC", "Room Correction"]
  },
  {
    id: 504,
    name: "Mini Clip 2",
    brand: "SoundMax",
    price: 49,
    originalPrice: 69,
    rating: 4.6,
    reviews: 8923,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "speakers",
    tags: ["portable", "clip", "waterproof"],
    inStock: true,
    description: "Ultra-portable waterproof speaker with carabiner clip.",
    features: ["IPX7 Waterproof", "10h Battery", "Clip Design", "Drop Proof"]
  },
  {
    id: 505,
    name: "Studio Monitor",
    brand: "ProSound",
    price: 349,
    rating: 4.8,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop",
    category: "speakers",
    tags: ["studio", "monitor", "flat"],
    inStock: true,
    description: "Professional studio monitor with flat frequency response.",
    features: ["Flat Response", "Bi-Amped", "Acoustic Space", "XLR & TRS"]
  },
  {
    id: 506,
    name: "Retro Radio",
    brand: "VintageAudio",
    price: 129,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "speakers",
    tags: ["retro", "radio", "bluetooth"],
    inStock: true,
    description: "Vintage-style radio with modern Bluetooth connectivity.",
    features: ["AM/FM Radio", "Bluetooth", "Wood Cabinet", "Analog Tuner"]
  },
  {
    id: 507,
    name: "Outdoor Rock",
    brand: "GardenSound",
    price: 199,
    rating: 4.4,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop",
    category: "speakers",
    tags: ["outdoor", "garden", "camouflage"],
    inStock: true,
    description: "Weatherproof speaker disguised as garden rock.",
    features: ["Rock Design", "Solar Panel", "Weatherproof", "Multi-Sync"]
  },
  {
    id: 508,
    name: "Boom Box 2024",
    brand: "RetroBass",
    price: 349,
    originalPrice: 449,
    rating: 4.7,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop",
    category: "speakers",
    tags: ["boombox", "retro", "cassette"],
    inStock: true,
    description: "Modern boombox with cassette player and Bluetooth.",
    features: ["Cassette Player", "USB Record", "RGB Lights", "Carry Handle"]
  },

  // CONSOLES (8 products)
  {
    id: 601,
    name: "PlayStation 5",
    brand: "Sony",
    price: 499,
    rating: 4.9,
    reviews: 12453,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop",
    category: "consoles",
    tags: ["sony", "4k", "ray-tracing", "bestseller"],
    inStock: true,
    description: "Next-gen gaming with 4K ray tracing and ultra-fast SSD.",
    features: ["4K 120Hz", "Ray Tracing", "DualSense", "3D Audio"]
  },
  {
    id: 602,
    name: "Xbox Series X",
    brand: "Microsoft",
    price: 499,
    rating: 4.8,
    reviews: 9876,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500&h=500&fit=crop",
    category: "consoles",
    tags: ["microsoft", "4k", "game-pass", "powerful"],
    inStock: true,
    description: "Most powerful Xbox ever with 12 TFLOPS GPU.",
    features: ["12 TFLOPS", "Quick Resume", "Game Pass", "4K UHD Blu-ray"]
  },
  {
    id: 603,
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    price: 349,
    rating: 4.9,
    reviews: 15432,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&h=500&fit=crop",
    category: "consoles",
    tags: ["nintendo", "portable", "oled", "family"],
    inStock: true,
    description: "7-inch OLED screen handheld hybrid console.",
    features: ["7 OLED", "Tabletop Mode", "64GB Storage", "Enhanced Audio"]
  },
  {
    id: 604,
    name: "Steam Deck",
    brand: "Valve",
    price: 399,
    originalPrice: 449,
    rating: 4.7,
    reviews: 5432,
    image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=500&h=500&fit=crop",
    category: "consoles",
    tags: ["pc", "portable", "steam", "handheld"],
    inStock: true,
    description: "PC gaming handheld with your entire Steam library.",
    features: ["PC Games", "7 Touch Screen", "Trackpads", "Dock Support"]
  },
  {
    id: 605,
    name: "Retro Mini",
    brand: "RetroTech",
    price: 79,
    rating: 4.6,
    reviews: 3456,
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=500&h=500&fit=crop",
    category: "consoles",
    tags: ["retro", "mini", "classic", "nostalgia"],
    inStock: true,
    description: "Pre-loaded with 1000+ classic retro games.",
    features: ["1000+ Games", "HDMI Output", "2 Controllers", "Save States"]
  },
  {
    id: 606,
    name: "PlayStation VR2",
    brand: "Sony",
    price: 549,
    rating: 4.5,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop",
    category: "consoles",
    tags: ["vr", "playstation", "4k-oled"],
    inStock: true,
    description: "Next-gen VR headset for PS5 with 4K OLED displays.",
    features: ["4K OLED", "Eye Tracking", "Haptic Feedback", "110° FOV"]
  },
  {
    id: 607,
    name: "Arcade Stick Pro",
    brand: "FightTech",
    price: 199,
    rating: 4.8,
    reviews: 654,
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=500&h=500&fit=crop",
    category: "consoles",
    tags: ["arcade", "fighting", "stick", "pro"],
    inStock: true,
    description: "Professional arcade stick for fighting games.",
    features: ["Sanwa Parts", "Moddable", "Multi-Console", "Tournament Ready"]
  },
  {
    id: 608,
    name: "Cloud Gaming Box",
    brand: "StreamTech",
    price: 129,
    rating: 4.3,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=500&h=500&fit=crop",
    category: "consoles",
    tags: ["cloud", "streaming", "no-download", "budget"],
    inStock: true,
    description: "Play AAA games without expensive hardware.",
    features: ["Cloud Gaming", "4K Stream", "No Storage", "Multi-Service"]
  },

  // VR (Oculus/Meta) (8 products)
  {
    id: 701,
    name: "Meta Quest 3",
    brand: "Meta",
    price: 499,
    rating: 4.8,
    reviews: 4321,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop",
    category: "vr",
    tags: ["standalone", "mixed-reality", "bestseller"],
    inStock: true,
    description: "All-in-one VR with mixed reality and pancake lenses.",
    features: ["Mixed Reality", "4K+ Display", "Snapdragon XR2 Gen 2", "Wireless"]
  },
  {
    id: 702,
    name: "Apple Vision Pro",
    brand: "Apple",
    price: 3499,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1707229723375-7845320c7340?w=500&h=500&fit=crop",
    category: "vr",
    tags: ["spatial", "premium", "apple", "mixed-reality"],
    inStock: true,
    description: "Revolutionary spatial computer with eye tracking.",
    features: ["Eye Tracking", "Hand Tracking", "4K Micro-OLED", "Spatial Audio"]
  },
  {
    id: 703,
    name: "PICO 4",
    brand: "PICO",
    price: 429,
    originalPrice: 499,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=500&fit=crop",
    category: "vr",
    tags: ["standalone", "light", "pancake", "fitness"],
    inStock: true,
    description: "Ultra-light VR headset with color passthrough.",
    features: ["295g Weight", "Color Passthrough", "Fitness Tracking", "Wireless PC"]
  },
  {
    id: 704,
    name: "Valve Index",
    brand: "Valve",
    price: 999,
    rating: 4.9,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?w=500&h=500&fit=crop",
    category: "vr",
    tags: ["pc-vr", "144hz", "finger-tracking", "premium"],
    inStock: true,
    description: "Premium PC VR with best-in-class controllers.",
    features: ["144Hz Display", "Finger Tracking", "Room Scale", "Precision Audio"]
  },
  {
    id: 705,
    name: "HTC Vive XR Elite",
    brand: "HTC",
    price: 1099,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop",
    category: "vr",
    tags: ["hybrid", "convertible", "mr", "business"],
    inStock: true,
    description: "Convertible XR headset: standalone or PC VR.",
    features: ["Detachable Battery", "MR Capable", "Vive Ecosystem", "Business Ready"]
  },
  {
    id: 706,
    name: "VR Treadmill",
    brand: "KAT Walk",
    price: 1999,
    rating: 4.4,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?w=500&h=500&fit=crop",
    category: "vr",
    tags: ["treadmill", "locomotion", "immersive", "gaming"],
    inStock: true,
    description: "Walk and run in VR with 360° movement.",
    features: ["360° Walking", "Low Friction", "Safety Harness", "Universal Support"]
  },
  {
    id: 707,
    name: "Haptic Gloves",
    brand: "SenseGlove",
    price: 299,
    rating: 4.3,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=500&fit=crop",
    category: "vr",
    tags: ["haptic", "gloves", "training", "enterprise"],
    inStock: true,
    description: "Feel virtual objects with force-feedback gloves.",
    features: ["Force Feedback", "Finger Tracking", "Training Ready", "Wireless"]
  },
  {
    id: 708,
    name: "VR Flight Seat",
    brand: "NextLevel",
    price: 449,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop",
    category: "vr",
    tags: ["racing", "flight", "cockpit", "simulation"],
    inStock: true,
    description: "Racing cockpit and flight simulator seat for VR.",
    features: ["Adjustable", "Foldable", "Universal Mounts", "Comfort Padding"]
  }
]

export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category)
}

export const getProductById = (id: number) => {
  return allProducts.find(product => product.id === id)
}

export const getAllCategories = () => {
  return ['earphones', 'gadgets', 'cameras', 'laptops', 'speakers', 'consoles', 'vr']
}

// Get category display name
export const getCategoryDisplayName = (category: string) => {
  const names: { [key: string]: string } = {
    earphones: 'Earphones',
    gadgets: 'Gadgets',
    cameras: 'Cameras',
    laptops: 'Laptops',
    speakers: 'Speakers',
    consoles: 'Consoles',
    vr: 'VR'
  }
  return names[category] || category
}

// Get category color
export const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    earphones: '#18181b',
    gadgets: '#fbbf24',
    cameras: '#f97316',
    laptops: '#ef4444',
    speakers: '#3b82f6',
    consoles: '#f3f4f6',
    vr: '#22c55e'
  }
  return colors[category] || '#18181b'
}