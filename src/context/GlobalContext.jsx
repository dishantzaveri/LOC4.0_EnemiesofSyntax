import {createContext, useState} from 'react'

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  const [username, setUsername] = useState('')
  const values = {token, setToken, username, setUsername}

  return(
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
