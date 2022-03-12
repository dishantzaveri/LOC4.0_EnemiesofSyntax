import { Link, Outlet } from 'react-router-dom'
import { Event } from './Event'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const EventMini = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://dishant.pythonanywhere.com/links/listevents').then(res => setData(res.data))
  }, [])
  console.log(data);
  return (
    <div className='bg-gray-600 h-[500px] w-full px-6 pb-4 rounded-xl shadow-xl flex flex-col overflow-auto scroll-smooth no-scrollbar'>
      <div className="flex justify-between items-center w-full h-min sticky top-0 bg-gray-600 py-4">
        <h1 className="text-4xl">Events</h1>
        <Link className='text-blue-600 flex items-center' to='/events'>
          <h1>View more</h1>
          <span className='text-2xl ml-1'>&rarr;</span>
        </Link>
      </div>
      <div className='flex flex-col gap-4'>
        {data.map(sport => (
          <div className="" key={sport.id}>
            <Link to={`/events/${sport.id}`}>
              <Event data={sport} />
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  )
}