import React from 'react'
import { Link } from 'react-router-dom';

export const EventCard = ({ data }) => {
  return (
    <Link to={`/events/${data.id}`} className='max-w-[200px] pb-5 bg-emerald-900 shadow-2xl'>
      <img src={data.photo ? data.photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYutGxgHSh2xZJQ9wD5bu-G4tlSE-HpCJ1Q&usqp=CAU"} className='object-cover h-[200px] max-w-[200px] ' />
      <div className='px-5 py-3'>
        <h1>{data.title}</h1>
        <h1>Location : {data.location}</h1>
        <h1>Timings : 4pm</h1>
        <h1>Phone: {data.phone}</h1>
        <h2>Description : {data.description}</h2>
      </div>
    </Link>
  )
}
