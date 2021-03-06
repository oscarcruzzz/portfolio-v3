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
      spaceBetween={20}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      className="is-flex is-align-items-center"
    >
      <SwiperSlide>
        <figure>
          <h3><a href="https://google.com">Lorem</a></h3>
          <img src="https://via.placeholder.com/670x450/red" alt="car"/>
          <figcaption>Lorem</figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <h3><a href="https://google.com">Lorem</a></h3>
          <img src="https://via.placeholder.com/650x450/black" alt="house" />
          <figcaption>Lorem</figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <h3><a href="https://google.com">Lorem</a></h3>
          <img src="https://via.placeholder.com/750x505/c840d1" alt="horse" />
          <figcaption>Lorem</figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <h3><a href="https://google.com">Lorem</a></h3>
          <img src="https://via.placeholder.com/450x450/50541a" alt="movie" />
          <figcaption>Lorem</figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  )
}

export default Slider
