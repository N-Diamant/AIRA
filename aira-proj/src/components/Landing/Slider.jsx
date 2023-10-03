import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderItem from './SliderItem';
import SliderItem2 from './SliderItem2';
import SliderItem3 from './SliderItem3';
import SliderItem4 from './SliderItem4';


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
      className="!mx-16 mt-[3rem]  "
    >
      <SwiperSlide>
        <SliderItem />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem2 />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem3/>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem4 />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem />
      </SwiperSlide>
    </Swiper>
  );
};