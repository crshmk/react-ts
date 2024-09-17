import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'

import { UsersContextType } from './types'

import useMessage from '@store/useMessage'

import fetchUsers from './fetchUsers'

const initUserContext: UsersContextType = {
  users: []
} 

const UsersContext = createContext(initUserContext)
const useUsers = () => useContext(UsersContext)

export const UsersProvider: React.FC<WithChildren> = ({ children }) => {
  const [users, setUsers] = useState([])
  const { showMessage } = useMessage()
  
  // @ts-ignore
  useEffect(fetchUsers(setUsers, showMessage), [])

  const ctx = { users }

  return (
    <UsersContext.Provider value={ctx}>
      {children}
    </UsersContext.Provider>
  )
}

export default useUsers
