import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import desert from './desert.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* first */}
      <SwiperSlide>
      <img src={desert} alt="desert-image"  className='ml-[60px] rounded-xl'/>
      <div className=" flex flex-col bg-white w-[625px] ml-[60px] h-[160px] relative bottom-[160px] rounded-t-[70px]  pt-[20px] transition-transform duration-250 hover:-translate-y-20 hover:h-[250px] ">
        <strong className="text-3xl">
          We make desert life easy
        </strong>


      <p className='flex flex-col text-2xl pt-[10px]'>We just replicate dew, and bring<span>you an abudant amount of water</span></p>
      {/* <button className='text-sky-700 text-xl rounded-xl '>Read more </button> */}
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <img src={desert} alt="desert-image"  className='ml-[60px] rounded-xl'/>
      <div className="flex flex-col group bg-white w-[625px] ml-[60px] h-[160px] relative bottom-[160px] rounded-t-[70px]  pt-[20px]">
        <strong className="text-3xl">
          We make desert life easy
        </strong>
        <p className='flex flex-col text-2xl pt-[10px]'>We just replicate dew, and bring<span>you an abudant amount of water</span></p>

      </div>

      </SwiperSlide>
      <SwiperSlide>
      <img src={desert} alt="desert-image"  className='ml-[60px] rounded-xl'/>
      <div className="flex flex-col bg-white  w-[625px] ml-[60px] h-[160px] relative bottom-[160px] rounded-t-[70px]  pt-[20px]">
        <strong className="text-3xl">
          We make desert life easy
        </strong>
        <p className='flex flex-col text-2xl pt-[10px]'>We just replicate dew, and bring<span>you an abudant amount of water</span></p>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <img src={desert} alt="desert-image"  className='ml-[60px] rounded-xl'/>
      <div className="flex flex-col bg-white w-[625px] ml-[60px] h-[160px] relative bottom-[160px] rounded-t-[70px]  pt-[20px]">
        <strong className="text-3xl">
          We make desert life easy
        </strong>
        <p className='flex flex-col text-2xl pt-[10px]'>We just replicate dew, and bring<span>you an abudant amount of water</span></p>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <img src={desert} alt="desert-image"  className='ml-[60px] rounded-xl'/>
      <div className="flex flex-col bg-white w-[625px] ml-[60px] h-[160px] relative bottom-[160px] rounded-t-[70px]  pt-[20px]">
        <strong className="text-3xl">
          We make desert life easy
        </strong>
        <p className='flex flex-col text-2xl pt-[10px]'>We just replicate dew, and bring<span>you an abudant amount of water</span></p>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <img src={desert} alt="desert-image"  className='ml-[60px] rounded-xl'/>
      <div className="flex flex-col bg-white w-[625px] ml-[60px] h-[160px] relative bottom-[160px] rounded-t-[70px]  pt-[20px]">
        <strong className="text-3xl">
          We make desert life easy
        </strong>
        <p className='flex flex-col text-2xl pt-[10px]'>We just replicate dew, and bring<span>you an abudant amount of water</span></p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src={desert} alt="desert-image"  className='ml-[60px] rounded-xl'/>
      <div className="flex flex-col bg-white w-[625px] ml-[60px] h-[160px] relative bottom-[160px] rounded-t-[70px]  pt-[20px]">
        <strong className="text-3xl">
          We make desert life easy
        </strong>
        <p className='flex flex-col text-2xl pt-[10px]'>We just replicate dew, and bring<span>you an abudant amount of water</span></p>
      </div>

      </SwiperSlide>

    </Swiper>
  );
};