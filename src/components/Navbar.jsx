import { Link } from 'react-router-dom'
import logo from '../utils/logo/logosm.png'

export const NavBar = () => {
  return (
    <div className='flex justify-center items-center h-16 gap-24 bg-[#00CBA9]'>
      <div className='w-36'>
        <img src={logo} alt="Sportify" />
      </div>
      <Link to='/' className='font-bold text-xl'>Home</Link>
      <Link to='/login' className='font-bold text-xl'>Login</Link>
      <Link to='/register' className='font-bold text-xl'>Register</Link>
      <Link to='/dashboard' className='font-bold text-xl'>Dashboard</Link>
    </div>
  )
}