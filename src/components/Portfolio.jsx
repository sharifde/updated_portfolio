import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Full-featured online store with Laravel backend and React frontend.',
      tags: ['Laravel', 'React', 'MySQL', 'AWS'],
      image: '/project1.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management application with real-time updates.',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '/project2.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      category: 'mobile',
      description: 'Cross-platform fitness tracking application with workout plans.',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: '/project3.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'DevOps Pipeline',
      category: 'devops',
      description: 'Automated CI/CD pipeline for a microservices architecture.',
      tags: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
      image: '/project4.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'CMS Platform',
      category: 'web',
      description: 'Custom content management system for small businesses.',
      tags: ['Laravel', 'Vue.js', 'Tailwind CSS'],
      image: '/project5.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'API Gateway',
      category: 'devops',
      description: 'Scalable API gateway with authentication and rate limiting.',
      tags: ['Node.js', 'Redis', 'AWS API Gateway'],
      image: '/project6.jpg',
      demoUrl: '#',
      codeUrl: '#'
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'devops', name: 'DevOps' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
            My Portfolio
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted to solve specific problems.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-900"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Overlay */}
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary dark:text-white rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio