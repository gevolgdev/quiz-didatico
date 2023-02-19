import React from 'react'

const Index = ({score, questions, wrongAnswer}) => {
  return (
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
  )
}

export default Index