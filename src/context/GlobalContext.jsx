import {createContext, useState} from 'react'

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const values = {}

  return(
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
