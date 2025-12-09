import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WishesWall = ({ wishes, onAddWish }) => {
  const [newWish, setNewWish] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newWish.trim() && newWish.length <= 140) {
      onAddWish(newWish.trim())
      setNewWish('')
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-display font-bold text-white mb-4">
            🌸 Birthday Wishes Wall
          </h2>
          <p className="text-xl text-white/80">
            Leave a special birthday wish for Shweta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card p-8 mb-12"
        >
          <form onSubmit={handleSubmit}>
            <textarea
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              placeholder="Write your birthday wish for Shweta here... 💕"
              className="w-full p-4 border-2 border-gray-200 rounded-xl resize-none focus:border-primary focus:outline-none transition-colors text-gray-800"
              rows="4"
              maxLength="140"
            />
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                {newWish.length}/140 characters
              </span>
              <button
                type="submit"
                disabled={!newWish.trim()}
                className={`px-10 py-5 rounded-full font-bold text-white text-xl shadow-2xl transition-all ${
                  newWish.trim() 
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-pink-500/50 hover:scale-110 animate-pulse' 
                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                }`}
              >
                ✨ Add Wish ✨
              </button>
            </div>
          </form>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence>
            {wishes.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-8xl mb-6">🌸</div>
                <p className="text-xl text-white/80">
                  Be the first to leave a birthday wish for Shweta!
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card p-6 relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-2 text-2xl opacity-20">✨</div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "{wish.text}"
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Wish #{wishes.length - index}</span>
                      <span className="text-xl">🎈</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default WishesWall