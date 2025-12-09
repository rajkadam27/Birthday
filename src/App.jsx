import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'

// Components
import Hero from './components/Hero'
import Card from './components/Card'
import Modal from './components/Modal'
import HeartfeltMessage from './components/HeartfeltMessage'
import PhotoCarousel from './components/PhotoCarousel'
import VideoPlayer from './components/VideoPlayer'
import Quiz from './components/Quiz'
import WishesWall from './components/WishesWall'
import GiftBox from './components/GiftBox'
import Gallery from './components/Gallery'
import AudioToggle from './components/AudioToggle'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [activeModal, setActiveModal] = useState(null)
  const [wishes, setWishes] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [windowSize, setWindowSize] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sections = [
    { id: 'home', label: 'Home', emoji: '🏠' },
    { id: 'gallery', label: 'Gallery', emoji: '📸' },
    { id: 'memories', label: 'Memories', emoji: '💫' },
    { id: 'wishes', label: 'Wishes', emoji: '💝' },
  ]

  const cards = [
    {
      id: 'message',
      title: 'Love Letter',
      description: 'A heartfelt message written with pure love and admiration for the amazing person you are',
      emoji: '💌',
      gradient: 'bg-gradient-to-br from-neon-pink to-neon-purple',
      component: HeartfeltMessage
    },
    {
      id: 'photos',
      title: 'Memory Lane',
      description: 'Beautiful moments captured in time, each telling a story of joy and friendship',
      emoji: '📷',
      gradient: 'bg-gradient-to-br from-neon-blue to-neon-green',
      component: PhotoCarousel
    },
    {
      id: 'video',
      title: 'Special Message',
      description: 'A personalized video message created with love, just for your special day',
      emoji: '🎬',
      gradient: 'bg-gradient-to-br from-neon-purple to-neon-pink',
      component: VideoPlayer
    },
    {
      id: 'quiz',
      title: 'Fun Challenge',
      description: 'Test how well we know each other with this fun and interactive birthday quiz',
      emoji: '🎯',
      gradient: 'bg-gradient-to-br from-neon-green to-neon-blue',
      component: Quiz
    },
    {
      id: 'wishes',
      title: 'Wish Collection',
      description: 'Leave your birthday wishes and see the beautiful messages from everyone who loves you',
      emoji: '🌟',
      gradient: 'bg-gradient-to-br from-neon-yellow to-neon-pink',
      component: WishesWall
    },
    {
      id: 'gift',
      title: 'Magical Surprise',
      description: 'A special surprise waiting to be unwrapped, filled with love and birthday magic',
      emoji: '🎁',
      gradient: 'bg-gradient-to-br from-neon-pink to-neon-blue',
      component: GiftBox
    }
  ]

  const openModal = (cardId) => {
    setActiveModal(cardId)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const addWish = (wish) => {
    setWishes(prev => [...prev, { id: Date.now(), text: wish }])
  }

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 8000)
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero onOpenGift={triggerConfetti} />
            
            {/* Interactive Cards Section */}
            <section className="py-32 px-4 relative">
              <div className="absolute inset-0 gradient-mesh opacity-10" />
              
              <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-20"
                >
                  <motion.div
                    className="text-8xl mb-8 inline-block"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                  
                  <h2 className="text-6xl font-space font-bold gradient-text mb-8">
                    Explore the Magic
                  </h2>
                  <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Click on any card below to discover the special surprises we've prepared for your birthday celebration
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {cards.map((card, index) => (
                    <Card
                      key={card.id}
                      title={card.title}
                      description={card.description}
                      emoji={card.emoji}
                      gradient={card.gradient}
                      onClick={() => openModal(card.id)}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )
      case 'gallery':
        return <Gallery />
      case 'memories':
        return <PhotoCarousel />
      case 'wishes':
        return <WishesWall wishes={wishes} onAddWish={addWish} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glass-dark"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎂
              </motion.span>
              <span className="text-2xl font-space font-bold gradient-text">
                Shweta's Birthday
              </span>
            </motion.div>

            {/* Navigation items */}
            <div className="hidden md:flex items-center gap-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => setCurrentSection(section.id)}
                  className={`px-6 py-3 rounded-2xl transition-all duration-300 flex items-center gap-2 font-medium ${
                    currentSection === section.id
                      ? 'bg-gradient-to-r from-neon-pink to-neon-blue text-white shadow-neon'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <span className="text-lg">{section.emoji}</span>
                  {section.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden glass p-3 rounded-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl">☰</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          colors={['#ff0080', '#00d4ff', '#8b5cf6', '#00ff88', '#ffff00']}
          gravity={0.1}
        />
      )}

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Audio Toggle */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.8, type: "spring" }}
      >
        <AudioToggle 
          audioOn={audioEnabled} 
          setAudioOn={setAudioEnabled} 
        />
      </motion.div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <Modal onClose={closeModal}>
            {activeModal === 'message' && <HeartfeltMessage />}
            {activeModal === 'photos' && <PhotoCarousel />}
            {activeModal === 'video' && <VideoPlayer />}
            {activeModal === 'quiz' && <Quiz onPerfectScore={triggerConfetti} />}
            {activeModal === 'wishes' && <WishesWall wishes={wishes} onAddWish={addWish} />}
            {activeModal === 'gift' && <GiftBox onOpen={triggerConfetti} />}
          </Modal>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 px-4 relative">
        <div className="absolute inset-0 gradient-mesh opacity-5" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="glass-dark p-12 rounded-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-6 mb-8">
              <motion.span
                className="text-4xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💝
              </motion.span>
              <span className="text-2xl font-space gradient-text">
                Made with infinite love for Shweta
              </span>
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎂
              </motion.span>
            </div>
            
            <div className="flex justify-center gap-6 mb-8">
              <motion.button
                className="btn-neon px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 Share the Magic
              </motion.button>
              <motion.button
                className="btn-neon px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🖨️ Print Memories
              </motion.button>
            </div>
            
            <motion.p
              className="text-lg text-gray-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              December 9th, 2024 • Happy Birthday Shweta! 🎉✨🌟
            </motion.p>
          </motion.div>
        </div>
      </footer>

      {/* Mobile bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="glass-dark p-4">
          <div className="flex justify-around">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`flex flex-col items-center py-2 px-4 rounded-xl transition-all ${
                  currentSection === section.id
                    ? 'text-neon-pink'
                    : 'text-gray-400'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-2xl mb-1">{section.emoji}</span>
                <span className="text-xs font-medium">{section.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App