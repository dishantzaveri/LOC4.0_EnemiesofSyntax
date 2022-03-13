import React from 'react'
import { SimpleMap } from '../components/SimpleMap'

export const Events = () => {
  const data = [1,2,3,4,5,6]
  return (
    <div className='flex flex-row' >
      <h1>Events</h1>
      <div className='flex flex-row w-[1000px] flex-wrap'>      
        {
        data.map(() => (
          <div className='m-5 pb-5 bg-gray-700 rounded-lg'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYutGxgHSh2xZJQ9wD5bu-G4tlSE-HpCJ1Q&usqp=CAU" className='w-[200px] h-[200px]' />
            <div className='pl-5 pt-3'>
              <h1>Football Event</h1>
              <h1>Location : Andheri</h1>
              <h1>Timings : 4pm</h1>
              <h1>Phone:12312321</h1>
              <h2>Description : fsdf</h2>
            </div>
          </div>
        ))
      }
      </div>
      <div className='mr-10 mt-5'>
      <SimpleMap />

      </div>
    </div>
  )
}
