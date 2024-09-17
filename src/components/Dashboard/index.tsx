import React from 'react'

import useUser from '@store/useUser'

const Dashboard = () => {
  const { user } = useUser()

  return <p>Welcome, {user.name}</p>
}
 
export default Dashboard