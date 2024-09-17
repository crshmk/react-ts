import { lazy } from 'react'

import makeRoute from './makeRoute'

import { RouteInterface } from './types'

const Home = lazy(() => import('@components/Home'))
const Login = lazy(() => import('@components/Login'))
const Dashboard = lazy(() => import('@components/Dashboard'))
const Users = lazy(() => import('@components/Users'))

const routes: RouteInterface[] = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/dashboard',
    Component: Dashboard,
    isProtected: true
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/users',
    Component: Users
  }
]

export default routes.map(makeRoute)