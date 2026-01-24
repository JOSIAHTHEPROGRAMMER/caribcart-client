import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const SliderButton = ({ side = 'left', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        side === 'left' ? 'left-2' : 'right-2'
      } top-1/2 -translate-y-1/2
      bg-white/80 hover:bg-white
      p-2 rounded-full shadow-md
      border border-sky-300
      transition`}
    >
      {side === 'left' ? (
        <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
      ) : (
        <ChevronRightIcon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
}

export default SliderButton
