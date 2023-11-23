import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { ThemeContext } from '../Components/context/ThemeContextProvider'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen(true)
  }

  const handleCloseMenu = () => {
    setOpen(false)
  }

  return (
    <nav>
      <ul className='hidden lg:flex mx-auto max-w-4xl items-center justify-between gap-x-4 lg:px-8 px-4 sm:gap-0'>
        <li className='list-none cursor-pointer'>
          <Link to='/' className='dark:text-white text-2xl dark:hover:text-chetwode-blue-300 hover:text-chetwode-blue-600'>Home</Link>
        </li>
        <li className='list-none cursor-pointer'>
          <Link to='/contact' className='dark:text-white text-2xl dark:hover:text-chetwode-blue-300 hover:text-chetwode-blue-600'>Contacto</Link>
        </li>
        <li className='list-none cursor-pointer'>
          <Link to='/favs' className='dark:text-white text-2xl dark:hover:text-chetwode-blue-300 hover:text-chetwode-blue-600'>Favoritos</Link>
        </li>
        <li className='list-none cursor-pointer text-2xl' onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </li>
      </ul>
      <div className='lg:hidden flex items-center justify-between'>
        <IconButton
          edge='end'
          color='inherit'
          aria-label='menu'
          onClick={handleOpenMenu}
        >
          <MenuIcon className='dark:text-white'/>
        </IconButton>
        <Drawer
          anchor='right'
          open={open}
          onClose={handleCloseMenu}
          PaperProps={{ style: { width: '40%', paddingRight: '20px' } }}
        >
          {/* Menú versión mobile */}
          <List>
            <ListItem button component={Link} to="/" onClick={handleCloseMenu}>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={handleCloseMenu}>
              <ListItemText primary='Contacto' />
            </ListItem>
            <ListItem button component={Link} to="/favs" onClick={handleCloseMenu}>
              <ListItemText primary='Favoritos' />
            </ListItem>
            <ListItem button onClick={toggleTheme}>
              <ListItemText primary={theme === 'light' ? '🌙' : '☀️'} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </nav>
  )
}

export default Navbar
