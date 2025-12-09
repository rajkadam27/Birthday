import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'gallery', label: 'Gallery', icon: '📸' },
    { id: 'memories', label: 'Memories', icon: '💫' },
    { id: 'wishes', label: 'Wishes', icon: '💝' },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="glass px-8 py-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <span className="text-2xl">🎂</span>
            <span className="font-display font-bold text-white text-lg">Shweta's Birthday</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium ${
                  currentSection === section.id
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{section.icon}</span>
                {section.label}
              </motion.button>
            ))}
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar