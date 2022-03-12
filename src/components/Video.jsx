import React from 'react'

export const Video = ({ data }) => {
  return (
    <div className='bg-gray-500 rounded-lg px-6 py-4'>
      <div className="flex gap-6">
        <img  className="h-20 w-28 rounded"
          src={`https://i.ytimg.com/vi/${
            data.link.split("/")[3]
          }/hqdefault.jpg`}
        />
        <div className="">
          <h1 className='text-2xl font-semibold'>{data.title}</h1>
          <h1>{data.desc}</h1>
        </div>
      </div>
    </div>
  )
}
