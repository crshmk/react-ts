import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav.css'

import menuItems, { MenuItem } from './menuItems'

const makeLink = ({ route, label }: MenuItem) => 
  <li key={label}><NavLink to={route}>{label}</NavLink></li>

const menuLinks = menuItems.map(makeLink)

const Nav = () => (
  <nav>
    <ul>
      {menuLinks}
    </ul>
  </nav>
)

export default Nav
