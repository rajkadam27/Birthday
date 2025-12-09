import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import Navbar from './components/Navbar'
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

  const cards = [
    {
      id: 'message',
      title: 'Heartfelt Message',
      description: 'A special message written just for you with love and care',
      emoji: '💌',
      gradient: 'from-pink-400 via-rose-400 to-red-400'
    },
    {
      id: 'photos',
      title: 'Photo Memories',
      description: 'Beautiful moments captured and cherished forever',
      emoji: '📸',
      gradient: 'from-blue-400 via-cyan-400 to-teal-400'
    },
    {
      id: 'video',
      title: 'Special Video',
      description: 'A personalized birthday message created with love',
      emoji: '🎬',
      gradient: 'from-purple-400 via-violet-400 to-indigo-400'
    },
    {
      id: 'quiz',
      title: 'Fun Quiz',
      description: 'Test how well we know each other with this fun quiz',
      emoji: '🎯',
      gradient: 'from-green-400 via-emerald-400 to-teal-400'
    },
    {
      id: 'wishes',
      title: 'Wishes Collection',
      description: 'Leave your birthday wishes and see what others have written',
      emoji: '🌟',
      gradient: 'from-yellow-400 via-orange-400 to-red-400'
    },
    {
      id: 'gift',
      title: 'Surprise Gift',
      description: 'A special surprise waiting to be unwrapped',
      emoji: '🎁',
      gradient: 'from-fuchsia-400 via-pink-400 to-rose-400'
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
    setTimeout(() => setShowConfetti(false), 5000)
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero onOpenGift={triggerConfetti} />
            
            <section className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-5xl font-display font-bold text-white mb-6">
                    Explore & Discover ✨
                  </h2>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto">
                    Click on any card below to explore different sections
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="min-h-screen relative">
      <Navbar 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />

      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <AudioToggle 
          audioOn={audioEnabled} 
          setAudioOn={setAudioEnabled} 
        />
      </motion.div>

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

      <footer className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-3xl">
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-3xl">💝</span>
              <span className="text-xl font-display text-white">
                Made with love for Shweta
              </span>
              <span className="text-3xl">🎂</span>
            </div>
            
            <div className="flex justify-center gap-4 mb-6">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-purple text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                📱 Share
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-secondary to-orange text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                🖨️ Print
              </button>
            </div>
            
            <p className="text-white/80">
              December 9th, 2024 • Happy Birthday Shweta! 🎉
            </p>
          </div>
        </div>
      </footer>

      <div className="h-20 md:hidden" />
    </div>
  )
}

export default App