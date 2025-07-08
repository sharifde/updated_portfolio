import { motion } from 'framer-motion'
import { FaLaptopCode, FaUniversity, FaTools } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading a team to develop scalable web applications using Laravel and React. Implementing CI/CD pipelines and cloud infrastructure.',
      icon: <FaLaptopCode className="text-primary" />
    },
    {
      title: 'Full Stack Developer',
      company: 'Web Innovations LLC',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications. Integrated third-party APIs and optimized database performance.',
      icon: <FaLaptopCode className="text-blue-500" />
    },
    {
      title: 'Junior Developer',
      company: 'Digital Creations',
      period: '2019 - 2020',
      description: 'Assisted in developing frontend components and backend APIs. Learned best practices in coding and deployment.',
      icon: <FaLaptopCode className="text-green-500" />
    }
  ]

  const education = [
    {
      degree: 'MSc in Computer Science',
      institution: 'State University',
      period: '2017 - 2019',
      description: 'Specialized in Web Technologies and Distributed Systems.',
      icon: <FaUniversity className="text-purple-500" />
    },
    {
      degree: 'BSc in Software Engineering',
      institution: 'Tech Institute',
      period: '2013 - 2017',
      description: 'Fundamentals of programming, algorithms, and data structures.',
      icon: <FaUniversity className="text-orange-500" />
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2021',
      icon: <FaTools className="text-yellow-500" />
    },
    {
      title: 'Laravel Certification',
      issuer: 'Laravel',
      year: '2020',
      icon: <FaTools className="text-red-500" />
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
            My Experience
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my skills and knowledge.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <FaLaptopCode className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-6 border-l-2 border-primary/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center gap-3 mb-1">
                    {exp.icon}
                    <h4 className="font-medium text-gray-800 dark:text-white">{exp.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.company} • {exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500/10 rounded-full mr-4">
                <FaUniversity className="text-2xl text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-6 border-l-2 border-purple-500/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="flex items-center gap-3 mb-1">
                    {edu.icon}
                    <h4 className="font-medium text-gray-800 dark:text-white">{edu.degree}</h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{edu.institution} • {edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-yellow-500/10 rounded-full mr-4">
                <FaTools className="text-2xl text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-6 border-l-2 border-yellow-500/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div className="flex items-center gap-3 mb-1">
                    {cert.icon}
                    <h4 className="font-medium text-gray-800 dark:text-white">{cert.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience