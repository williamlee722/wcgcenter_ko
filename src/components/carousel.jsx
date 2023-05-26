import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './carousel.css';

import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'

export default () => {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]} speed={2500} touchMoveStopPropagation={false} slidesPerView={1} navigation autoplay={{ delay: 5000, disableOnInteraction: false,
      pauseOnMouseEnter: true, }} pagination={{ clickable: true }} >
      <SwiperSlide>
        <img className="swiper-img" src={slider1} alt="slide 1" />
    </SwiperSlide>
    <SwiperSlide>
        <img className="swiper-img" src={slider2} alt="slide 2"/>
    </SwiperSlide>
    </Swiper>
  );
};