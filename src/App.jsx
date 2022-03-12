import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { NavBar } from './components/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'

const App = () => {
  return (
    <div className='bg-gray-900 text-gray-200 min-h-screen'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
