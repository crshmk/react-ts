import React from 'react'

import { MainProcessProvider } from './useMainProcess'
import { MessageProvider } from './useMessage'
import { UserProvider } from './useUser'

const Providers: React.FC<WithChildren> = ({ children }) => (
  <>
  <MainProcessProvider>
  <MessageProvider>
  <UserProvider>
  {children}
  </UserProvider>
  </MessageProvider>
  </MainProcessProvider>
  </>
)

export default Providers