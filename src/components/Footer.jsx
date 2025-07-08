import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          <div className="flex gap-6 mb-8">
            {[
              { icon: <FaGithub size={24} />, url: 'https://github.com/yourusername' },
              { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/yourusername' },
              { icon: <FaTwitter size={24} />, url: 'https://twitter.com/yourusername' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-gray-400 text-center mb-4">
            © {currentYear} Your Name. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using React & Vite
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer