import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'memories', label: 'Memories', icon: 'photo_library' },
    { id: 'timeline', label: 'Timeline', icon: 'timeline' },
    { id: 'wishes', label: 'Wishes', icon: 'favorite' },
    { id: 'gallery', label: 'Gallery', icon: 'collections' },
    { id: 'celebration', label: 'Celebration', icon: 'celebration' },
  ]

  return (
    <>
      {/* Top App Bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-material"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="material-icons text-primary text-2xl mr-2">cake</span>
              <span className="font-roboto font-medium text-lg text-on-surface">
                Shweta's Birthday
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    currentSection === section.id
                      ? 'bg-primary text-white shadow-material'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="material-icons text-sm">{section.icon}</span>
                  <span className="font-medium text-sm">{section.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-icons">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-surface border-t border-gray-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-2 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      onSectionChange(section.id)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      currentSection === section.id
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="material-icons">{section.icon}</span>
                    <span className="font-medium">{section.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          {sections.slice(0, 4).map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                currentSection === section.id
                  ? 'text-primary'
                  : 'text-gray-400'
              }`}
            >
              <span className="material-icons text-xl">{section.icon}</span>
              <span className="text-xs font-medium mt-1">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navigation