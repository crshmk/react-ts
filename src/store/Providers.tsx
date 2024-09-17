import React from 'react'

import { MessageProvider } from './useMessage'
import { UserProvider } from './useUser'
import { UsersProvider } from './useUsers'

const Providers: React.FC<WithChildren> = ({ children }) => (
  <>
  <MessageProvider>
  <UserProvider>
  <UsersProvider>
  {children}
  </UsersProvider>
  </UserProvider>
  </MessageProvider>
  </>
)

export default Providers