import React from 'react'
import image8 from './image8.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'


const SliderItem3 = () => {
    const [backgroundStyle, setBackgroundStyle] = useState({
        backgroundImage: `url(${image8})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
    })
    return (
        <div className="rounded-[20px] flex flex-col justify-end  h-[25rem] transition-all duration-750 group" style={backgroundStyle} onMouseEnter={() => setBackgroundStyle(prev => {
          return {...prev, backgroundSize: '120%'}
        })} onMouseLeave={() => setBackgroundStyle(prev => {
          return {...prev, backgroundSize: '100%'}
        })}>
          <div className="bg-white rounded-t-[70px] rounded-b-[8px] flex flex-col items-center justify-center p-8 gap-4 transition duration-750 translate-y-24 group-hover:translate-y-0">
            <strong className="text-2xl">
              We just replicate dew
            </strong>

            <p className='text-2xl px-16 text-gray-500'>We just replicate dew, and bring you an abudant amount of water</p>
            <button className='text-sky-700 rounded-full text-xl mt-4 bg-sky-100 p-8 py-4'>Read more </button>
          </div>
        </div>  )
}

export default SliderItem3