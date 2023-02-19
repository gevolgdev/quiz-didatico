import React, { useState } from "react"
// components
import Quiz from '../components/Quiz'

const IndexPage = () => {
  return (
    <div className="pt-10 h-screen bg-gray-900">
      <h1 className='text-center text-9xl text-white max-sm:text-7xl'>Quiz</h1>
      <Quiz/>
    </div>
  )
}

export default IndexPage
