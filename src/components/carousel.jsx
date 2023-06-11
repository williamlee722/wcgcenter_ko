import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './carousel.css';

import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.png'

import slider1m from '../images/slider1m.jpg'
import slider2m from '../images/slider2m.png'

function Slider() {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]} preventClicks={false} preventClicksPropagation={false} speed={2500} touchMoveStopPropagation={false} slidesPerView={1} navigation autoplay={{ delay: 5000, disableOnInteraction: false,
      pauseOnMouseEnter: true, }} pagination={{ clickable: true }} >
      <SwiperSlide>
        <img className="swiper-img" src={slider1} alt="slide 1" />
        <img className="swiper-img-mobile" src={slider1m} alt="slide 1" />
    </SwiperSlide>
    <SwiperSlide>
      <div className='swiper-img'>
        <img className="swiper-png" src={slider2} alt="slide 2"/>
        <div className='swiper-text'>
          <p className='swiper-title'><span>하지정맥류란?</span></p>
          <p className='swiper-body'><span className='swiper-highlight'>하지정맥류</span><span>는 주로 몸이 무겁거나 피로하거나,<br/>하반신이 쑤시는 등의 증상으로 나타납니다.<br/>오래 서 있거나 앉아 있으면 통증이 심해집니다.</span></p>
          <a className="linkfromslide" href='/kr/about'>더 보기</a>
        </div>
      </div>
      <div className='swiper-img-mobile'>
        <img className="swiper-png" src={slider2m} alt="slide 2"/>
        <div className='swiper-text'>
          <p className='swiper-title'><span>하지정맥류란?</span></p>
          <p className='swiper-body'><span className='swiper-highlight'>하지정맥류</span><span>는 주로 몸이 무겁거나 피로하거나,<br/>하반신이 쑤시는 등의 증상으로 나타납니다.<br/>오래 서 있거나 앉아 있으면 통증이 심해집니다.</span></p>
          <a className="linkfromslide-mobile" href='/kr/about'>더 보기</a>
        </div>
      </div>
    </SwiperSlide>
    </Swiper>
  );
}

export default Slider;