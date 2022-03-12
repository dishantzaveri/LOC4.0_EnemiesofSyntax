import React from 'react'
import { Profile } from '../components/Profile'
import { Rewards } from '../components/Rewards'
import { History } from '../components/History'

export const Dashboard = () => {
  return (
    <div className='flex flex-col px-32 py-12 gap-12'>
      <div className='flex flex-row justify-center'>
        <Profile />
        <div className='w-[300px] ml-[40px] h-[100px] '>
          <History />        
        </div>
      </div>
      <Rewards />
    </div>
  )
}
