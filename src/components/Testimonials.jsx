import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechSolutions Inc.',
      content: 'Working with this developer was an absolute pleasure. Their expertise in Laravel and React helped us build a robust e-commerce platform that increased our sales by 150%. Highly recommended for any complex web project!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, StartupHub',
      content: 'The DevOps implementation was flawless. They set up our CI/CD pipeline and cloud infrastructure that scaled perfectly during our product launch. Their attention to detail saved us countless hours of debugging.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      role: 'Product Manager, DigitalCreations',
      content: 'Exceptional Vue.js skills! Delivered our admin dashboard ahead of schedule with perfect functionality. The code was clean, well-documented, and performance-optimized. Will definitely hire again for future projects.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
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

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Client Testimonials
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's what my clients say about working with me and the results we achieved together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-center text-primary mb-4">
                <FaQuoteLeft className="text-3xl opacity-20" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials