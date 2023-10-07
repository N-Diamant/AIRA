import React from 'react'
import Logo from'./Logo2.png'
import {LiaCopyright} from 'react-icons/lia'

const Footer = () => {
  return (
    <div className='fle flex-col bg-zinc-900'>
    <div className='flex flex-row  bg-zinc-900 text-white font-sans pt-[6rem] gap-12'>
        <div className='useful-links flex flex-col items-start gap-2 pl-[13rem]'>
            <p className='text-3xl '>Useful links</p>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">Home</a>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">How it works</a>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">Usage advice</a>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">Buy Aira Condenser</a>
        </div>
        <div className='useful-links flex flex-col items-start gap-2 pl-[13rem]'>
            <p className='text-3xl '>Follow us</p>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">Instagram</a>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">Twitter</a>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">Product Hunt</a>

        </div>

        <div className='useful-links flex flex-col items-start gap-2 pl-[13rem]'>
            <p className='text-3xl '>Contact us</p>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">info@aira.org</a>
            <a href="#" className="text-white text-opacity-70 text-base font-normal text-xl hover:text-blue-700">+250 788948375</a>


        </div>
        <div className='ml-[10rem] '>
        <img src={Logo} alt="logo-image" />
        <p className="w-[13rem]">"Creating an abudant source of water in deserts"</p>
        </div>
    </div>
    {/* the lower part */}
    <div>
    <div className='flex flex-row gap-14 pl-[13rem] mt-[5rem]'>
    <a href="#" className="text-white text-opacity-70 text-base font-normal text-lg hover:text-blue-700">Terms of service </a>
    <a href="#" className="text-white text-opacity-70 text-base font-normal text-lg hover:text-blue-700">  .User agreement </a>
    <a href="#" className="text-white text-opacity-70 text-base font-normal text-lg hover:text-blue-700">  .Privacy policy </a>

    </div>
    {/* copy right stuff */}
    <div className='text-white ml-[86rem] relative bottom-[2rem]'>
    <p className='flex flex-row items-center gap-3 text-white text-opacity-70 text-base font-normal text-lg '>Copyright <LiaCopyright /> AIRA 2023. All rights reserved</p>
    </div>
    </div>





    </div>

  )
}

export default Footer