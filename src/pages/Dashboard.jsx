import React from 'react'
import { Profile } from '../components/Profile'
import { Rewards } from '../components/Rewards'
import { History } from '../components/History'
import { Analysis } from '../components/Analysis'

export const Dashboard = () => {
  return (
    <div className='flex flex-col px-32 py-12 gap-12'>
      <div className="flex justify-between items-start">
        <Profile />
        <Analysis />
      </div>
      <Rewards />
      <History />   
    </div>
  )
}
