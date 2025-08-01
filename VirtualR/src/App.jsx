import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-6 px-10">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
      
    </>
  )
}

export default App
