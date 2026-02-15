import './App.css'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import GadgetsPage from './components/products/GadgetsPage'
import ConsolesPage from './components/products/ConsolesPage'
import SpeakersPage from './components/products/SpeakersPage'
import LaptopsPage from './components/products/LaptopsPage'
import CamerasPage from './components/products/CamerasPage'
import EarphonesPage from './components/products/EarphonesPage'
import VrPage from './components/products/VrPage'
import ProductsPage from './components/ProductsPage'
import BlogList from './components/blog/BlogList'
import BlogDetail from './components/blog/BlogDetail'

function App() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

            <Route path="/products/earphones" element={<EarphonesPage />} /> 
            <Route path="/products/gadgets" element={<GadgetsPage />} />
            <Route path="/products/cameras" element={<CamerasPage />} /> 
            <Route path="/products/laptops" element={<LaptopsPage />} />
            <Route path="/products/speakers" element={<SpeakersPage />} />
            <Route path="/products/consoles" element={<ConsolesPage />} />
            <Route path="/products/vr" element={<VrPage />} />
            <Route path="/shop" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
