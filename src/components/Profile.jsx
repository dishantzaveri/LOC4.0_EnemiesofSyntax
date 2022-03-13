import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Profile = () => {
  const navigate = useNavigate()
  const { username, token } = useContext(GlobalContext)
  const [userName, setUserName] = useState(username || localStorage.getItem('username'))
  const [data, setData] = useState({})
  const getProfile = () => {
    let config = {
      method: 'get',
      header: {
        "Authorization": "Token " + token,
      },
      url: `https://dishant.pythonanywhere.com/links/retrieveprofile/${userName}`
    }
    axios(config).then(res => setData(res.data))
  }
  const BMI = (x, y) => {
    return x*10000/(y*y)
  }
  useEffect(() => {
    getProfile()
  }, [])
  console.log(userName);
  return (
    <div className='bg-gray-700 shadow-xl rounded-xl flex flex-col items-center py-12 px-12 gap-8 w-[700px]'>
      {
        data ? 
        (
          <div className='flex flex-col justify-center items-center gap-4 w-[70%]'>
            <img className='w-48 h-48 rounded-full' src={data.photo ? data.photo : "https://img.icons8.com/ios-glyphs/90/000000/user-male-circle.png"} alt='profile'/>
            <h1 className="text-3xl font-semibold uppercase">{data.username}</h1>
            <div className="grid grid-cols-2 w-full">
              <div className="flex flex-col gap-4 text-xl">
                <h1 className=''>Phone: {data.phone}</h1>
                <h1 className=''>Height: {data.height}cm</h1>
                <h1 className=''>BMI: {BMI(data.weight, data.height)}</h1>
              </div>
              <div className="flex flex-col gap-4 text-xl">
                <h1 className=''>Age: {data.age}</h1>
                <h1 className=''>Weight: {data.weight}kg</h1>
                <h1 className=''>Interest: {data.sports}</h1>
              </div>
            </div>
            <button onClick={() => navigate('/profile/edit')} className='px-8 py-3 bg-green-400 shadow-xl hover:shadow-2xl rounded-xl'>Edit</button>
          </div>
        ) :
        (
          <div>
            <img className='w-48 h-48 rounded-full' src="https://img.icons8.com/ios-glyphs/90/000000/user-male-circle.png" alt='profile'/>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-semibold">Hi, {userName}!</h1>
              <h1 className="text-xl text-gray-400 my-1">Complete your profile first to get daily rewards!!</h1>
              <Link to='/profile/edit'>
                <button onCLick={() => navigate('/profile/create')} className='bg-green-400 shadow-lg px-4 py-2 rounded-lg text-gray-800 mt-4'>Complete Profile</button>
              </Link>
            </div>
          </div>
        )}
    </div>
  )
}
