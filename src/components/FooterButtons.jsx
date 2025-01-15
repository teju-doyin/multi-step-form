import React from 'react'
import { Link } from 'react-router-dom'
const FooterButtons = ({lightButtonText, buttonText, linkBack, linkNext, style, handleNext}) => {
  return (
    <div className=' important w-full '>
        <div className=" bg-white absolute bottom-0 py-4 px-5 w-full flex justify-between items-center">
          <Link 
            to={linkBack}>
            <button 
              className='text-gray font-semibold'>
                {lightButtonText}
            </button>
          </Link>
          <Link 
            to={linkNext}>
            <button  
              onClick={handleNext}
              className={` rounded text-white px-3 py-2 w-[7rem] ${style}`} >
              {buttonText}
            </button>
          </Link>
        </div>
    </div>
  )
}

export default FooterButtons