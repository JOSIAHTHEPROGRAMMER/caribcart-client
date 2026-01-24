import React from 'react'

const InfoCard = ({ title, children, single = false }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>

      <div
        className={`p-4 ${
          single
            ? ''
            : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default InfoCard
