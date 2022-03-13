import { Link } from 'react-router-dom'
import { useContext } from 'react'
import logo from '../utils/logo/logosm.png'
import { GlobalContext } from '../context/GlobalContext'


export const NavBar = () => {
  const{ setToken, setUsername, token } = useContext(GlobalContext)
  const Logout = () => {
    setToken('')
    setUsername('')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  }
  return (
    <div className='flex justify-between items-center h-16 gap-24 bg-[#00CBA9] px-32'>
      <div className='w-36'>
        <Link to='/'>
          <img src={logo} alt="Sportify" />
        </Link>
      </div>
      {token ? (
        <div className="flex items-center gap-16">
          <Link to='/videos/gusv3BsHd3g' className='font-bold text-xl'>Videos</Link>
          <Link to='/events' className='font-bold text-xl'>Events</Link>
          <Link to='/ml' className='font-bold text-xl'>Pose Detection</Link>
          <Link to='/dashboard' className='font-bold text-xl'>Dashboard</Link>
          <Link to='/' className='font-bold text-xl text-red-600' onClick={() => Logout()}>Logout</Link>
        </div>
      ) : (
        <div className="flex items-center gap-16">
          <Link to='/login' className='font-bold text-xl'>Login</Link>
          <Link to='/register' className='font-bold text-xl'>Register</Link>
        </div>
      )}
    </div>
  )
}