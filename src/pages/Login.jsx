import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="h-[82vh] flex justify-center items-center">
      <div className='w-[40vw] flex flex-col justify-center items-center gap-6'>
        <h1 className='text-4xl font-semibold'>Login</h1>
        <input className='px-6 py-2 border border-gray-600 text-lg rounded-xl w-[60%]' placeholder='Enter Username' type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <div className='w-[60%]'>
          <input className='px-6 py-2 border border-gray-600 text-lg rounded-xl w-full' placeholder='Enter Password' type={showPassword ? "text" : 'password'} value={password} onChange={e => setPassword(e.target.value)} /> 
          {showPassword ? <VisibilityOffIcon onClick={e => setShowPassword(!showPassword)} className='ml-[-40px] text-gray-800' /> : <VisibilityIcon onClick={e => setShowPassword(!showPassword)} className='ml-[-40px] text-gray-800' />}
        </div>
        <button className='px-8 py-3 bg-green-400 shadow-xl hover:shadow-2xl rounded-xl'>Login</button>
      </div>
    </div>
  )
}