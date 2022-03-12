import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='flex justify-center items-center h-16 gap-24 bg-gray-500'>
      <Link to='/'>home</Link>
      <Link to='/login'>login</Link>
      <Link to='/register'>register</Link>
      <Link to='/profile'>profile</Link>
    </div>
  )
}