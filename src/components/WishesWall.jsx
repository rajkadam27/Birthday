import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WishesWall = ({ wishes, onAddWish }) => {
  const [newWish, setNewWish] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newWish.trim() && newWish.length <= 140) {
      setIsSubmitting(true)
      setTimeout(() => {
        onAddWish(newWish.trim())
        setNewWish('')
        setIsSubmitting(false)
      }, 500)
    }
  }

  const wishColors = [
    'from-peach to-coral',
    'from-coral to-soft-pink',
    'from-soft-pink to-peach',
    'from-gold to-peach',
    'from-peach to-gold'
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
          🌸 Birthday Wishes Wall
        </h2>
        <p className="text-gray-600 font-inter">
          Leave a special birthday wish for Shweta (max 140 characters)
        </p>
      </motion.div>

      {/* Wish Input Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg p-6 mb-8"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              placeholder="Write your birthday wish for Shweta here... 💕"
              className="w-full p-4 border-2 border-gray-200 rounded-xl resize-none focus:border-coral focus:outline-none transition-colors font-inter"
              rows="3"
              maxLength="140"
            />
            <div className="flex justify-between items-center mt-2">
              <span className={`text-sm ${newWish.length > 120 ? 'text-coral' : 'text-gray-400'}`}>
                {newWish.length}/140 characters
              </span>
              <motion.button
                type="submit"
                disabled={!newWish.trim() || newWish.length > 140 || isSubmitting}
                className={`px-6 py-2 rounded-full font-poppins font-semibold transition-all ${
                  newWish.trim() && newWish.length <= 140 && !isSubmitting
                    ? 'bg-gradient-to-r from-peach to-coral text-white hover:shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={newWish.trim() && !isSubmitting ? { scale: 1.05 } : {}}
                whileTap={newWish.trim() && !isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? '✨ Adding...' : '🌸 Add Wish'}
              </motion.button>
            </div>
          </div>
        </form>
      </motion.div>

      {/* Wishes Display */}
      <div className="space-y-4">
        <AnimatePresence>
          {wishes.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🌸</div>
              <p className="text-gray-500 font-inter">
                Be the first to leave a birthday wish for Shweta!
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {wishes.map((wish, index) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${wishColors[index % wishColors.length]} p-6 rounded-2xl shadow-lg text-white relative overflow-hidden`}
                >
                  {/* Background decoration */}
                  <div className="absolute top-2 right-2 text-2xl opacity-30">✨</div>
                  <div className="absolute bottom-2 left-2 text-xl opacity-30">💕</div>
                  
                  <div className="relative z-10">
                    <p className="font-inter leading-relaxed">
                      "{wish.text}"
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs opacity-75">
                        Wish #{wishes.length - index}
                      </span>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className="text-xl"
                      >
                        🎈
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Note about persistence */}
      {wishes.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 font-inter">
            💡 Note: Wishes are stored temporarily and will reset when the page is refreshed
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default WishesWall