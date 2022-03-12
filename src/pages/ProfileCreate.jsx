import { useState } from 'react'

export const ProfileCreate = () => {
  const [email, setEmail] = useState('')
  const [values, setValues] = useState({})
  return (
    <div className="h-[82vh] flex justify-center items-center">
      <div className='w-[40vw] flex flex-col justify-center items-center gap-6'>
        <h1 className='text-4xl font-semibold'>Create Profile</h1>
        <input className='px-6 py-2 border border-gray-600 text-lg rounded-xl w-full' placeholder='Enter Username' type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <div class="px-2 py-2 border-green-400 border rounded-lg">
          <input className='accent-green-400 border-0 outline-0 ring-0 h-4 w-4 rounded' type="checkbox" id='check' />
          <label htmlFor="check">Cricket</label>
        </div>
        <button className='px-8 py-3 bg-green-400 shadow-xl hover:shadow-2xl rounded-xl'>Login</button>
      </div>
    </div>
  )
}
