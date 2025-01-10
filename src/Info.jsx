import React from 'react'
import FooterButtons from './components/FooterButtons'
import PageBackground from './components/PageBackground'

const Info = () => {
  return (
    <>
    <PageBackground>
        <div className="w-[85%]  mx-auto ">
          <h2 className='title'>Personal info</h2>
          <p className='text-gray mb-7'>Please provide your name, email address and phone number</p>
        </div>
        <form action="" className='w-[85%]  mx-auto '>
          <div className="form-group">
            <div className="mb-1">
              <label className='text-deepBlue' htmlFor="name">Name</label>
              <p></p>
            </div>
            <input className='user-input' placeholder='e.g. Stephanie King' type="text" required />
          </div>
          <div className="form-group">
            <div className="mb-1">
              <label className='text-deepBlue' htmlFor="email">Email address</label>
              <p></p>
            </div>
            <input className='user-input' placeholder='stephanieking@lorem.com' type="email" required />
          </div>
          <div className="form-group">
            <div className="mb-1">
              <label className='text-deepBlue' htmlFor="phone">Phone number</label>
              <p></p>
            </div>
            <input className='user-input' placeholder='e.g +1 234 567 890' type="tel" required />
          </div>
        </form>
    </PageBackground>
    <FooterButtons  lightButtonText='' buttonText='Next Step' linkBack='' linkNext='./plan' style='bg-deepBlue'/>
    </>
  )
}

export default Info