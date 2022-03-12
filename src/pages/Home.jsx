import React from 'react'
import { Link } from 'react-router-dom'
import { EventMini } from '../components/EventMini'
import { Video } from '../components/Video'

const data =[
  {
    title: 'Title',
    desc: 'sgwrnwrgwbwnwewbws'
  }, 
  {
    title: 'Title',
    desc: 'sgwrnwrgwbwnwewbws'
  }, 
  {
    title: 'Title',
    desc: 'sgwrnwrgwbwnwewbws'
  }, 
  {
    title: 'Title',
    desc: 'sgwrnwrgwbwnwewbws'
  }, 
  {
    title: 'Title',
    desc: 'sgwrnwrgwbwnwewbws'
  }, 
]

export const Home = () => {
  return (
    <div className='grid grid-cols-12 gap-12 px-32 py-12'>
      <div className='col-span-8'>
        <div className="bg-gray-600 py-6 px-8 h-min rounded-xl shadow-xl">
          <div className="flex justify-between items-center w-full h-min pb-4">
            <h1 className="text-4xl">Videos</h1>
            <Link className='text-blue-600 flex items-center' to='/videos '>
              <h1>View more</h1>
              <span className='text-2xl ml-1'>&rarr;</span>
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            {data.map(sport => (<Video data={sport} />))}
          </div>
        </div>
      </div>
      <div className='col-span-4'>
        <EventMini />
      </div>
    </div>
  )
}
