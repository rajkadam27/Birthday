import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = ({ onOpenGift }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-80" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle bg-white opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Interactive cursor effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,128,0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Main content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass p-12 rounded-3xl mb-8"
        >
          {/* Floating emoji decorations */}
          <div className="absolute -top-6 -left-6">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="text-6xl"
            >
              🎂
            </motion.div>
          </div>
          <div className="absolute -top-6 -right-6">
            <motion.div
              animate={{ rotate: -360, y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-5xl"
            >
              🎉
            </motion.div>
          </div>

          <motion.h1
            className="text-7xl md:text-9xl font-space font-bold gradient-text mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            Happy Birthday
          </motion.h1>

          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-space font-bold text-neon-pink neon-text mb-8">
              Shweta
            </h2>
            <motion.div
              className="absolute -top-8 -right-8"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-4xl">👑</span>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            December 9th • Celebrating another year of magic, memories, and the incredible person you are ✨
          </motion.p>

          <motion.button
            onClick={onOpenGift}
            className="btn-neon text-xl px-12 py-6 relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              🎁 Open Your Magical Gift
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Floating action elements */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {[
            { emoji: '💝', label: 'Love', color: 'neon-pink' },
            { emoji: '📸', label: 'Memories', color: 'neon-blue' },
            { emoji: '🌟', label: 'Dreams', color: 'neon-purple' },
            { emoji: '🎊', label: 'Joy', color: 'neon-green' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="glass-dark p-4 rounded-2xl cursor-pointer hover-lift group"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, delay: index * 0.5 },
                hover: { duration: 0.2 }
              }}
            >
              <div className="text-3xl mb-2 group-hover:animate-bounce">{item.emoji}</div>
              <div className={`text-sm font-medium text-${item.color}`}>{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue opacity-30 blur-sm" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-green opacity-40 blur-sm" />
      </motion.div>
    </section>
  )
}

export default Hero