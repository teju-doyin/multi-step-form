import React, { useState } from 'react'
import FooterButtons from '../components/FooterButtons'
import PageBackground from '../components/PageBackground'
import { useNavigate } from 'react-router-dom'
import { useForm } from '@/JS/FormContext'

const Plan = () => {
  const navigate = useNavigate()
  
  const { formData, setFormData, isYearly, handleToggleSwitch } = useForm();
  const [showErrorMessage, setShowErrorMessage] = useState(false)

    
  const handleSelectedPlan =(plan)=>{
    setShowErrorMessage(false)
    setFormData({...formData, selectedPlan: plan})
  }
  const handleSubmit = () => {
    if(!formData.selectedPlan) {
      setShowErrorMessage(true)
      // return
    }else{
      navigate('../add-ons')
    }
    console.log(formData.selectedPlan)
  }
  console.log(isYearly)
  const plans=[
    {
      id:1,
      name: "Arcade",
      image: '/images/icon-arcade.svg',
      pricePerMonth: 9,
      pricePerYear:90,
    },
    {
      id:2,
      name: "Advanced",
      image: '/images/icon-advanced.svg',
      pricePerMonth: 12,
      pricePerYear:120,
    },
    {
      id:3,
      name: "Pro",
      image: '/images/icon-pro.svg',
      pricePerMonth: 15,
      pricePerYear:150,
    },
  ]

  return (
    <>
    <PageBackground>
      <div className="w-[85%]  mx-auto ">
        <h2 className='title'>Select your plan</h2>
        <p className='text-gray mb-7'>You have the option of monthly or yearly billing</p>
      </div>
      <section className="w-[85%]  mx-auto ">
        {showErrorMessage && <p className='error-message'>You must select a plan</p>}
        {plans.map((plan)=> (
          <div 
            onClick={()=>handleSelectedPlan(plan)}
            key={plan.id} 
            className={`flex gap-5 items-start cursor-pointer border ${formData.selectedPlan?.id === plan.id?'border-deepBlue' : 'border-lightGray'}  rounded-md mb-5 p-3`}>
            <img src={plan.image} alt=""/>
            <div>
              <h4 className='text-deepBlue font-semibold'>{plan.name}</h4>
              <span className='text-gray'>${isYearly? plan.pricePerYear +'/yr' : plan.pricePerMonth +'/mo'}</span>
              {isYearly && <p className='font-medium text-deepBlue'>2 months free</p>}
            </div>
          </div>
        ))}

        <div className="flex items-center w-[70%] mx-auto justify-between mt-8">
          <span className={`font-semibold  ${isYearly?' text-gray':'text-deepBlue'}`}>Monthly</span>
          <label className="toggle-switch w-[50%]">
            <input 
              type="checkbox" 
              onChange={handleToggleSwitch} 
              checked={isYearly}
            />
            <div className="toggle-switch-background">
              <div className="toggle-switch-handle"></div>
            </div>
          </label>
          <span className={`font-semibold ${isYearly?'text-deepBlue':'text-gray'}`}>Yearly</span>
        </div>
      </section>
    </PageBackground>
    <FooterButtons  
      lightButtonText='Go Back' 
      buttonText='Next Step' 
      linkBack='../' 
      linkNext={!formData.selectedPlan? '':'../add-ons' }
      style='bg-deepBlue'
      handleNext={handleSubmit}
    />
    </>
  )
}
//try doing the checklist to include the deep blue colour
export default Plan