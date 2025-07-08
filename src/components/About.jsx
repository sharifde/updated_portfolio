import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const skills = [
    { name: 'PHP/Laravel', level: 90, icon: <FaCode className="text-primary" /> },
    { name: 'React.js', level: 85, icon: <FaCode className="text-blue-500" /> },
    { name: 'Vue.js', level: 80, icon: <FaCode className="text-green-500" /> },
    { name: 'Node.js', level: 75, icon: <FaServer className="text-yellow-500" /> },
    { name: 'MySQL', level: 85, icon: <FaDatabase className="text-orange-500" /> },
    { name: 'AWS/DevOps', level: 80, icon: <FaCloud className="text-purple-500" /> }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with 4 years of experience in building web applications. I specialize in creating efficient, scalable, and user-friendly solutions using modern technologies.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="ml-auto text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-2.5 rounded-full ${
                        index % 3 === 0 ? 'bg-primary' : 
                        index % 3 === 1 ? 'bg-blue-500' : 'bg-green-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Personal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Name', value: 'Your Name' },
                { label: 'Age', value: '28' },
                { label: 'Experience', value: '4+ Years' },
                { label: 'Email', value: 'youremail@example.com' },
                { label: 'Phone', value: '+123 456 7890' },
                { label: 'Freelance', value: 'Available' },
                { label: 'Languages', value: 'English, Spanish' },
                { label: 'Location', value: 'San Francisco, USA' }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{info.label}</p>
                  <p className="font-medium text-gray-800 dark:text-white">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About