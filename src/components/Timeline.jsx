import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2024',
      title: 'Another Amazing Year',
      description: 'Celebrating all the wonderful moments and achievements of this year',
      icon: 'celebration',
      color: 'bg-primary'
    },
    {
      year: '2023',
      title: 'New Adventures',
      description: 'Exploring new places, meeting new people, and creating beautiful memories',
      icon: 'explore',
      color: 'bg-secondary'
    },
    {
      year: '2022',
      title: 'Growth & Learning',
      description: 'A year of personal growth, learning new skills, and discovering passions',
      icon: 'school',
      color: 'bg-teal'
    },
    {
      year: '2021',
      title: 'Resilience & Strength',
      description: 'Showing incredible strength and resilience through challenging times',
      icon: 'psychology',
      color: 'bg-purple'
    },
    {
      year: '2020',
      title: 'Adaptation & Innovation',
      description: 'Adapting to new ways of living and finding creative solutions',
      icon: 'lightbulb',
      color: 'bg-warning'
    }
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="material-icons text-5xl text-primary mb-4 block">timeline</span>
          <h2 className="text-4xl font-roboto font-light text-on-surface mb-4">
            Your Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of beautiful moments, growth, and memories that make you who you are today
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className={`relative z-10 w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-material`}>
                <span className="material-icons text-white text-xl">{event.icon}</span>
              </div>

              {/* Content card */}
              <div className="ml-8 flex-1">
                <div className="material-card p-6 group hover:shadow-material-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-roboto font-medium text-primary">
                      {event.year}
                    </span>
                    <span className="material-icons text-gray-400 group-hover:text-primary transition-colors">
                      arrow_forward
                    </span>
                  </div>
                  <h3 className="text-xl font-roboto font-medium text-on-surface mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="material-card p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <span className="material-icons text-4xl text-accent mb-4 block">auto_awesome</span>
            <h3 className="text-2xl font-roboto font-medium text-on-surface mb-3">
              Here's to Many More!
            </h3>
            <p className="text-gray-600 mb-6">
              May the coming years be filled with even more amazing adventures, 
              beautiful moments, and incredible achievements.
            </p>
            <button className="material-button">
              <span className="material-icons mr-2">favorite</span>
              Make a Wish
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline