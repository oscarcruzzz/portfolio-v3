import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <figure>
          <img src="https://via.placeholder.com/670x450" alt="car"/>
          <figcaption></figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src="https://via.placeholder.com/650x450" alt="house" />
          <figcaption></figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src="https://via.placeholder.com/750x505" alt="horse" />
          <figcaption></figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src="https://via.placeholder.com/450x450" alt="movie" />
          <figcaption></figcaption>
        </figure>
      </SwiperSlide>      
    </Swiper>
  )
}

export default Slider
