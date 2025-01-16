import React, { useState } from 'react'
import FooterButtons from '../components/FooterButtons'
import PageBackground from '../components/PageBackground'
import { useForm } from '@/JS/FormContext'


const AddOns = () => {
  const { selectedAddOn, handleSelectedAddOn } = useForm();
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const {  formData, isYearly } = useForm();
  
  
 
  const handleSubmit = () => {  
    if(selectedAddOn.length == 0) {
      setShowErrorMessage(true)
    } else setShowErrorMessage(false)

  }
  console.log(selectedAddOn.length)

  const addOns = [
    {
      id:1,
      title: "Online service",
      detail: "Access to multiplayer games",
      pricePerMonth: 1,
      pricePerYear:10,
    },
    {
      id:2,
      title: "Larger storage",
      detail: "Extra 1TB of cloud save",
      pricePerMonth: 2,
      pricePerYear:20,
    },
    {
      id:3,
      title: "Customizable profile",
      detail: "Custom theme on your profile",
      pricePerMonth: 2,
      pricePerYear: 20,
    },
  ]
  return (
    <>
    <PageBackground>
      <div className="w-[85%]  mx-auto ">
        <h2 className='title'>Pick add-ons</h2>
        <p className='text-gray mb-7'>Add-ons help enhance your gaming experience.</p>
      </div>
      <section className='w-[85%]  mx-auto'>
        {showErrorMessage && <p className='error-message mb-2'>Please select at least 1 add on</p>}
        {addOns.map((addOn)=>{
          const isSelected = selectedAddOn.some((item) => item.id === addOn.id);
          return (
          <div 
            className={` flex mb-5 justify-between items-center border border-lightGray  ${isSelected?'border border-deepBlue bg-veryLightBlue':'border-lightGray'} rounded-md p-3 cursor-default`} 
            key={addOn.id}>
            <div className="flex justify-between items-center gap-2">
              <div className="custom-checkbox" >
                <input 
                  onChange={()=>handleSelectedAddOn(addOn)}
                  type="checkbox" 
                  id={`checkbox-${addOn.id}`}
                  checked={isSelected} 
                />
                <label htmlFor={`checkbox-${addOn.id}`}></label>
              </div>

              <div className="">
                <p className='text-deepBlue font-semibold'>{addOn.title}</p>
                <p className='text-gray text-[.9rem]'>{addOn.detail}</p>
              </div>
            </div>
            <span className='text-blue font-medium text-[.9rem]'>+${isYearly?addOn.pricePerYear: addOn.pricePerMonth}/{isYearly?"yr": "mo"}</span>
          </div>
        )})}
      </section>
        
    </PageBackground>
    <FooterButtons
      lightButtonText='Go Back'
      buttonText='Next Step' 
      linkBack='/plan' 
      linkNext={selectedAddOn.length==0?'': '/summary'} 
      style='bg-deepBlue'
      handleNext={handleSubmit}
    />
    </>
  )
}

export default AddOns