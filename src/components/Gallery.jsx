import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import real images from assets
import img1 from '../assets/20241209_184110.jpg'
import img2 from '../assets/befunky_2024-9-6_20-37-17.jpg'
import img3 from '../assets/Picsart_24-11-08_08-14-16-396.jpg'
import img4 from '../assets/Picsart_25-08-21_21-01-46-953.jpg'
import img5 from '../assets/Picsart_25-10-20_20-09-58-831.jpg'
import img6 from '../assets/Picsart_25-10-20_20-14-40-145.jpg'
import img7 from '../assets/Screenshot_2024-07-13-22-05-06-048_com.picsart.studio-edit.jpg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')
  const constraintsRef = useRef(null)

  const photos = [
    {
      src: img1,
      alt: 'Shweta - Radiant Beauty',
      caption: 'Your smile lights up the universe ✨',
      category: 'portraits',
      date: 'Dec 2024',
      mood: '😊'
    },
    {
      src: img2,
      alt: 'Shweta - Creative Soul', 
      caption: 'Artistic and absolutely stunning 🎨',
      category: 'creative',
      date: 'Sep 2024',
      mood: '🎭'
    },
    {
      src: img3,
      alt: 'Shweta - Joyful Moments',
      caption: 'Pure happiness captured forever 💫',
      category: 'lifestyle',
      date: 'Nov 2024',
      mood: '🌟'
    },
    {
      src: img4,
      alt: 'Shweta - Elegant Grace',
      caption: 'Elegance personified 👑',
      category: 'portraits',
      date: 'Aug 2024',
      mood: '💎'
    },
    {
      src: img5,
      alt: 'Shweta - Creative Vision',
      caption: 'Your creativity knows no bounds 🚀',
      category: 'creative',
      date: 'Oct 2024',
      mood: '🎨'
    },
    {
      src: img6,
      alt: 'Shweta - Beautiful Soul',
      caption: 'Beauty inside and out 💕',
      category: 'portraits',
      date: 'Oct 2024',
      mood: '💖'
    },
    {
      src: img7,
      alt: 'Shweta - Living Life',
      caption: 'Living your best life 🌈',
      category: 'lifestyle',
      date: 'Jul 2024',
      mood: '🦋'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Magic', emoji: '✨' },
    { id: 'portraits', label: 'Beautiful You', emoji: '👑' },
    { id: 'lifestyle', label: 'Life Moments', emoji: '🌟' },
    { id: 'creative', label: 'Artistic Soul', emoji: '🎨' }
  ]

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === filter)

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="text-8xl mb-6 inline-block"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            📸
          </motion.div>
          
          <h2 className="text-6xl font-space font-bold gradient-text mb-6">
            Memory Galaxy
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A constellation of beautiful moments captured in time ✨
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="glass p-2 rounded-2xl flex gap-2 flex-wrap justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-neon-pink to-neon-blue text-white shadow-neon'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <span className="text-xl">{category.emoji}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Photo grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={constraintsRef}
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="card-glass overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(photo)}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
              >
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover content */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center text-white">
                      <motion.div
                        className="text-4xl mb-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🔍
                      </motion.div>
                      <p className="font-medium">View Magic</p>
                    </div>
                  </motion.div>

                  {/* Mood indicator */}
                  <motion.div
                    className="absolute top-4 right-4 text-2xl"
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {photo.mood}
                  </motion.div>
                </div>

                {/* Info section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-neon-blue font-medium">{photo.date}</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-neon-pink"
                    >
                      ✨
                    </motion.div>
                  </div>
                  <p className="text-white font-medium mb-2">{photo.caption}</p>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(255, 0, 128, 0.3), 0 0 60px rgba(0, 212, 255, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              
              {/* Content */}
              <motion.div
                className="relative max-w-4xl max-h-full glass-dark p-8 rounded-3xl"
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl mb-6"
                />
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl">{selectedImage.mood}</span>
                    <div>
                      <h3 className="text-2xl font-space font-bold gradient-text">
                        {selectedImage.caption}
                      </h3>
                      <p className="text-neon-blue">{selectedImage.date}</p>
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery