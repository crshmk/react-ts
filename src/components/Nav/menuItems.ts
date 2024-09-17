export interface MenuItem {
  route: string, 
  label: string 
}

const menuItems: MenuItem[] = [
  { route: '/', label: 'Home' },
  { route: '/dashboard', label: 'Dashboard' },
  { route: '/users', label: 'Users' },
]

export default menuItems