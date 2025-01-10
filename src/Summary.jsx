import React, { useState } from 'react'
import FooterButtons from './components/FooterButtons'
import PageBackground from './components/PageBackground'
import { Link } from 'react-router-dom'
import Complete from './Complete'
const Summary = () => {
  const [showCompleteModal, setShowCompleteModal] = useState(false)

  const handleModalDisplay=()=>{
    setShowCompleteModal(true)
  }
  const planSummary = [{
    plan: "Arcade",
    renewal: "Monthly",
    price: 9,
    addOns: [
    {
      id: 1,
      title: "Online service",
      price: 1,
    },
    {
      id: 2,
      title: "Larger storage",
      price: 2,
    }],
    total: 12
  }]
  if (showCompleteModal){
    return(
      <Complete/>
    )
  }

  return (
    
    <>
     <PageBackground>
      <div className="w-[90%]  mx-auto ">
        <h2 className='title'>Finising up</h2>
        <p className='text-gray mb-7'>Double-check everything looks OK before confirming.</p>
      </div>
      <section className="w-[90%]  mx-auto ">
        {planSummary.map((info,index)=>(
          <>
          <div key={index}className="bg-veryLightBlue rounded-lg mb-4 " >
            <div className="w-[90%]  mx-auto py-4">
              <div className="flex justify-between items-center">
                <div className="">
                  <p className='text-deepBlue font-semibold'>{info.plan} ({info.renewal})</p>
                  <Link to='/plan' className=' underline text-gray'>Change</Link>
                </div>
                <span className='text-deepBlue font-bold'>${info.price}/mo</span>
              </div>
              <div className="h-[1px] w-full bg-lightGray my-4"></div>
              <div className="">
                {info.addOns.map((addOn)=>(
                  <p key={addOn.id} className="flex justify-between items-center mb-3">
                    <span className='text-gray'>{addOn.title}</span>
                    <span className='text-deepBlue font-med'>+${addOn.price}/mo</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className='w-[90%]  mx-auto  flex justify-between items-center'>
            <span className='text-gray'>Total (per month)</span>
            <span className='text-blue font-bold'>+${info.total}/mo</span>
          </p>
          </>
        ))}
      </section>
    </PageBackground>
    <FooterButtons  lightButtonText='Go Back' buttonText='Confirm' linkBack='/add-ons' linkNext='' style='bg-blue' handleNext={handleModalDisplay}/>
    </>
  )
}

export default Summary