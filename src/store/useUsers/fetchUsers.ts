import { usersHttp } from '../../http'
import { isPresent } from 'ramjam'

import { FetchUsersType } from './types'

const errorMessage = 'Error fetching users'

const getRoute = (userId: string): string => 
    isPresent(userId) ? `/${userId}` : '/'

const fetchUsers: FetchUsersType = (setUsers, showMessage) => 
  (userId: string) => {
    const route = getRoute(userId)

    usersHttp.get(route)
      // @ts-ignore
      .then(setUsers)
      .catch(() => showMessage('error', errorMessage))
  }

export default fetchUsers