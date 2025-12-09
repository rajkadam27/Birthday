import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Quiz = ({ onPerfectScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  // TODO: PERSONALIZE - Update these questions with real facts about Shweta
  const questions = [
    {
      question: "What's Shweta's favorite color?",
      options: ["Blue", "Pink", "Purple", "Green"],
      correct: 1,
      explanation: "Shweta loves pink - it matches her vibrant personality! 💕"
    },
    {
      question: "What does Shweta love to do in her free time?",
      options: ["Reading books", "Watching movies", "Cooking", "All of the above"],
      correct: 3,
      explanation: "Shweta is multi-talented and loves doing all these activities! 🌟"
    },
    {
      question: "What's Shweta's dream destination?",
      options: ["Paris", "Tokyo", "New York", "Bali"],
      correct: 0,
      explanation: "Shweta dreams of visiting the romantic city of Paris! 🗼"
    }
  ]

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    setShowResults(true)
    
    if (correctAnswers === questions.length) {
      onPerfectScore()
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
            🎯 Quiz Results
          </h2>
          
          <div className="bg-gradient-to-br from-peach/10 to-coral/10 rounded-2xl p-8 border border-peach/20">
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {score === questions.length ? '🏆' : score >= questions.length / 2 ? '🌟' : '💝'}
            </motion.div>
            
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">
              You scored {score} out of {questions.length}!
            </h3>
            
            <p className="text-gray-600 font-inter mb-6">
              {score === questions.length 
                ? "Perfect! You know Shweta so well! 🎉" 
                : score >= questions.length / 2 
                ? "Great job! You're a wonderful friend! 😊"
                : "Every friendship is special in its own way! 💕"}
            </p>

            {/* Show explanations */}
            <div className="space-y-4 mb-6">
              {questions.map((q, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-left bg-white/50 rounded-lg p-4"
                >
                  <p className="font-semibold text-gray-800 mb-1">
                    {q.question}
                  </p>
                  <p className="text-sm text-gray-600">
                    {q.explanation}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <button
              onClick={resetQuiz}
              className="px-6 py-3 bg-gradient-to-r from-peach to-coral text-white font-poppins font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Take Quiz Again
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
          🎯 How Well Do You Know Shweta?
        </h2>
        <div className="flex justify-center items-center space-x-2 mb-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentQuestion 
                  ? 'bg-coral' 
                  : index < currentQuestion 
                  ? 'bg-peach' 
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-600 font-inter">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-coral bg-coral/10 text-coral'
                    : 'border-gray-200 hover:border-peach hover:bg-peach/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-inter">{option}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={nextQuestion}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className={`px-8 py-3 rounded-full font-poppins font-semibold transition-all ${
                selectedAnswers[currentQuestion] !== undefined
                  ? 'bg-gradient-to-r from-peach to-coral text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Quiz