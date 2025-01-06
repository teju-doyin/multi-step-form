import React from 'react'
import FooterButtons from './components/FooterButtons'

const Info = () => {
  return (
    <section className='bg-lightBlue  h-[22rem]'>
      <div className="bg-white w-[90%] mx-auto rounded-lg relative -top-8 ">
        <div className="">
          <h2 className='text-2xl text-deepBlue font-semibold'>Personal info</h2>
          <p>Please provide your name, email address and phone number</p>
        </div>
        <form action="" className=''>
          <div className="form-group">
            <div className="|">
              <label htmlFor="name">Name</label>
              <p></p>
            </div>
            <input placeholder='e.g. Stephanie King' type="text" required />
          </div>
          <div className="form-group">
            <div className="">
              <label htmlFor="email">Email address</label>
              <p></p>
            </div>
            <input placeholder='stephanieking@lorem.com' type="email" required />
          </div>
          <div className="form-group">
            <div className="">
              <label htmlFor="phone">Phone number</label>
              <p></p>
            </div>
            <input placeholder='e.g +1 234 567 890' type="tel" required />
          </div>
        </form>
      </div>
      <FooterButtons  lightButtonText='' buttonText='Next Step'/>
    </section>
  )
}

export default Info