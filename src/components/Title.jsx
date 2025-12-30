import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className='flex flex-col items-center mb-8'>

      <h3 className='
        text-2xl font-semibold 
        mb-2 text-gray-800'>{title}</h3>

      <p
        className="
    text-slate-600
    max-w-[500px]
    mx-auto
    px-4
    text-center
    sm:text-left
    sm:px-0
  "
      >
        {desc}
      </p>


    </div>
  )
}

export default Title