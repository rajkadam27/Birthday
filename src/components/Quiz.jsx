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
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-10 text-center">
            <div className="text-8xl mb-6">
              {score === questions.length ? '🏆' : score >= questions.length / 2 ? '🌟' : '💝'}
            </div>
            
            <h3 className="text-6xl font-display font-bold text-gray-900 mb-6">
              Score: {score}/{questions.length}
            </h3>
            
            <p className="text-3xl text-gray-800 mb-10 font-semibold">
              {score === questions.length 
                ? "Perfect! You know Shweta so well! 🎉" 
                : score >= questions.length / 2 
                ? "Great job! You're a wonderful friend! 😊"
                : "Every friendship is special in its own way! 💕"}
            </p>

            <div className="space-y-4 mb-10">
              {questions.map((q, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg text-left border-2 border-purple-200">
                  <p className="font-bold text-gray-900 text-xl mb-2">{q.question}</p>
                  <p className="text-gray-700 text-lg">{q.explanation}</p>
                </div>
              ))}
            </div>
            
            <button
              onClick={resetQuiz}
              className="px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-2xl rounded-full shadow-2xl hover:scale-110 transition-all"
            >
              🔄 Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display font-bold text-black mb-6 drop-shadow-lg">
            🎯 How Well Do You Know Shweta?
          </h2>
          <div className="flex justify-center items-center space-x-3 mb-4">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full transition-all ${
                  index === currentQuestion 
                    ? 'bg-yellow-400 scale-125' 
                    : index < currentQuestion 
                    ? 'bg-green-400' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <p className="text-2xl text-black font-bold drop-shadow">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-10"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-5 mb-10">
              {questions[currentQuestion].options.map((option, index) => (
                <button
  key={index}
  onClick={() => handleAnswerSelect(index)}
  style={{
    // BACKGROUND: Blue if selected, White if not
    backgroundColor: selectedAnswers[currentQuestion] === index 
      ? '#3b82f6' 
      : '#ffffff',
      
    // TEXT COLOR: White if selected (to show on blue), Dark Gray if not
    color: selectedAnswers[currentQuestion] === index 
      ? '#ffffff' 
      : '#1f2937',
      
    // BORDER: Darker Blue if selected, Light Gray if not
    borderColor: selectedAnswers[currentQuestion] === index 
      ? '#2563eb' 
      : '#e5e7eb'
  }}
  className="w-full p-6 text-left rounded-2xl border-4 transition-all font-bold text-2xl shadow-lg hover:scale-105"
>
  {option}
</button>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={nextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className={`px-16 py-6 rounded-full font-bold text-2xl transition-all ${
                  selectedAnswers[currentQuestion] !== undefined
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl hover:scale-110'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === questions.length - 1 ? '✨ See Results' : '➡️ Next Question'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Quiz