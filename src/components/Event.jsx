import React from 'react'

export const Event = ({ data }) => {
  return (
    <div className='bg-gray-500 rounded-lg px-4 py-2'>
      <div className="flex items-center gap-4">
        <div className="">
          <img className='rounded-lg h-16 w-16' src={data.photo} alt="pic" />
        </div>
        <div className="">
          <h1 className='text-lg font-semibold'>{data.title}</h1>
          <h1 className='text-sm text-gray-400'>{data.description}</h1>
        </div>
      </div>
    </div>
  )
}
