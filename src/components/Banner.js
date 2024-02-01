import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Banner1 from '../assets/ftECh3G.png.png'
import Banner2 from '../assets/ftECh3G-2.png'

function Banner() {
  const [responsiveSlide, setResponsiveSlide] = useState(Banner1)
  const images = [
    { id: '1', image: responsiveSlide},
    { id: '2', image: responsiveSlide},
    { id: '3', image: responsiveSlide},
  ]

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 720) {
        setResponsiveSlide(Banner2);
      } else {
        setResponsiveSlide(Banner1);
      }

    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  });


  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      modules={Autoplay}
      >
      {images.map( (item) => (
        <SwiperSlide key={item.id}>
        <div className='banner-wrapper'>
            <img src={item.image} alt="Maeztra" className='slide-item'></img>
            <div className='banner-title'>
              <h1>Promoções de Outono</h1>
              <h3>Confiras os melhores looks para combinar com você nesse Outono</h3>
              <button>Conferir</button>
            </div>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner;
