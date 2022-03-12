import React from 'react'

export const Event = ({ data }) => {
  return (
    <div className='bg-gray-500 rounded-lg px-4 py-2'>
      <div className="flex gap-4">
        <div className="bg-red-600 h-16 w-16 rounded">

        </div>
        <div className="">
          <h1 className='text-xl font-semibold'>{data.Title}</h1>
          <h1>{data.Desc}</h1>
        </div>
      </div>
    </div>
  )
}
