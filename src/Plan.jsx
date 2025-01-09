import React from 'react'
import FooterButtons from './components/FooterButtons'
import PageBackground from './components/PageBackground'
import { Switch } from "@/components/ui/switch"


const Plan = () => {
  const plans=[
    {
      id:1,
      name: "Arcade",
      image: '../../public/images/icon-arcade.svg',
      pricePerMonth: 9,
      pricePerYear:90,
    },
    {
      id:2,
      name: "Advanced",
      image: '../../public/images/icon-advanced.svg',
      pricePerMonth: 12,
      pricePerYear:120,
    },
    {
      id:3,
      name: "Pro",
      image: '../../public/images/icon-pro.svg',
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
        {plans.map((plan)=> (
          <div key={plan.id} className="flex gap-5 cursor-pointer border border-lightGray rounded-md mb-5 p-3">
            <img src={plan.image} alt=""/>
            <div>
              <h4 className='text-deepBlue font-semibold'>{plan.name}</h4>
              <span className='text-gray'>${plan.pricePerMonth}/mo</span>
              <span></span>
            </div>
          </div>
        ))}

        <div className="flex items-center w-[70%] mx-auto justify-between mt-8">
          <span className='font-medium text-deepBlue'>Monthly</span>
          <label className="toggle-switch w-[50%]">
            <input type="checkbox"/>
            <div className="toggle-switch-background">
              <div className="toggle-switch-handle"></div>
            </div>
          </label>
          <span className='font-medium text-deepBlue'>Yearly</span>
        </div>
      </section>
    </PageBackground>
    <FooterButtons  lightButtonText='Go Back' buttonText='Next Step' linkBack='../' linkNext='../add-ons'/>
    </>
  )
}
//try doing the checklist to include the deep blue colour
export default Plan