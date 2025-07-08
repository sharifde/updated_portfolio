import { motion } from 'framer-motion'
import { FaCode, FaServer, FaMobile, FaDatabase, FaCloud, FaShieldAlt } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and interactive websites using modern frameworks like React, Vue.js, and Laravel.',
      icon: <FaCode className="text-3xl text-primary" />,
      color: 'bg-primary/10'
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications with PHP/Laravel, Node.js, and database management.',
      icon: <FaServer className="text-3xl text-blue-500" />,
      color: 'bg-blue-500/10'
    },
    {
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with React Native for iOS and Android.',
      icon: <FaMobile className="text-3xl text-green-500" />,
      color: 'bg-green-500/10'
    },
    {
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries for performance.',
      icon: <FaDatabase className="text-3xl text-purple-500" />,
      color: 'bg-purple-500/10'
    },
    {
      title: 'DevOps & Cloud',
      description: 'Implementing CI/CD pipelines, containerization with Docker, and cloud infrastructure on AWS.',
      icon: <FaCloud className="text-3xl text-orange-500" />,
      color: 'bg-orange-500/10'
    },
    {
      title: 'Security',
      description: 'Implementing security best practices and vulnerability assessments for web applications.',
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      color: 'bg-red-500/10'
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Services
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer a wide range of services to help businesses establish their online presence and optimize their digital operations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-xl ${service.color} shadow-md hover:shadow-lg transition-all`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services