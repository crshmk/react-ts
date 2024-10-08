import { ShowMessageType } from '../useMessage/types'

type Geo = {
  lat: string
  lng: string
}

type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export type UsersContextType = {
  users: User[]
}

export type SetUserType = React.Dispatch<React.SetStateAction<User[]>>

export type FetchUsersType = (setUsers: SetUserType, showMessage: ShowMessageType) => void
