"use client";
import Button from "@/components/reusablecomponent/Button";
import Title from "@/components/reusablecomponent/Title";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTelephonePlusFill ,BsEnvelope, BsMap } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_3vcletm", "template_f2lydr6", form.current, "NRwXHbN7qICuTorEL").then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        form.current.reset();
        toast.success('Successfully submitted form');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  
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
            text={t('contact')}
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
            <span className='text-[#ffc006]'> {t('home')}</span> &gt; {t('contact')}
          </p>
        </div>
      </div>
      <div className="max-w-[1100px] desktop:flex items-start mx-auto py-12">

        <div className="py-8  px-6 desktop:min-w-[640px]  ">
        
          <p className="text-[14px] text-[#777]">{t('Sendusemail')}</p>
          <h3 className="font-bold text-[30px]">
          {t('Feelfree')}</h3>
            <form
        id="con"
        className="tablet:flex  z-[100000000000]  desktop:py-8   tablet:max-h-[500px]  rounded-sm bg-[#fff] max-w-[650px]  "
        ref={form}
        onSubmit={sendEmail}
        action=""
        >
          
              <div className="py-6 tablet:py-0 max-w-[350px]">         
        </div>
              <div className="pb-20">
          <div className="tablet:flex gap-8 justify-start items-center">
            <div className="">
            <label className="text-[#063255] py-4"  htmlFor="">{t('FullName')}</label>
          <input
            type="text"
            className="placeholder:text-[#063255] bg-[#f6f6f6] outline-none mb-4  text-[#063255] placeholder:text-[22px] py-3 px-6 rounded-sm  w-full "
            name="user_name"
                  />
            </div> <div className="">
              
            <label className="text-[#063255] py-4"  htmlFor="">{t('EmailAddress')}<span className="text-[red]">*</span></label>

<input
  type="email"
  className="placeholder:text-[#063255] bg-[#f6f6f6] outline-none mb-4  text-[#063255] placeholder:text-[22px] py-3 px-6 rounded-sm  w-full "
  name="user_email"
        />
          </div>
                </div>
                                    <label className="text-[#063255] py-4"  htmlFor="">{t('Telephone ')} <span className="text-[red]">*</span></label>

          <input
            type="text"
            className="placeholder:text-[#063255] bg-[#f6f6f6] outline-none mb-4  text-[#063255] placeholder:text-[22px] py-3 px-6 rounded-sm  w-full "
            name="phone"
                  />
                                    <label className="text-[#063255] py-4" htmlFor="">{t('Message')}</label>
          <textarea
            className="w-full px-6 bg-[#f6f6f6] outline-none  placeholder:text-[#063255] text-[#063255] rounded-md placeholder:text-[22px] py-6 "
            id=""
            cols="30"
                rows="4"
                name="message"
          ></textarea>
          <div className="">
          <Button
                    className={
            "w-[180px] group mt-4"    
            // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                    }
            
                  >
                  <button
                    className="text-black group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">{t('SendMessage')}</button>

                  </Button>
          </div>
        </div>
      </form>
        </div>
        <div className="py-8 px-4">
        <p className="text-[14px] text-[#777]">{t('needanyhelp')}
</p>
          <h3 className="font-bold text-[30px]">
          {t('Getintouch')}
          </h3>
          <p className="text-[14px] pt-4 ">
            <span className="text-[12px] font-semibold">{t('ADDRESS ')}</span> 
            {t('addressDes')}
          </p>

          <div className="pt-12 flex  gap-4 pb-4">
            <div className="bg-[#000] group hover:bg-[#ffc107] ease-linear duration-200 w-[60px] h-[60px] flex justify-center items-center">
            <BsTelephonePlusFill className="group-hover:text-[#000] text-[20px] text-[#fff]"/>
          
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-bold">{t('haveanyq')}</p> 
            <p>Free +4915213599612</p>
           </div>
          </div>

          <div className=" flex  gap-4 pb-4">
            <div className="bg-[#000] group hover:bg-[#ffc107] ease-linear duration-200 w-[60px] h-[60px] flex justify-center items-center">
            <BsEnvelope  className="group-hover:text-[#000] text-[20px] text-[#fff]"/>
          
            </div>
            <div className="flex flex-col justify-between">
            <p className="font-bold">{t('WriteEmail')}
</p> 
            <p>link@link711.com</p>
           </div>
          </div>

          <div className=" flex  gap-4 pb-4">
            <div className="bg-[#000] group hover:bg-[#ffc107] ease-linear duration-200 w-[60px] h-[60px] flex justify-center items-center">
            <BsMap  className="group-hover:text-[#000] text-[20px] text-[#fff]"/>
          
            </div>
            <div className="flex flex-col justify-between">
            <p className="font-bold">
            {t('Visitanytime')}</p> 
            <p>Am Lachgraben 20
65931 Frankfurt</p>
           </div>
          </div>
             </div>
      </div>

      <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35753.80272668888!2d-119.34303891638667!3d37.078457181068664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1704944810889!5m2!1sen!2sbd" width="600" height="450" className="border-0 w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  )
}

export default page