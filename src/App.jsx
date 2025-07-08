import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './assets/styles/main.css'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="spinner"
          >
            <div className="spinner-inner" />
          </motion.div>
        </div>
      ) : (
        <>
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <Header setActiveSection={setActiveSection} />
          <main>
            <AnimatePresence>
              <motion.section
                id="about"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={sectionVariants}
                onViewportEnter={() => setActiveSection('about')}
              >
                <About />
              </motion.section>

              <motion.section
                id="experience"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={sectionVariants}
                onViewportEnter={() => setActiveSection('experience')}
              >
                <Experience />
              </motion.section>

              <motion.section
                id="services"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={sectionVariants}
                onViewportEnter={() => setActiveSection('services')}
              >
                <Services />
              </motion.section>

              <motion.section
                id="portfolio"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={sectionVariants}
                onViewportEnter={() => setActiveSection('portfolio')}
              >
                <Portfolio />
              </motion.section>

              <motion.section
                id="testimonials"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={sectionVariants}
                onViewportEnter={() => setActiveSection('testimonials')}
              >
                <Testimonials />
              </motion.section>

              <motion.section
                id="contact"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={sectionVariants}
                onViewportEnter={() => setActiveSection('contact')}
              >
                <Contact />
              </motion.section>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App