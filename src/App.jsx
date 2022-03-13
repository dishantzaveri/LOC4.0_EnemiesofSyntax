import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { NavBar } from './components/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Register } from './pages/Register'
import { Events } from './pages/Events'
import { ProfileEdit } from './pages/ProfileEdit'
import Videos from './pages/Videos'
import { Event } from './pages/EventPage'
import { CreateEvent } from './pages/CreateEvent'
import { ProfileCreate } from './pages/ProfileCreate'
import ML from './pages/ML'


const App = () => {
  return (
    <div className='bg-gray-900 text-gray-200 min-h-screen'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/events' element={<Events />} />
          <Route path='/createevent' element={<CreateEvent />} />
          <Route path='/events/:eventId' element={<Event />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile/edit' element={<ProfileEdit />} />
          <Route path='/profile/create' element={<ProfileCreate />} />
          <Route path='/videos/:videoId' element={<Videos />} />
          <Route path='/ml' element={<ML />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
