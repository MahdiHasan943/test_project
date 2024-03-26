import Title from '@/components/reusablecomponent/Title'
import React from 'react'

const page = () => {
  return (
    <div>
    <div
        className="w-full relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
            text="Social media agency Frankfurt"
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
         <span className='text-[#ffc006]'> Home</span> &gt; Social media agency Frankfurt
          </p>
        </div>
      </div>


    </div>
  )
}

export default page