import Title from '@/components/reusablecomponent/Title'
import Image from 'next/image'
import React from 'react'
import { BsTwitter,BsFacebook ,BsLinkedin,BsInstagram   } from "react-icons/bs";
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
        className="w-full relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
            text={t('TeamMembers')}
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
         <span className='text-[#ffc006]'> {t('home')}</span> &gt; {t('TeamMembers')}
          </p>
        </div>
      </div>
   

      <div className="py-20 max-w-[1050px] mx-auto grid grid-cols-1 min-h-[470px] tablet:grid-cols-3 gap-4 px-4">
          <div className="group h-[430px] rounded-2xl relative overflow-hidden ">
            <div className="bg-[#111] z-10 rounded-2xl absolute top-0 left-0 h-[80%] w-full translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500"></div>
            <div className="bg-[#f2f3f6] rounded-2xl  absolute top-0 left-0 h-[80%] w-full   "></div>

            <div className="absolute  w-full h-full top-0 left-0 z-50">
              <div className="flex pt-8 flex-col w-full h-full justify-between items-center">
                <h3 className='text-[20px] text-[#111] group-hover:text-[#fff] font-bold py-2'>Mike Henderson</h3>
                <p className='text-[12px] text-[#777] group-hover:text-[#fff]  pb-4 font-normal'>Managing Director</p>
                <Image src='/member1.png' alt='team member' width={300} height={300} className='rounded-2xl  h-[300px] w-[90%] mx-auto' />
                <div className="w-[50px] h-[50px] absolute  bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#ffc006] flex justify-center items-center rounded-full"><p className='text-[20px]'>+</p></div>
                <div className="absolute w-[50px] h-[150px] translate-y-[140%]  group-hover:translate-y-[0] ease-in-out duration-500  bottom-[60px] left-1/2 transform -translate-x-1/2 z-40  flex justify-center items-center rounded-full">

                  <div className="bg-[#111] rounded-md w-full flex flex-col items-center justify-center gap-4 h-full">
                    <BsTwitter className='text-[#fff] hover:text-[#ffc006]' />
                    <BsFacebook className='text-[#fff] hover:text-[#ffc006]' />
                    <BsLinkedin className='text-[#fff] hover:text-[#ffc006]'/>
                    <BsInstagram className='text-[#fff] hover:text-[#ffc006]'/>
                  </div>
                </div>
          </div>
           </div>
          </div>



          <div className="group rounded-2xl h-[430px] relative overflow-hidden ">
            <div className="bg-[#111] z-10 rounded-2xl absolute top-0 left-0 h-[80%] w-full translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500"></div>
            <div className="bg-[#f2f3f6] rounded-2xl  absolute top-0 left-0 h-[80%] w-full   "></div>

            <div className="absolute  w-full h-full top-0 left-0 z-50">
              <div className="flex pt-8 flex-col w-full h-full justify-between items-center">
                <h3 className='text-[20px] text-[#111] group-hover:text-[#fff] font-bold py-2'>Kevin Martin</h3>
                <p className='text-[12px] text-[#777] group-hover:text-[#fff]  pb-4 font-normal'>Chief Executive Officer</p>
                <Image src='/member2.png' alt='team member' width={300} height={300} className='rounded-2xl  h-[300px] w-[90%] mx-auto' />
                <div className="w-[50px] h-[50px] absolute  bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#ffc006] flex justify-center items-center rounded-full"><p className='text-[20px]'>+</p></div>
                <div className="absolute w-[50px] h-[150px] translate-y-[140%]  group-hover:translate-y-[0] ease-in-out duration-500  bottom-[60px] left-1/2 transform -translate-x-1/2 z-40  flex justify-center items-center rounded-full">

                  <div className="bg-[#111] rounded-md w-full flex flex-col items-center justify-center gap-4 h-full">
                    <BsTwitter className='text-[#fff] hover:text-[#ffc006]' />
                    <BsFacebook className='text-[#fff] hover:text-[#ffc006]' />
                    <BsLinkedin className='text-[#fff] hover:text-[#ffc006]'/>
                    <BsInstagram className='text-[#fff] hover:text-[#ffc006]'/>
                  </div>
                </div>
          </div>
           </div>
          </div>


          <div className="group rounded-2xl h-[430px] relative overflow-hidden ">
            <div className="bg-[#111] z-10 rounded-2xl absolute top-0 left-0 h-[80%] w-full translate-y-[-110%]  group-hover:translate-y-[0] ease-in-out duration-500"></div>
            <div className="bg-[#f2f3f6] rounded-2xl  absolute top-0 left-0 h-[80%] w-full   "></div>

            <div className="absolute  w-full h-full top-0 left-0 z-50">
              <div className="flex pt-8 flex-col w-full h-full justify-between items-center">
                <h3 className='text-[20px] text-[#111] group-hover:text-[#fff] font-bold py-2'>Jason Cleaver</h3>
                <p className='text-[12px] text-[#777] group-hover:text-[#fff]  pb-4 font-normal'>Human Resource Manager</p>
                <Image src='/member3.png' alt='team member' width={300} height={300} className='rounded-2xl  h-[300px] w-[90%] mx-auto' />
                <div className="w-[50px] h-[50px] absolute  bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#ffc006] flex justify-center items-center rounded-full"><p className='text-[20px]'>+</p></div>
                <div className="absolute w-[50px] h-[150px] translate-y-[140%]  group-hover:translate-y-[0] ease-in-out duration-500  bottom-[60px] left-1/2 transform -translate-x-1/2 z-40  flex justify-center items-center rounded-full">

                  <div className="bg-[#111] rounded-md w-full flex flex-col items-center justify-center gap-4 h-full">
                    <BsTwitter className='text-[#fff] hover:text-[#ffc006]' />
                    <BsFacebook className='text-[#fff] hover:text-[#ffc006]' />
                    <BsLinkedin className='text-[#fff] hover:text-[#ffc006]'/>
                    <BsInstagram className='text-[#fff] hover:text-[#ffc006]'/>
                  </div>
                </div>
          </div>
           </div>
          </div>
       </div>

    
      
      </>
  )
}

export default page