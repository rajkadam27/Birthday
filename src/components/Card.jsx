import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ title, description, emoji, gradient, onClick, index }) => {
  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} p-8 cursor-pointer group relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20 hover:border-white transition-all`}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-center relative z-10">
        <motion.div
          className="text-7xl mb-6 inline-block"
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 0.6 }}
        >
          {emoji}
        </motion.div>

        <h3 className="text-2xl font-display font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h3>

        <p className="text-white/90 leading-relaxed mb-6 text-base drop-shadow">
          {description}
        </p>

        <div className="flex items-center justify-center gap-2 text-white font-bold drop-shadow">
          <span>Click to Explore</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            →
          </motion.span>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
      />
    </motion.div>
  )
}

export default Card