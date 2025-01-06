import React from 'react'

const FooterButtons = ({lightButtonText, buttonText}) => {
  return (
    <div className='bg-white absolute bottom-8 right-4'>
        <button>{lightButtonText}</button>
        <button className='bg-deepBlue rounded text-white px-3 py-2' >{buttonText}</button>
    </div>
  )
}

export default FooterButtons