import React from 'react'

const PageBackground = ({children}) => {
  return (
    <section className='zzB'>
        <div className="bg-white w-[90%] mx-auto rounded-lg relative -top-10 py-8 back-shadow">
            {children}
        </div>
    </section>
  )
}

export default PageBackground