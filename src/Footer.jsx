import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center py-5 w-[80%] mx-auto'>
        <Link 
            className=' text-gray '
            to={path}
        >
            {children}
        </Link>
        <Link 
            className='bg-deepBlue text-lightBlue rounded-md px-'
            to={path}
        >
            {children}
        </Link>
        
    </footer>
  )
}

export default Footer