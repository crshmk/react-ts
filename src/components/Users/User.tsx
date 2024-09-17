import React from 'react'

import { User as UserType } from '@store/useUsers/types'

const User: React.FC<PropTypes> = ({ user }) => 
  <li>{user?.name}</li>

export default User

type PropTypes = {
  user: UserType
}