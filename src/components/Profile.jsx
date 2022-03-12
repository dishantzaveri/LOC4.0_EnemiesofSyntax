import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

export const Profile = () => {
  const { username } = useContext(GlobalContext)
  console.log(username);
  return (
    <div className='bg-gray-700 shadow-xl rounded-xl flex flex-col items-center py-8 px-12 gap-8 w-fit'>
      <img className='w-48 h-48' src="https://img.icons8.com/ios-glyphs/90/000000/user-male-circle.png" alt='profile'/>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">Hi, {username}!</h1>
        <h1 className="text-xl text-gray-400 my-1">Complete your profile first to get daily rewards!!</h1>
        <Link to='/profile/edit'>
          <button className='bg-green-400 shadow-lg px-4 py-2 rounded-lg text-gray-800 mt-4'>Complete Profile</button>
        </Link>
      </div>
    </div>
  )
}
