import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    setShowControls(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
          🎬 Special Birthday Message
        </h2>
        <p className="text-gray-600 font-inter">
          A heartfelt video message just for you
        </p>
      </motion.div>

      <div className="relative">
        {/* Video Container */}
        <motion.div
          className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="aspect-video relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              onPlay={() => setShowControls(false)}
              onPause={() => setShowControls(true)}
            >
              <source src="/video/birthday-message.mp4" type="video/mp4" />
              {/* Fallback content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-peach to-coral">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🎥</div>
                  <h3 className="text-2xl font-poppins font-bold mb-2">Video Coming Soon!</h3>
                  <p className="font-inter">A special birthday message is being prepared for you</p>
                </div>
              </div>
            </video>

            {/* Play Button Overlay */}
            {showControls && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.button
                  onClick={togglePlay}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  <span className="text-3xl text-gray-800 ml-1">
                    {isPlaying ? '⏸️' : '▶️'}
                  </span>
                </motion.button>
              </motion.div>
            )}

            {/* Video Caption */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-white text-center font-inter">
                🎉 A special birthday surprise made with love! 💕
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Info */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-peach/10 to-coral/10 rounded-xl p-6 border border-peach/20">
            <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-2">
              🌟 Made Especially for You
            </h3>
            <p className="text-gray-600 font-inter">
              This video contains all the love, laughter, and birthday wishes we wanted to share with you on your special day. 
              We hope it brings a smile to your face and warmth to your heart! 
            </p>
            
            <div className="flex justify-center mt-4 space-x-4 text-2xl">
              <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎂</motion.span>
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>✨</motion.span>
              <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎈</motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default VideoPlayer