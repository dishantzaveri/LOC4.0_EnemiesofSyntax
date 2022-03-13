import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EventCard } from '../components/EventCard'

export const Events = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://dishant.pythonanywhere.com/links/listevents').then(res => setData(res.data))
  }, [])
  return (
    <div className='flex flex-col px-32 py-12' >
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-semibold mb-8">Events</h1>
        <Link to='/createevent'>
          <button className='px-8 py-3 bg-green-400 shadow-xl hover:shadow-2xl rounded-xl text-gray-800'>Host Event</button>
        </Link> 
      </div>
      <div className='flex flex-row flex-wrap gap-16'> 
        {
        data.map((data) => (
          <EventCard data={data} />
        ))
        }
      </div>
    </div>
  )
}
