import React from 'react'

const colorVariants = {
  sky: 'bg-sky-50 text-sky-600',
  green: 'bg-green-50 text-green-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  amber: 'bg-amber-50 text-amber-600',
  red: 'bg-red-50 text-red-600',
}

const Badge = ({ text, icon: Icon, color = 'sky' }) => {
  return (
    <span
      className={`flex items-center text-xs px-2 py-1 rounded-md ${
        colorVariants[color] || colorVariants.sky
      }`}
    >
      {Icon && <Icon className="w-4 h-4 mr-1" />}
      {text}
    </span>
  )
}

export default Badge
