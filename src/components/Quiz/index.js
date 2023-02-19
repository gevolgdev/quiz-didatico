import React from 'react'

const index = ({...props}) => {
  return (
    <div className='flex flex-col items-center w-full px-6 mt-20'>
      <div className='flex flex-col w-[500px] items-center max-sm:w-full'>
        <h1 className='text-2xl text-white'>{props.question.question}</h1>
        <div className='flex flex-col w-full justify-center gap-2 mt-8'>
          {
            props.question.options.map((item, index) => 
              <button 
                key={index} 
                className='px-6 bg-gray-800 border border-white w-full h-14 rounded-lg font-semibold text-left text-white hover:bg-gray-700'
                onClick={() => props.handleAnswer(item)}
              >
                • {item}
              </button>
            )
          }
        </div>
        <p className='mt-12 text-gray-500'>{props.currentQuestion + 1}/{props.questions.length}</p>
      </div>
    </div>
  )
}

export default index