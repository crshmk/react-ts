import React from 'react'
import { Routes } from 'react-router-dom'

import routes from './routes'

const Route = () => (
  <Routes>
    {routes as JSX.Element[]}
  </Routes>  
)

export default Route
