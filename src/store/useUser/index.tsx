import React, { createContext, useContext, useState } from 'react'

import { initUserContext, UserContextType as Ctx } from './types'

const UserContext = createContext<Ctx>(initUserContext)
const useUser = () => useContext(UserContext)

export const UserProvider: React.FC<WithChildren> = ({ children }) => {
  const [user, setUser] = useState({})
  const [isFetchingUser, setIsFetchingUser] = useState(false)

  const ctx: Ctx = { 
    isFetchingUser, 
    setIsFetchingUser, 
    setUser, 
    user 
  }

  return (
    <UserContext.Provider value={ctx}>
      {children}
    </UserContext.Provider>
  )
}

export default useUser
