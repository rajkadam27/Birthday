import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HeartfeltMessage = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // TODO: PERSONALIZE - Replace this message with your own heartfelt words for Shweta
  const message = `Dear Shweta,

On this special day, I want you to know how much joy and light you bring into the world. Your infectious laughter, your kind heart, and your amazing spirit make every day brighter for everyone around you.

You have this incredible ability to make people feel valued and loved, and I'm so grateful to have you in my life. Whether we're sharing inside jokes, supporting each other through challenges, or celebrating life's beautiful moments, you always know how to make everything better.

Your strength, creativity, and compassion inspire me every day. You deserve all the happiness, love, and wonderful surprises that life has to offer.

I hope this new year of your life is filled with amazing adventures, dreams coming true, and countless reasons to smile that beautiful smile of yours.

Happy Birthday, Shweta! Here's to celebrating you today and always! 🎉✨

With love and best wishes,
Your Friend 💕`

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(message.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30) // Typing speed
      
      return () => clearTimeout(timer)
    }
  }, [currentIndex, message])

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
          💌 A Message From the Heart
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-peach to-coral mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-peach/10 to-coral/10 p-8 rounded-2xl border border-peach/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 font-inter leading-relaxed whitespace-pre-line">
            {displayedText}
            {currentIndex < message.length && (
              <motion.span
                className="inline-block w-0.5 h-6 bg-gold ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </div>
        
        {currentIndex >= message.length && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-center space-x-4 text-2xl">
              <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>💝</motion.span>
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>🌟</motion.span>
              <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎈</motion.span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default HeartfeltMessage