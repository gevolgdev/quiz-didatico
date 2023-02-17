import React, { useState } from 'react'

const Index = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  const questions = [
    {
      question: "Qual é a capital do Brasil?",
      options: ["Rio de Janeiro", "Brasília", "São Paulo"],
      correctAnswer: "Brasília",
    },
    {
      question: "Quem pintou a Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Qual framework usamos na Gevolg",
      options: ["React.js", "Vue,js", "Angular.js"],
      correctAnswer: "React.js",
    },
  ];
  const question = questions[currentQuestion];

  const handleAnswerOptionClick = (answer) => {
    if (answer === question.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  

  return (
    <>
      {
        showScore ? (
          <div className="score-section">
            Você acertou {score} de {questions.length} perguntas.
          </div>
        ) : (
          <>
            <div><span>Pergunta {currentQuestion + 1}</span>/{questions.length}</div>
            <h1>{question.question}</h1>
            <div>
              {
                question.options.map((option) => (
                  <button onClick={() => handleAnswerOptionClick(option)}>{option}</button>
                ))
              }
            </div>
          </>
        )
      }
    </>
  )
}

export default Index