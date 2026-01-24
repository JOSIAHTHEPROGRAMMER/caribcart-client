import React from 'react'

const Detail = ({ label, value }) => {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold capitalize text-gray-800">
        {value || '—'}
      </p>
    </div>
  )
}

export default Detail
