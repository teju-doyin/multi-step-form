import React from 'react'
import PageBackground from '../components/PageBackground'
import complete from '/images/icon-thank-you.svg'
const Complete = () => {
  return (
    <PageBackground>
        <div className="w-[85%]  mx-auto text-center flex  flex-col items-center  ">
            <img src={complete} alt="" width={60} />
          <h2 className='title mt-4 '>Thank you!</h2>
          <p className='text-gray mb-7'>Thank you for confirming your purchase subscription!
            We hope you have fun using our platform. If you ever nee support, please feel free 
            to email us at support@loremgaming.com.</p>
        </div>
    </PageBackground>
  )
}

export default Complete