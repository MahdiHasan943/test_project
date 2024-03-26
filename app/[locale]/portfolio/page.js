
import MSlideContainer from '@/components/reusablecomponent/MSlideContainer';
import Title from '@/components/reusablecomponent/Title'
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft,BsArrowRight  } from "react-icons/bs";
import initTranslations from '@/app/i18n';
import i18nConfig from '@/i18nConfig';

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}  const i18Nemespaces = ['home', 'common'];
const page = async ({ params: { locale } }) => {
  const { t,resources} = await initTranslations(locale,i18Nemespaces );

  return (
    <>  
      <div
        className="w-full relative overflow-hidden h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
            text={t('portfolio')}
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
         <span className='text-[#ffc006]'> {t('home')}</span> &gt; {t('portfolio')}
          </p>
        </div>
      </div>
   
      <div className='py-8 px-4 max-w-[1400px] mx-auto tablet:px-16'>

        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-3 ">

          <Link target='_blank' href="https://realestateinghana.com/">
          <div className="relative group overflow-hidden">
                  <Image src={'/images/real.png'} alt='work'width={400} height={447} className='w-full h-[450px]  group-hover:scale-105   w-[full' />
                  <div className="absolute top-0 left-0 h-full w-full z-20">

</div>
                  <div className="absolute top-0 left-0 h-full w-full z-50  translate-x-[-100%]  group-hover:translate-x-[0] ease-in-out duration-500 ">
              <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
            
                <div className="ml-[80px] text-container">
                <MSlideContainer>
<BsArrowRight  className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />

       
                <p className='py-8 font-bold text-[22px]'>Real Estate <br /> inghana</p>  </MSlideContainer>
                        </div>
             
                      </div>
                  </div>
                  
          </div>
          
          </Link>

          
       
          
          <Link target="_blank" href="https://concnews.com/">
          <div className="relative  group overflow-hidden">
                  <Image src={'/images/news.png'} alt='work'width={400} height={447} className='w-full h-[450px]  group-hover:scale-105   w-[full' />
                  <div className="absolute top-0 left-0 h-full w-full z-20">

</div>
                  <div className="absolute top-0 left-0 h-full w-full z-50  translate-x-[-100%]  group-hover:translate-x-[0] ease-in-out duration-500 ">
              <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                <div className="ml-[80px] text-container">
                <MSlideContainer>


<BsArrowRight  className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />

       
                <p className='py-8 font-bold text-[22px]'>
                ConsNews</p>   </MSlideContainer>
                        </div>
               
                      </div>
                  </div>
                  
          </div>
          </Link>


          <Link target="_blank" href="https://ownhm.com/">
  
        <div className="relative group overflow-hidden">
                  <Image src={'/images/ownhome.png'} alt='work'width={400} height={447} className='w-full h-[450px]  group-hover:scale-105   w-[full' />
                  <div className="absolute top-0 left-0 h-full w-full z-20">

</div>
                  <div className="absolute top-0 left-0 h-full w-full z-50  translate-x-[-100%]  group-hover:translate-x-[0] ease-in-out duration-500 ">
              <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                <div className="ml-[80px] text-container">
                <MSlideContainer>

<BsArrowRight  className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />

       
                <p className='py-8 font-bold text-[22px]'>
                Ownhm</p>   </MSlideContainer>
                        </div>
            
                      </div>
                  </div>
                  
              </div>
          </Link>
           </div>
      </div>
      
      </>
  )
}

export default page