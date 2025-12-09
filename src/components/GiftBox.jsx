import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GiftBox = ({ onOpen }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const handleOpen = () => {
    if (!isOpened) {
      setIsOpened(true)
      onOpen()
    }
  }

  const handleMouseEnter = () => {
    if (!isOpened) {
      setIsShaking(true)
    }
  }

  const handleMouseLeave = () => {
    setIsShaking(false)
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
          🎁 Special Surprise Gift
        </h2>
        <p className="text-gray-600 font-inter">
          {isOpened ? "Your gift has been revealed!" : "Click the gift box to open your surprise!"}
        </p>
      </motion.div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="gift-box"
              className="cursor-pointer"
              onClick={handleOpen}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative mx-auto w-48 h-48 mb-8"
                animate={isShaking ? {
                  x: [-2, 2, -2, 2, 0],
                  rotate: [-1, 1, -1, 1, 0]
                } : {}}
                transition={{ duration: 0.5, repeat: isShaking ? Infinity : 0 }}
              >
                {/* Gift Box Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral to-soft-pink rounded-2xl shadow-2xl">
                  {/* Gift Box Pattern */}
                  <div className="absolute inset-4 border-4 border-white/30 rounded-xl"></div>
                  
                  {/* Ribbon Vertical */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-gold"></div>
                  
                  {/* Ribbon Horizontal */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-8 bg-gold"></div>
                  
                  {/* Bow */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="w-16 h-12 bg-gold rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-8 bg-coral rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Sparkles around the box */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      top: `${20 + (i % 3) * 30}%`,
                      left: `${10 + (i % 2) * 80}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-lg font-inter text-gray-600 mb-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click to open your surprise! 🎉
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="opened-gift"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-peach/10 to-coral/10 rounded-2xl p-8 border border-peach/20"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <div className="text-6xl mb-4">🎊</div>
                <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
                  Surprise! 🎉
                </h3>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                {/* TODO: PERSONALIZE - Replace with your own gift idea */}
                <div className="text-4xl mb-4">☕</div>
                <h4 className="text-xl font-poppins font-semibold text-gray-800 mb-2">
                  You've Won a Free Coffee Date! ☕
                </h4>
                <p className="text-gray-600 font-inter mb-4">
                  This coupon is good for one coffee date at your favorite café! 
                  Let's catch up over some delicious coffee and cake to celebrate your birthday properly! 🍰
                </p>
                
                <div className="bg-gradient-to-r from-peach/20 to-coral/20 rounded-lg p-4 border-2 border-dashed border-peach">
                  <p className="text-sm font-inter text-gray-700">
                    <strong>Valid:</strong> Anytime you want! <br/>
                    <strong>Includes:</strong> Coffee + Birthday cake slice <br/>
                    <strong>Bonus:</strong> Unlimited birthday hugs! 🤗
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 flex justify-center space-x-4 text-2xl"
              >
                <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎂</motion.span>
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>✨</motion.span>
                <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎈</motion.span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default GiftBox