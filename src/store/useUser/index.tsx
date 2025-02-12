import React, { createContext, useContext, useState } from 'react'

const initUserContext: UserContext = {
  user: {},
  setUser: () => {},
  isFetchingUser: false,
  setIsFetchingUser: () => {}
} 
const UserContext = createContext<UserContext>(initUserContext)
const useUser = () => useContext(UserContext)

export const UserProvider: React.FC<WithChildren> = ({ children }) => {
  const [user, setUser] = useState({})
  const [isFetchingUser, setIsFetchingUser] = useState(false)

  const ctx: UserContext = { 
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


