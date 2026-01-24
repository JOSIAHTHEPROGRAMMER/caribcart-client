import React from 'react'

const Metric = ({ icon: Icon, value, label }) => {
  return (
    <div className="text-center">
      {Icon && (
        <Icon className="mx-auto w-5 h-5 text-gray-400 mb-1" />
      )}

      <p className="font-semibold text-gray-800">
        {typeof value === 'number'
          ? value.toLocaleString()
          : value}
      </p>

      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}

export default Metric
