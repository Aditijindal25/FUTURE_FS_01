import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

const pageTitles = {
  '/': 'The VINES CAFE | Café & Restaurant in Meerut',
  '/about': 'About The VINES CAFE | Meerut',
  '/menu': 'Menu | The VINES CAFE',
  '/gallery': 'Gallery | The VINES CAFE',
  '/contact': 'Contact | The VINES CAFE',
}

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    document.title = pageTitles[location.pathname] ?? 'The VINES CAFE'

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute(
        'content',
        'The VINES CAFE in Meerut serves Italian, Chinese and vegetarian favourites in a warm neighbourhood café setting.',
      )
    }
  }, [location.pathname])

  return (
    <div className="site-shell">
      <Navbar />

      <main className="site-main">
        <div key={location.pathname} className="page-viewport">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
