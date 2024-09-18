type User = {
  id: number
  name: string
  email: string
}

type UserState = Partial<User>

export type UserContextType = {
  user: UserState
  setUser: StateSetter<UserState>
  isFetchingUser: boolean
  setIsFetchingUser: StateSetter<boolean>
}

export const initUserContext: UserContextType = {
  user: {},
  setUser: () => {},
  isFetchingUser: false,
  setIsFetchingUser: () => {}
}
