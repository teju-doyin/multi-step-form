import React from 'react'

const PageBackground = ({children}) => {
  return (
    <section className='bg-[hsl(204, 35%, 92%)]  h-[22rem]'>
        <div className="bg-white w-[90%] mx-auto rounded-lg relative -top-8 py-8 back-shadow">
            {children}
        </div>
    </section>
  )
}

export default PageBackground