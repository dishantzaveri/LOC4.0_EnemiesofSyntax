import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { EventMini } from '../components/EventMini'
import { Video } from '../components/Video'
import sports from "../assets/sports.png";
export const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://dishant.pythonanywhere.com/links/listallvideos').then(res => {
      setData(res.data.slice(0,6))
      console.log(res.data);
    })
  }, [])
  return (
  <div>
    <div className='h-[100vh] relation'>
      <div className='pl-32 flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-3xl'>Make Yourself</h1>
          <h1 className='text-4xl font-bold'>A Champion</h1>
          <h2 className='mt-10 italic'>Complete Activities and Redeem Rewards</h2>
          <h2 className='italic'>Participate in an Event and Build your own team!</h2>
          <h2 className='italic'>Hurry!! Register Now</h2>
        </div>
        <img src={sports} />
      </div>
    <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,160L40,176C80,192,160,224,240,245.3C320,267,400,277,480,277.3C560,277,640,267,720,218.7C800,171,880,85,960,96C1040,107,1120,213,1200,224C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

    </div>
    <div className='grid grid-cols-12 gap-12 px-32 py-12'>
      <div className='col-span-8'>
        <div className="bg-emerald-800 py-6 px-8 h-min shadow-2xl">
          <div className="flex justify-between items-center w-full h-min pb-4">
            <h1 className="text-4xl font-bold">Videos</h1>
            <Link className='text-emerald-600 flex items-center' to={`/videos/${data[0]?.link.split("/")[3]}`}>
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
  </div>
  )
}
