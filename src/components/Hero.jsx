import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ onOpenGift }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="text-8xl mb-8"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎂
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Happy Birthday
          </motion.h1>

          <motion.h2
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Shweta! 🎉
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            December 9th • Celebrating another year of amazing memories and the wonderful person you are! ✨
          </motion.p>

          <motion.button
            onClick={onOpenGift}
            className="btn-secondary text-xl px-12 py-6 rounded-full font-semibold inline-flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🎁</span>
            Open Your Gift
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 mt-16 flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            { emoji: '💝', label: 'Love' },
            { emoji: '📸', label: 'Memories' },
            { emoji: '🌟', label: 'Dreams' },
            { emoji: '🎊', label: 'Joy' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="glass p-6 rounded-2xl text-center cursor-pointer hover:bg-white/20 transition-all"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="text-white font-medium">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-10 text-6xl opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 text-4xl opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🎈
      </motion.div>
    </section>
  )
}

export default Hero