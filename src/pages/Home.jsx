import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { EventMini } from '../components/EventMini'
import { Video } from '../components/Video'

export const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://dishant.pythonanywhere.com/links/listallvideos').then(res => {
      setData(res.data)
      console.log(res.data);
    })
  }, [])
  return (
    <div className='grid grid-cols-12 gap-12 px-32 py-12'>
      <div className='col-span-8'>
        <div className="bg-gray-600 py-6 px-8 h-min rounded-xl shadow-xl">
          <div className="flex justify-between items-center w-full h-min pb-4">
            <h1 className="text-4xl">Videos</h1>
            <Link className='text-blue-600 flex items-center' to={`/videos/${data[0]?.link.split("/")[3]}`}>
              <h1>View more</h1>
              <span className='text-2xl ml-1'>&rarr;</span>
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            {data.map(sport => (
              <Link to={`/videos/${sport.link.split("/")[3]}`}>
                <Video data={sport} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='col-span-4'>
        <EventMini />
      </div>
    </div>
  )
}
