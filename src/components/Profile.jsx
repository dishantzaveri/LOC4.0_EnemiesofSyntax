import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className='bg-gray-700 shadow-xl rounded-xl flex py-8 px-12 gap-8 w-fit'>
      <img className='w-32 h-32' src="https://img.icons8.com/ios-glyphs/90/000000/user-male-circle.png"/>
      <div className="">
        <h1 className="text-3xl font-semibold">Hi, username!</h1>
        <h1 className="text-xl text-gray-400 my-1">Complete your profile first to get daily rewards!!</h1>
        <Link to='/profile/create'>
          <button className='bg-green-400 shadow-lg px-4 py-2 rounded-lg text-gray-800'>Complete Profile</button>
        </Link>
      </div>
    </div>
  )
}
