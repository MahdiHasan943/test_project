'use client'
import { Lato } from 'next/font/google'
import Button from '@/components/reusablecomponent/Button'
import Title from '@/components/reusablecomponent/Title'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { textVariant2 } from '@/font_utils/motion'
const lato = Lato({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});
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
            text="Carrer"
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
         <span className='text-[#ffc006]'> Home</span> &gt; Carrer
          </p>
        </div>
      </div>


   <div className="px-4 py-8 max-w-[1050px] mx-auto overflow-hidden h-auto pb-8 tablet:py-24 flex flex-col-reverse tablet:flex-none tablet:grid  tablet:grid-cols-2 items-center gap-8">
     
      <div className="min-h-[400px] flex flex-col justify-center py-8 tablet:py-0">
        <h2
          className={`${lato.className} font-extrabold text-[30px] leading-[30px] tablet:text-[40px]  tablet:leading-[40px] text-[#18191c]`}
        >
        Career Social Media Management 

        </h2>
        <p className="py-4 leading-[25px] text-[18px] text-[#516469] ">
        At Link711 we believe that the best results come from fostering talent, creativity and collaboration. We are constantly looking for passionate, dynamic and talented individuals who are ready to thrive in an innovative and exciting work environment.


        </p>
        <Button
                    className={
            "w-[200px] group"    
            // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                    }
                  
                  >
                  <Link href={"/contact"}
                  className="text-black group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform capitalize -translate-y-1/2">Discover our services</Link>

                  </Button>
        </div>
        <div className="py-6 relative  min-h-[400px] tablet:h-full w-full tablet:py-0 ">
        <div className="absolute  z-50 top-0 left-0">
          <Image
          src="/images/Group-2066-1.webp"
          alt="hero_image"
          width={400}
            height={500}
            className=" h-[400px] tablet:h-[450px]"
          />
          
        </div>
        <Image
          src="/images/icon-circle.png"
          alt="hero_image"
          width={350}
          height={400}
          className="absolute z-10 hidden tablet:block bottom-[50px] left-[20px]"

        />
        <Image
          src="/images/marketbg.png"
          alt="hero_image"
          width={150}
          height={200}
          className="absolute hidden tablet:block h-[300px] z-10 bottom-[100px] right-[10px] "

        />
        <motion.div variants={textVariant2} initial="hidden" whileInView="show" className="absolute bottom-0 right-0 h-[200px] w-[300px]">

       
         <Image
          src="/images/market2.png"
          alt="hero_image"
          width={350}
          height={200}
          className="absolute rounded-sm  border-[8px] border-[#fafafa] z-50  hidden tablet:block bottom-[0px] tablet:bottom-0 right-0 "

          /> </motion.div>
       
      </div>

      </div>
    </div>
  )
}

export default page