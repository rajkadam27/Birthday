import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import real images from assets
import img1 from '../assets/20241209_184110.jpg'
import img2 from '../assets/befunky_2024-9-6_20-37-17.jpg'
import img3 from '../assets/Picsart_24-11-08_08-14-16-396.jpg'
import img4 from '../assets/Picsart_25-08-21_21-01-46-953.jpg'
import img5 from '../assets/Picsart_25-10-20_20-09-58-831.jpg'
import img6 from '../assets/Picsart_25-10-20_20-14-40-145.jpg'
import img7 from '../assets/Screenshot_2024-07-13-22-05-06-048_com.picsart.studio-edit.jpg'

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Real photos of Shweta
  const photos = [
    {
      src: img1,
      alt: 'Shweta - Beautiful moment 1',
      caption: 'Your radiant smile lights up every room! ✨'
    },
    {
      src: img2,
      alt: 'Shweta - Beautiful moment 2', 
      caption: 'Making memories that last forever 📸'
    },
    {
      src: img3,
      alt: 'Shweta - Beautiful moment 3',
      caption: 'Adventure and joy in every step 🌟'
    },
    {
      src: img4,
      alt: 'Shweta - Beautiful moment 4',
      caption: 'Celebrating life and friendship 🎉'
    },
    {
      src: img5,
      alt: 'Shweta - Beautiful moment 5',
      caption: 'Your creativity knows no bounds 🎨'
    },
    {
      src: img6,
      alt: 'Shweta - Beautiful moment 6',
      caption: 'Spreading happiness wherever you go 💕'
    },
    {
      src: img7,
      alt: 'Shweta - Beautiful moment 7',
      caption: 'Living life to the fullest 🌈'
    }
  ]

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const goToPhoto = (index) => {
    setCurrentIndex(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextPhoto()
    if (isRightSwipe) prevPhoto()
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
          📸 Beautiful Memories
        </h2>
        <p className="text-gray-600 font-inter">
          Capturing the amazing moments of your journey
        </p>
      </motion.div>

      <div className="relative">
        {/* Main Photo Display */}
        <div 
          className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-100"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="w-full h-full object-cover rounded-lg"
              />
              
              {/* Simple caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <p className="text-white text-center">
                  {photos[currentIndex].caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white"
            aria-label="Previous photo"
          >
            <span className="text-xl">←</span>
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white"
            aria-label="Next photo"
          >
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => goToPhoto(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-blue-500 scale-110' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <img
                src={photo.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Photo Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-500 font-inter">
            {currentIndex + 1} of {photos.length}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PhotoCarousel