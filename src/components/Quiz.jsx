import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Quiz = ({ onPerfectScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

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
      <div className="max-w-2xl mx-auto text-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-8xl mb-6">
            {score === questions.length ? '🏆' : score >= questions.length / 2 ? '🌟' : '💝'}
          </div>
          
          <h3 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Score: {score}/{questions.length}
          </h3>
          
          <p className="text-xl text-gray-700 mb-8">
            {score === questions.length 
              ? "Perfect! You know Shweta so well! 🎉" 
              : score >= questions.length / 2 
              ? "Great job! You're a wonderful friend! 😊"
              : "Every friendship is special in its own way! 💕"}
          </p>

          <div className="space-y-4 mb-8">
            {questions.map((q, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-left">
                <p className="font-bold text-gray-900 mb-2">{q.question}</p>
                <p className="text-gray-700">{q.explanation}</p>
              </div>
            ))}
          </div>
          
          <button
            onClick={resetQuiz}
            className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all"
          >
            🔄 Take Quiz Again
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
          🎯 How Well Do You Know Shweta?
        </h2>
        <div className="flex justify-center items-center space-x-3 mb-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentQuestion 
                  ? 'bg-purple-500 scale-125' 
                  : index < currentQuestion 
                  ? 'bg-green-500' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-xl text-gray-700 font-bold">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-5 text-left rounded-xl border-4 transition-all font-bold text-lg ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-purple-500 bg-purple-100 text-purple-700 scale-105'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={nextQuestion}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className={`px-12 py-5 rounded-full font-bold text-xl transition-all ${
                selectedAnswers[currentQuestion] !== undefined
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-purple-500/50 hover:scale-110'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? '✨ See Results' : '➡️ Next Question'}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Quiz