import { Link } from 'react-router-dom'
import logo from '../utils/logo/logosm.png'

export const NavBar = () => {
  return (
    <div className='flex justify-center items-center h-16 gap-24 bg-black'>
      <div className='w-36'>
        <img src={logo} alt="Sportify" />
      </div>
      <Link to='/'>home</Link>
      <Link to='/login'>login</Link>
      <Link to='/register'>register</Link>
      <Link to='/dashboard'>dashboard</Link>
    </div>
  )
}