import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './logo.png'
import Device from './device.png'
import Image1 from './image1 (6).png'
import Image2 from './image2 (1).png'
import Image3 from './image3.png'
import Image4 from './image4.png'
import Image5 from'./image5.png'
import Image6 from './image6.png'
import { BsFillPlayFill } from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci'
import {TbDroplets,TbDeviceAnalytics,TbCactus} from 'react-icons/tb'
import {AiOutlineArrowRight,AiOutlineCheckCircle,AiOutlineSend} from 'react-icons/ai';
import {LuSendHorizonal} from 'react-icons/lu';
import {MdOutlineAlternateEmail} from 'react-icons/md'
import Slider from './Slider';






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
            <p class="text-black text-5xl font-semibold font-sans relative bottom-[230px]">In patnership with companies like </p>
            <p className="w-[537px] text-center text-slate-500 text-xl  font-['General Sans Variable'] relative left-[700px] bottom-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>quae quibusdam eos cumque suscipit beatae quos sed quisquam.</span></p>

            {/* image-section-2 */}
            <div className='flex flex-row gap-[100px] relative ml-[300px] relative bottom-[150px]'>
            <img src={Image1} alt="logo-image"  className="px-5 w-36 h-20"/>
            <img src={Image2} alt="logo-image" className="px-5  w-38 h-24"/>
            <img src={Image3} alt="logo-image" className="px-5  w-38 h-24"/>
            <img src={Image4} alt="logo-image" className="px-5  w-38 h-24"/>
            <img src={Image5} alt="logo-image" className="px-5  w-36 h-24"/>
            </div>

            <p class="text-black text-5xl font-semibold font-sans relative relative ">What we solve </p>
            <p className="w-[537px] text-center text-slate-500 text-xl  font-['General Sans Variable'] relative left-[700px] top-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam eos cumqu<span>quae quibusdam eos cumque suscipit beatae quos sed quisquam.</span></p>

        </div>
        {/* three boxes */}
        <div className="relative top-[60rem] flex flex-row gap-[5rem] ml-[11rem] ">
            <div className="flex flex-col bg-slate-50 w-[30rem] h-[26rem] border border-gray-200 rounded-xl  ">
                <TbDroplets fontSize={46} className="bg-slate-100 rounded-lg w-[5rem] h-[6rem] px-[10px] ml-[30px] mt-[30px] "/>
                <p className="flex flex-col font-sans mt-[30px]"><strong className='text-3xl mb-[20px] font-medium'>Sustainable source of water</strong><span className="text-2xl text-slate-500 mr-[110px]">We provide a sustainable</span><span className="text-2xl text-slate-500 mr-[100px]">source of water to people</span><span className="text-2xl relative right-[3rem] text-slate-500 mr-[110px]">living in deserts</span></p>
                <a href="#" className="text-2xl text-blue-700 mt-[30px] mr-[250px] ">Learn More <AiOutlineArrowRight className="relative left-[11.5rem] bottom-[1.5rem]"/></a>
            </div>

            <div className="flex flex-col bg-slate-50 w-[30rem] h-[26rem] border border-gray-200 rounded-xl ">
                <TbDeviceAnalytics fontSize={46} className="bg-slate-100 rounded-lg w-[5rem] h-[6rem] px-[10px] ml-[30px] mt-[30px] "/>
                <p className="flex flex-col font-sans mt-[30px]"><strong className='text-3xl mb-[20px] font-medium mr-[110px]'>Water management</strong><span className="text-2xl text-slate-500 mr-[110px]">We provide a sustainable</span><span className="text-2xl text-slate-500 mr-[100px]">source of water to people</span><span className="text-2xl relative right-[3rem] text-slate-500 mr-[110px]">living in deserts</span></p>
                <a href="#" className="text-2xl text-blue-700 mt-[30px] mr-[250px] ">Learn More <AiOutlineArrowRight className="relative left-[11.5rem] bottom-[1.5rem]"/></a>
            </div>

            <div className="flex flex-col bg-slate-50 w-[30rem] h-[26rem] border border-gray-200 rounded-xl ">
                <TbCactus fontSize={46} className="bg-slate-100 rounded-lg w-[5rem] h-[6rem] px-[10px] ml-[30px] mt-[30px] "/>
                <p className="flex flex-col font-sans mt-[30px]"><strong className='text-3xl mb-[20px] mr-[160px] font-medium'>Water in deserts</strong><span className="text-2xl text-slate-500 mr-[110px]">We provide a sustainable</span><span className="text-2xl text-slate-500 mr-[100px]">source of water to people</span><span className="text-2xl relative right-[3rem] text-slate-500 mr-[110px]">living in deserts</span></p>
                <a href="#" className="text-2xl text-blue-700 mt-[30px] mr-[250px] ">Learn More <AiOutlineArrowRight className="relative left-[11.5rem] bottom-[1.5rem]"/></a>
            </div>
        </div>

        {/* swiper section */}
        <div className="relative top-[1100px] bg-slate-100 h-[50rem]  ">
            <p className='flex flex-col mr-[880px] pt-[40px]'>
            <strong className="text-4xl  relative right-[323px]">Get to know more</strong>
            <span className='text-2xl relative right-[173px] top-[] mt-[20px] ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
            <span className='text-2xl mb-[40px] relative left-[62px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt asperiores dolorum, maiores  .</span>
            </p>
            <Slider  />

        </div>

        {/* about-the-device-section */}
            <div className ='flex flex-row bg-white relative top-[70rem] gap-[500px] '>
            <div>
                {/* ????????????????? the back-ground stuff  */}
            <img src={Device} alt="device-image" className=' ml-[10rem] '/>
            <div className="flex flex-row bg-slate-100 rounded-lg  relative left-[150px] bottom-[5rem] w-[220px] h-[55px] px-[20px] py-[15px]">
                <BsFillPlayFill className="text-red-500 text-3xl" />
                <p className="text-xl text-slate-500">Play Intro video</p>
                </div>

            </div>
            <div className='flex flex-col items-center   mt-[80px] relative right-[9rem]'>
                <p className='text-blue-700 text-lg mr-[29rem]'>About</p>
                <h3 className='text-stone-950 text-3xl mr-[15rem] mb-[1rem] font-semibold font-Sans'>The AIRA condenser</h3>
                <p className='text-slate-500 text-2xl text-left w-[32rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi, iure cum ipsam velit nihil repudiandae est blanditiis aliquam.</p>
                <div className='flex flex-col gap-3 relative right-[2rem]'>
                    <p className='flex flex-row gap-8 text-slate-500 text-2xl items-center mt-[3rem] '><AiOutlineCheckCircle className='' /><span>Air condensation</span></p>
                    <p className='flex flex-row gap-8 text-slate-500 text-2xl items-center  '><AiOutlineCheckCircle className='' /><span>Water filtration</span></p>
                    <p className='flex flex-row gap-8 text-slate-500 text-2xl items-center '><AiOutlineCheckCircle className='' /><span>Water storage</span></p>
                    <p className='flex flex-row gap-8 text-slate-500 text-2xl items-center '><AiOutlineCheckCircle className='' /><span>Usage analytics and device </span></p>
                </div>
                <button className="bg-blue-700  w-[140px]  mt-[4rem] mr-[21rem] h-[60px] text-lg text-white rounded-full hover:bg-black hover:text-blue-500 px-4 py-3">
             Read more
             </button>

            </div>
        </div>

        {/* the contact us section */}
        <div className='contact-us relative top-[75rem] bg-slate-100 '>
            <div className='left-part  text-left pl-[8rem] pt-[4rem] flex flex-col gap-[0.5rem] font-sans'>
                <h3 className='text-blue-700 text-base font-medium font-sans'>Contact us </h3>
                <p className='text-stone-950 text-4xl font-medium font-sans'>Send us a message</p>
                <p className='text-slate-500  font-normal font-sans text-left text-2xl w-[30rem] mt-[1rem]'>For Ideas,problems or requests,ping us a message, we'll egt back to you as quick as possible.</p>

                <div className='input-fields flex flex-row gap-[1rem] mt-[1rem]'>
                <input class="px-16 py-6 rounded-full items-center border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"  type="text"  placeholder="First Name"/>
                <input class="px-16 py-6 rounded-full items-center border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"  type="text"  placeholder="Email Address"/>
                </div>
                <textarea class="w-[40rem] h-[9rem] p-5 rounded-2xl border-2xl border-transparent focus:border-slate-100" placeholder="Message"></textarea>
                <button className="bg-blue-700  w-[150px] items-center jusitify-center  flex flex-row   mt-[2rem] mr-[21rem] h-[60px] text-xl text-white rounded-full hover:bg-black hover:text-blue-500 px-9 py-3">
             Send <LuSendHorizonal className='relative left-[1rem] top-[0.2rem]'/>
             </button>
            </div>

            <div className='right-part flex flex-col  items-center relative bottom-[30rem]'>
                <p className='text-stone-950 text-4xl font-medium font-sans'>Contact info</p>
                <p className='text-slate-500 text-base font-normal font-sans leading-[22.88px]'>More contacts</p>
                <div className='links flex flex-col gap-[10px]'>
                    <a href="#" className="flex flex-row gap-[10px] text-slate-500  font-normal font-sans items-center "><MdOutlineAlternateEmail className='text-blue-700'/>info@aira.org</a>
                    <a href="#" className="flex flex-row gap-[10px] text-slate-500  font-normal font-sans items-center "><MdOutlineAlternateEmail className='text-blue-700'/>info@aira.org</a>
                    <a href="#" className="flex flex-row gap-[10px] text-slate-500  font-normal font-sans items-center "><MdOutlineAlternateEmail className='text-blue-700'/>info@aira.org</a>

                </div>


            </div>

        </div>

    </div>
  )
}

export default LandingPage