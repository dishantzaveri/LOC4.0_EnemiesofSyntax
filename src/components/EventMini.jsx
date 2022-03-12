import { Link } from 'react-router-dom'
import { Event } from './Event'

const data = [
  {
    Title: 'Cricket',
    Desc: 'wbanabab'
  },
  {
    Title: 'Cricket',
    Desc: 'wbanabab'
  },
  {
    Title: 'Cricket',
    Desc: 'wbanabab'
  },
  {
    Title: 'Cricket',
    Desc: 'wbanabab'
  },
  {
    Title: 'Cricket',
    Desc: 'wbanabab'
  },
  {
    Title: 'Cricket',
    Desc: 'wbanabab'
  },
  {
    Title: 'Cricket',
    Desc: 'wbanabab'
  },
]

export const EventMini = () => {
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
        {data.map(sport => (<Event data={sport} />))}
      </div>
    </div>
  )
}