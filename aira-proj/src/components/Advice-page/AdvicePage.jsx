import React from 'react'
import Logo from'../Landing/logo.png'
import Image1 from './image1.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Image2 from'./image2.png'
import Image3 from './image3.png'
import Image4 from './image4.png'
import Image5 from './image5.png'
import Footer from '../Footer'

const AdvicePage = () => {
  return (
    <div className=' flex-col '>
        {/* navbar start */}
         <div className="flex flex-row w-full h-[120px] py-[30px] gap-[60px]">
            <div>
                <img src={Logo} alt="logo-image" className="px-5"/>
            </div>
            {/* for the links */}
            <div className="  pt-3 flex flex-row gap-[50px] text-xl relative left-[450px]">
                <a href="#" className="">Home</a>
                <a href="#" className="">Products</a>
                <a href="#" className="">How it works</a>
                <a href="#" className="">Usage device</a>
            </div>

            <div className="relative left-[700px]">
            <button className="bg-blue-700 w-[140px] relative left-[200px] h-[50px] text-lg text-white rounded-full hover:bg-black hover:text-blue-500 px-4 py-2">
             Log in
             </button>
            </div>
        </div>
        {/* navbar end */}

        {/* second section */}
        <div className="bg-sky-50 w-full flex-row pb-[5rem] rounded-b-3xl">
            <div className='left-part flex flex-col gap-2 text-left ml-[9rem] pt-[4rem]'>
            <p className=" text-blue-700 text-xl font-medium font-['General Sans']">Advice</p>
            <p className='text-5xl font-bold font-sans w-[40rem]'>Sanitation advice and AIRA condenser usage</p>
            <p className='w-[610px]  pt-[2rem] text-slate-500 text-2xl font-normal font-sans'>With unwavering determination, the team at AIRA embarked on years of research and experimentation.
            Countless trials and errors followed, but they  persevered,
            driven by a deep conviction that their  breakthrough could change lives.</p>
            <button className="bg-blue-700 w-[170px]  mt-[3rem] h-[70px] text-xl items-center text-white rounded-full hover:bg-black hover:text-blue-500  flex flex-row flex items-center justify-center">
             Get started <AiOutlineArrowRight />
             </button>
            </div>
            <div className='right-part float-right'>
            <img src={Image1} alt="image1" className="px-[6rem] relative bottom-[28rem]"/>
            </div>

        </div>
            {/* the words section */}
        <div className="flex flex-col items-center mt-[5rem] gap-2 ml-[45rem]">
            <p className="text-black text-[45px] font-semibold whitespace-nowrap  ">Advices and testimonials</p>
            <p className='w-[537px] text-center text-slate-500   text-xl font-normal '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
        </div>

        {/* the fourth section */}
        <div className=' flex flex-row gap-[4rem] ml-[3rem]  scrollbar-hidden'>
            <div className="left-part flex-col ml-[9rem] mt-[4rem] ">
                <img src={Image2} alt='image2' />
                <p className="w-[489px] h-[30px] text-black text-2xl text-left font-medium mt-[2rem]">How AIRA got ideated at the beginning </p>

                <p className="w-[571px] h-[334.25px] text-slate-500 text-xl text-left font-normal font-['General Sans'] mt-[2rem]">AIRA, a visionary group, tackled water scarcity in the Sahara Desert by developing an innovative solution: condensing air into clean, drinkable water.
                    After years of research and experimentation, they successfully implemented a solar-powered system that created oases in the desert.
                    The breakthrough garnered global attention, inspiring hope for water-starved regions worldwide. Motivated by their success, AIRA now aims to combat water scarcity globally,
                     leaving a lasting impact on water distribution and showcasing the power of human ingenuity and compassion.</p>

                     <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform relative bottom-[1rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>

            </div>

            <div className='right-part flex flex-col mt-[4rem] gap-6'>
                <div className=" flex flex-row gap-10">
                    <img src={Image3} alt='image3' className="w-[16rem]"/>
                    {/* paragraphs are not aligningggg */}
                    <div className='flex flex-col gap-3'>
                    <p className="text-black text-xl font-medium  whitespace-nowrap text-left">The Success of AIRA's Water <br />Distribution Project</p>
                    <p className="w-[275.62px] h-12 text-neutral-700 text-lg font-normal font-['General Sans'] whitespace-nowrap text-left">The Success of AIRA's Water <br /> Distribution Project</p>
                    <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[0.5rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                    </div>


                </div>
                <div className=" flex flex-row gap-10">
                    <img src={Image4} alt='image4' className="w-[16rem]"/>
                    {/* paragraphs are not aligningggg */}
                    <div className='flex flex-col gap-3'>
                    <p className="text-black text-xl font-medium  whitespace-nowrap text-left">A Lifeline for Sahara: The Marvel of <br/> AIRA's Water Condensing Solution</p>
                    <p className="w-[275.62px] h-12 text-neutral-700 text-lg font-normal font-['General Sans'] whitespace-nowrap text-left">A Lifeline for Sahara: The Marvel of <br/> AIRA's Water Condensing Solution</p>
                    <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[0.5rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                    </div>


                </div>

                <div className=" flex flex-row gap-10">
                    <img src={Image5} alt='image5' className="w-[16rem]"/>
                    {/* paragraphs are not aligningggg */}
                    <div className='flex flex-col gap-3'>
                    <p className="text-black text-xl font-medium  whitespace-nowrap text-left">From Air to Oasis: AIRA's Water <br /> Distribution Initiative in Sahara</p>
                    <p className="w-[275.62px] h-12 text-neutral-700 text-lg font-normal font-['General Sans'] whitespace-nowrap text-left">A Lifeline for Sahara: The Marvel of <br/> AIRA's Water Condensing Solution</p>
                    <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[0.5rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                    </div>


                </div>
                <div className=" flex flex-row gap-10">
                    <img src={Image5} alt='image5' className="w-[16rem]"/>
                    {/* paragraphs are not aligningggg */}
                    <div className='flex flex-col gap-3'>
                    <p className="text-black text-xl font-medium  whitespace-nowrap text-left">From Air to Oasis: AIRA's Water <br /> Distribution Initiative in Sahara</p>
                    <p className="w-[275.62px] h-12 text-neutral-700 text-lg font-normal font-['General Sans'] whitespace-nowrap text-left">A Lifeline for Sahara: The Marvel of <br/> AIRA's Water Condensing Solution</p>
                    <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[0.5rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                    </div>


                </div>
            </div>

        </div>
           {/* the words section */}
        <div className="flex flex-col items-center mt-[5rem] gap-2">
            <p className="text-black text-[45px] font-semibold whitespace-nowrap  ">Latest updates</p>
            <p className='w-[537px] text-center text-slate-500   text-xl font-normal '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
        </div>

        {/* last section */}
        <div className="flex flex-row mt-[4rem] gap-[13rem] ml-[13rem]">
            {/* left-side */}
            <div className="left-side flex flex-col gap-11 ">
                <div className='text-left flex flex-col gap-2'>
                <p className="w-[538px] h-[37px] text-neutral-700 text-xl font-bold font-sans ">Inauguration of AIRA's Water Kiosk in Arid Village</p>
                <p class="w-[538px] h-[94px] text-neutral-700 text-lg font-normal font-['General Sans'] ">A Lifeline for AIRA recently launched a water kiosk in an arid village, providing a sustainable water source for the community's
                 daily needs and empowering local livelihoods.Sahara: The Marvel of AIRA's Water Condensing Solution.</p>
                 <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[2rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                </div>
                <div className='text-left flex flex-col gap-2'>
                <p className="w-[538px] h-[37px] text-neutral-700 text-xl font-bold font-sans ">AIRA Partners with NGOs to Expand Water Distribution in developing Nations</p>
                <p class="w-[538px] h-[94px] text-neutral-700 text-lg font-normal mt-[2rem] font-['General Sans'] ">A Lifeline for AIRA recently launched a water kiosk in an arid village, providing a sustainable water source for the community's
                 daily needs and empowering local livelihoods.Sahara: The Marvel of AIRA's Water Condensing Solution.</p>
                 <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[2rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                </div>
                <div className='text-left flex flex-col gap-3'>
                <p className="w-[538px] h-[37px] text-neutral-700 text-xl font-bold font-sans ">AIRA Hosts Water Conservation Symposium for Youth Leaders</p>
                <p class="w-[538px] h-[94px] text-neutral-700 text-lg font-normal font-['General Sans'] mt-[2rem] ">A Lifeline for AIRA recently launched a water kiosk in an arid village, providing a sustainable water source for the community's
                 daily needs and empowering local livelihoods.Sahara: The Marvel of AIRA's Water Condensing Solution.</p>
                 <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[2rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                </div>
            </div>
            {/* right-side */}

            <div className="right flex flex-col gap-11 ">
                <div className='text-left flex flex-col gap-2'>
                <p className="w-[538px] h-[37px] text-neutral-700 text-xl font-bold font-sans ">Inauguration of AIRA's Water Kiosk in Arid Village</p>
                <p class="w-[538px] h-[94px] text-neutral-700 text-lg font-normal font-['General Sans'] ">A Lifeline for AIRA recently launched a water kiosk in an arid village, providing a sustainable water source for the community's
                 daily needs and empowering local livelihoods.Sahara: The Marvel of AIRA's Water Condensing Solution.</p>
                 <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[2rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                </div>
                <div className='text-left flex flex-col gap-2'>
                <p className="w-[538px] h-[37px] text-neutral-700 text-xl font-bold font-sans ">AIRA Partners with NGOs to Expand Water Distribution in developing Nations</p>
                <p class="w-[538px] h-[94px] text-neutral-700 text-lg font-normal mt-[2rem] font-['General Sans'] ">A Lifeline for AIRA recently launched a water kiosk in an arid village, providing a sustainable water source for the community's
                 daily needs and empowering local livelihoods.Sahara: The Marvel of AIRA's Water Condensing Solution.</p>
                 <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[2rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                </div>
                <div className='text-left flex flex-col gap-3'>
                <p className="w-[538px] h-[37px] text-neutral-700 text-xl font-bold font-sans ">AIRA Hosts Water Conservation Symposium for Youth Leaders</p>
                <p class="w-[538px] h-[94px] text-neutral-700 text-lg font-normal font-['General Sans'] mt-[2rem] ">A Lifeline for AIRA recently launched a water kiosk in an arid village, providing a sustainable water source for the community's
                 daily needs and empowering local livelihoods.Sahara: The Marvel of AIRA's Water Condensing Solution.</p>
                 <a href="#" className="flex flex-row text-lg items-center gap-2 text-blue-700 font-normal hover:scale-105 transition-transform mt-[2rem]">Read more<AiOutlineArrowRight className='relative top-[3px]'/></a>
                </div>
            </div>
        </div>
        <div className="mt-[4rem]">
        <Footer />
        </div>

    </div>
  )
}

export default AdvicePage