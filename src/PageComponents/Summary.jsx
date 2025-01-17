import React, { useEffect, useState } from 'react'
import FooterButtons from '../components/FooterButtons'
import PageBackground from '../components/PageBackground'
import { Link } from 'react-router-dom'
import Complete from './Complete'
import { useForm } from '@/JS/FormContext'


const Summary = () => {
  const [showCompleteModal, setShowCompleteModal] = useState(false)
  const { selectedAddOn, formData, isYearly } = useForm();

  const handleModalDisplay=()=>{
    setShowCompleteModal(true)
  }
  
  const totalAddons = () =>{
    if (!selectedAddOn || selectedAddOn.lenght ===0) return 0
    return selectedAddOn.reduce((acc,curr) =>{
      return acc + (isYearly ? curr.pricePerYear: curr.pricePerMonth)
    }, 0)
  }

  const totalInvoice =()=>{
    return totalAddons() + (isYearly? formData.selectedPlan?.pricePerYear: formData.selectedPlan?.pricePerMonth) 
  }
  
  if (showCompleteModal) return <Complete/>

  return (
    
    <>
     <PageBackground>
      <div className="w-[90%]  mx-auto ">
        <h2 className='title'>Finising up</h2>
        <p className='text-gray mb-7'>Double-check everything looks OK before confirming.</p>
      </div>
      <section className="w-[90%]  mx-auto ">
        
          <>
          <div className="bg-veryLightBlue rounded-lg mb-4 " >
            <div className="w-[90%]  mx-auto py-4">
              <div className="flex justify-between items-center">
                <div className="">
                  <p className='text-deepBlue font-semibold'>{formData.selectedPlan?.name} ({isYearly?"Yearly": "Monthly"})</p>
                  <Link to='/plan' className=' underline text-gray'>Change</Link>
                </div>
                <span className='text-deepBlue font-bold'>${isYearly?formData.selectedPlan.pricePerYear: formData.selectedPlan?.pricePerMonth}/{isYearly?"yr": "mo"}</span>
              </div>
              <div className="h-[1px] w-full bg-lightGray my-4"></div>
              <div className="">
                {selectedAddOn.map((addOn,index)=>(
                  <p key={index} className="flex justify-between items-center mb-3">
                    <span className='text-gray'>{addOn.title}</span>
                    <span className='text-deepBlue font-med'>+${isYearly?addOn.pricePerYear: addOn.pricePerMonth}/{isYearly?"yr": "mo"}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className='w-[90%]  mx-auto  flex justify-between items-center'>
            <span className='text-gray'>Total (per {isYearly?"year": "month"})</span>
            <span className='text-blue font-bold'>+${totalInvoice()}/{isYearly?"yr": "mo"}</span>
          </p>
          </>
        
      </section>
    </PageBackground>
    <FooterButtons
      lightButtonText='Go Back'
      buttonText='Confirm'
      linkBack='/add-ons'
      linkNext=''
      style='bg-blue'
      handleNext={handleModalDisplay}
    />
    </>
  )
}

export default Summary