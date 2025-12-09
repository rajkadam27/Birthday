import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Card = ({ title, description, emoji, gradient, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="card-glass p-8 cursor-pointer group relative overflow-hidden"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 opacity-20 ${gradient}`}
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.3 : 0.1
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -50]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Emoji with animation */}
        <motion.div
          className="text-6xl mb-6 inline-block"
          animate={{ 
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? [1, 1.2, 1] : 1
          }}
          transition={{ 
            duration: 0.6,
            repeat: isHovered ? Infinity : 0
          }}
        >
          {emoji}
        </motion.div>

        <motion.h3
          className="text-2xl font-space font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300"
          animate={{ y: isHovered ? -5 : 0 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 leading-relaxed mb-6"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {description}
        </motion.p>

        {/* Action indicator */}
        <motion.div
          className="flex items-center justify-center gap-2 text-neon-blue font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.3 }}
        >
          <span>Explore</span>
          <motion.span
            animate={{ x: isHovered ? [0, 5, 0] : 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          boxShadow: isHovered 
            ? '0 0 30px rgba(255, 0, 128, 0.3), 0 0 60px rgba(0, 212, 255, 0.2)'
            : '0 0 0px rgba(255, 0, 128, 0)'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border animation */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent"
        animate={{
          borderImage: isHovered 
            ? 'linear-gradient(45deg, #ff0080, #00d4ff, #8b5cf6) 1'
            : 'none'
        }}
        style={{
          borderImage: isHovered ? 'linear-gradient(45deg, #ff0080, #00d4ff, #8b5cf6) 1' : 'none'
        }}
      />
    </motion.div>
  )
}

export default Card