import React from 'react'
import Logo from './logo.png'
import Device from './device.png'
import { BsFillPlayFill } from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci'



const LandingPage = () => {
  return (
    <div>
        {/*Navbar  start*/}
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
        {/* Navbar end */}

        {/* second section */}
        <div className="bg-sky-50 w-full h-[700px] felx flex-row">

            <div className="words-section relative right-[290px] top-[180px]">
                <p className="opacity-60 text-blue-700 text-xl font-medium font-['General Sans'] relative right-[550px] bottom-[20px]">AIRA™</p>
                <p className='text-5xl font-bold'>Generating water from air<span className='relative top-[60px] right-[582px]'>for people living in deserts</span></p>
                <div className="words-section2 relative top-[150px] text-2xl text-neutral-500 right-[220px]">
                <p className=''>lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,  </p>
                <p className='relative right-[148px]'>lorem ipsum dolor sit amet, consectetur </p>
                <p className='relative right-[260px]'>lorem ipsum dolor   </p>
                </div>

                <button className="px-[37px] py-[18px] text-white absolute  bg-blue-700 rounded-[49px] w-[250px] text-lg relative top-[230px] right-[430px] hover:bg-black hover:text-blue-500 px-4 py-2">
                 Request the Device
                </button>
            </div>

            <div className="image-section">
                {/* <p><span>Play Intro video</span></p> */}
                <img src={Device} alt="device-image" className="relative left-[1200px] bottom-[200px]"/>
                <div className="flex flex-row bg-white rounded-lg relative left-[1160px] bottom-[300px] w-[220px] h-[55px] px-[20px] py-[15px]">
                <BsFillPlayFill className="text-red-500 text-3xl" />
                <p className="text-xl text-slate-500">Play Intro video</p>
                </div>

                <div className="flex flex-row bg-white rounded-lg w-[300px] relative bottom-[800px] left-[1580px] px-[20px] py-[20px]">
                    <CiLocationOn className="text-orange-500 text-3xl"/>
                    <p className="flex flex-col text-xl relative right-[20px] text-slate-500 ">We're focusing <span className="relative left-[25px]">in the deserts as one</span><span className="relative left-[22px]">of the places strugle</span><span className="relative left-[29px]">finding water for daily</span><span className='relative right-[28px]'>activities</span></p>
                </div>

            </div>

            {/* more-info-section */}
            <div className='flex flex-row rounded-xl gap-[60px] text-2xl bg-white w-[1100px] px-[200px] py-[24px] relative bottom-[360px] left-[400px] shadow-xl'>
                <p className='flex flex-col relative right-[50px]'>
                    <strong >Happy Clients</strong>
                    <span className='text-slate-500 relative right-[10px]'>100 +</span>
                </p>
                <div className="h-24 border-l border-gray"></div>
                <p className='flex flex-col'>
                <strong>Countries</strong>
                    <span className='text-slate-500 relative right-[27px]'>25 +</span>
                </p>
                <div className="h-24 border-l border-gray"></div>
                <p className='flex flex-col'>
                <strong>Deserts</strong>
                    <span className='text-slate-500 relative right-[18px]'>10 +</span>
                </p>
                <div className="h-24 border-l border-gray"></div>
                <p className='flex flex-col'>
                <strong>Rating</strong>
                    <span className='text-slate-500 relative right-[20px]'>4.9</span>
                </p>
            </div>
            {/* the companies section */}
            <p class="text-black text-4xl font-semibold font-sans">In patnership with companies like </p>


        </div>
    </div>
  )
}

export default LandingPage