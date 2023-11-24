import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 dark:bg-purple-900 bg-custom-pink'>
      <Link to='/' className='text-xl font-bold dark:text-white'>
            DH - Odonto
          </Link>
      <div className='flex-grow max-lg:hidden'>
        <Navbar />
      </div>
      <div className='lg:hidden'>
        <Navbar />
      </div>
    </header>
  )
}

export default Header