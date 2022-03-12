import React from 'react'

export const Video = ({ data }) => {
  return (
    <div className='bg-gray-500 rounded-lg px-6 py-4'>
      <div className="flex gap-6">
        <div className="bg-red-600 h-20 w-20 rounded"></div>
        <div className="">
          <h1 className='text-2xl font-semibold'>{data.title}</h1>
          <h1>{data.desc}</h1>
        </div>
      </div>
    </div>
  )
}
