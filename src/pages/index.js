import React, { useState } from 'react'
// questions
import { questions } from '../components/Quiz/questions'
// components
import Finally from '../components/Finally'
import Quiz from '../components/Quiz'

const Index = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [wrongAnswer, setWrongAnswer] = useState([])

  const question = questions[currentQuestion]

  function wrongAnswerQuestion(answer) {
    const { correctAnswer: trueAnswer} = question
    setWrongAnswer(prevState => prevState.concat({wrongOne: answer, trueOne: trueAnswer}))
    console.log(answer, trueAnswer)

  }

  function handleAnswer(answer) {
    if (answer === question.correctAnswer) {
      let newPoint = score + 1
      setScore(newPoint)
    } else {
      wrongAnswerQuestion(answer)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <>
      <div className="pt-10 h-screen bg-gray-900">
        <h1 className='text-center text-9xl text-white max-sm:text-7xl'>Quiz</h1>
        {
          showScore ? 
          (
            <Finally
              score={score}
              questions={questions}
              wrongAnswer={wrongAnswer}
            />
          ) :
          (
            <Quiz
              question={question}
              questions={questions}
              handleAnswer={handleAnswer}
              currentQuestion={currentQuestion}
            />
          )
        }
      </div>
    </>
  )
}

export default Index
