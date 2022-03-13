import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const register = () => {
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://dishant.pythonanywhere.com/links/register/", requestOptions)
      .then(response => response.text())
      .then(result => navigate('/login'))
      .catch(error => console.log('error', error));
  }
  return (
    <div className="h-[82vh] flex justify-center items-center">
      <div className='bg-teal-900 bg-opacity-60 shadow-2xl pt-8 pb-8 w-[40vw] flex flex-col justify-center items-center gap-6'>
        <h1 className='text-4xl font-semibold'>Register</h1>
        <input className='px-6 py-2 border border-gray-600 text-lg rounded-xl w-[60%]  text-gray-900' placeholder='Enter Username' type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <input className='px-6 py-2 border border-gray-600 text-lg rounded-xl w-[60%]  text-gray-900' placeholder='Enter Email' type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <div className='w-[60%]'>
          <input className='px-6 py-2 border border-gray-600 text-lg rounded-xl w-full text-gray-900' placeholder='Enter Password' type={showPassword ? "text" : 'password'} value={password} onChange={e => setPassword(e.target.value)} /> 
          {showPassword ? <VisibilityOffIcon onClick={e => setShowPassword(!showPassword)} className='ml-[-40px] text-gray-800' /> : <VisibilityIcon onClick={e => setShowPassword(!showPassword)} className='ml-[-40px] text-gray-800' />}
        </div>
        <button onClick={() => register()} className='px-8 py-3 bg-green-400 shadow-xl hover:shadow-2xl rounded-xl'>Register</button>
      </div>
    </div>
  )
}
