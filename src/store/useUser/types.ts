interface User {
  id?: number
  name?: string
  email?: string
}

export interface UserContextType {
  user: User
  setUser: StateSetter<User>
  isFetchingUser: boolean
  setIsFetchingUser: StateSetter<boolean>
}

const emptyUser: User = {} 
export const initUserContext: UserContextType = {
  user: emptyUser,
  setUser: () => {},
  isFetchingUser: false,
  setIsFetchingUser: () => {}
}
