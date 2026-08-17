import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Platforms from './components/Platforms'
import Verticals from './components/Verticals'
import Industries from './components/Industries'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

const App: React.FC = () => (
  <div className="min-h-screen bg-[#050507] text-white antialiased">
    <Navbar />
    <main>
      <Hero />
      <Platforms />
      <Verticals />
      <Industries />
      <About />
      <Process />
      <WhyUs />
      <Leadership />
      <Contact />
    </main>
    <Footer />
    <ScrollTop />
  </div>
)

export default App
