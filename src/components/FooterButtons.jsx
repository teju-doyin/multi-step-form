import React from 'react'
import { Link } from 'react-router-dom'
const FooterButtons = ({lightButtonText, buttonText, linkBack, linkNext}) => {
  return (
    <div className=' important w-full '>
        <div className=" bg-white absolute bottom-0 py-8 px-5 w-full flex justify-between items-center">
          <Link to={linkBack}>
            <button className='text-gray font-semibold'>{lightButtonText}</button>
          </Link>
          <Link to={linkNext}>
            <button className='bg-deepBlue rounded text-white px-3 py-2' >
              {buttonText}
            </button>
          </Link>
        </div>
    </div>
  )
}

export default FooterButtons