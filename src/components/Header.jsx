import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import heroImage from '../assets/images/hero.webp'

const Header = ({ setActiveSection }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.5 }
    })
  }

  return (
    <header
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={textVariants}
            className="text-lg text-primary font-medium mb-4"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Full Stack Developer
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
          >
            Specializing in PHP/Laravel, React, Vue.js, and DevOps with 4 years of experience building scalable web applications.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
              onClick={() => setActiveSection('contact')}
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 border-primary text-primary dark:border-primary-light dark:text-primary-light rounded-lg font-medium hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white transition-colors flex items-center gap-2"
            >
              <FaFileDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <FaGithub size={24} />, url: 'https://github.com/yourusername' },
              { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/yourusername' },
              { icon: <FaTwitter size={24} />, url: 'https://twitter.com/yourusername' },
              { icon: <HiOutlineMail size={24} />, url: 'mailto:youremail@example.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={socialIconVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-lg animate-pulse"></div>
            <img
              src={heroImage}
              alt="Developer"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header