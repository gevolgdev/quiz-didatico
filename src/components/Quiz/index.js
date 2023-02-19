  import React, { useState } from 'react'

  const Index = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [wrongAnswer, setWrongAnswer] = useState([])

    const questions = [
      {
        question: 'Em qual ramo atuo?',
        options: ['Front-end', 'Back-end', 'Data Base'],
        correctAnswer: 'Front-end',
      },
      {
        question: 'Qual tecnologia eu utilizo?',
        options: ['Angular.js', 'React.js', 'Vue.js', 'Wix'],
        correctAnswer: 'React.js',
      },
      {
        question: 'Eu sou empresário, funcionário ou freelancer?',
        options: ['Empresário', 'funcionário', 'freelancer'],
        correctAnswer: 'Empresário',
      }
    ]

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
        {
          showScore ? 
          (
            <div className='flex flex-col items-center w-full py-28 px-6 mt-4'>
              <h1 className='text-2xl text-white'>Parábens, você chegou ao fim!</h1>
              <p className='text-xl mt-4 text-gray-300'>Você acertou <span className='text-white font-semibold'>{score}</span> perguntas de {questions.length}</p>
              {
                score === questions.length || (
                  <div className='bg-gray-800 border border-white w-[500px] max-sm:w-full mt-20 px-3 py-4'>
                    <p className='flex flex-col gap-4'>
                      {wrongAnswer.map((item, index) => 
                        <span key={index} className='text-white'>
                          ❌: {item.wrongOne}<br/>
                          ✅: {item.trueOne}
                        </span>
                      )}
                    </p>
                  </div>
                )
              }
            </div>
          ) :
          (
            <div className='flex flex-col items-center w-full px-6 mt-20'>
              <div className='flex flex-col w-[500px] items-center max-sm:w-full'>
                <h1 className='text-2xl text-white'>{question.question}</h1>
                <div className='flex flex-col w-full justify-center gap-2 mt-8'>
                  {
                    question.options.map((item, index) => 
                      <button 
                        key={index} 
                        className='px-6 bg-gray-800 border border-white w-full h-14 rounded-lg font-semibold text-left text-white hover:bg-gray-700'
                        onClick={() => handleAnswer(item)}
                      >
                        • {item}
                      </button>
                    )
                  }
                </div>
                <p className='mt-12 text-gray-500'>{currentQuestion + 1}/{questions.length}</p>
              </div>
            </div>
          )
        }
      </>
    )
  }

  export default Index