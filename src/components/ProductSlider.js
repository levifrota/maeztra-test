import React, { useEffect, useState } from 'react';
import '../styles/ProductSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Product1 from '../assets/308x381.png';
import Product2 from '../assets/308x381-2.png';

function ProductSlider() {
  const products = [
    {
      id: '1',
      price: 'R$ 500,00',
      title:'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      image: Product1
    },
    {
      id: '2',
      price: 'R$ 320,00',
      title:'Ruched Rose Print Mini Skirt',
      description: 'A scontaineratin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      image: Product2
    },
    {
      id: '3',
      price: 'R$ 500,00',
      title:'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      image: Product1
    },
    {
      id: '4',
      price: 'R$ 320,00',
      title:'Ruched Rose Print Mini Skirt',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      image: Product2
    },
    {
      id: '5',
      price: 'R$ 500,00',
      title:'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      image: Product1
    },
    {
      id: '6',
      price: 'R$ 320,00',
      title:'Ruched Rose Print Mini Skirt',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      image: Product2
    },
  ]

  return (
    <div className='product-slider'>
      <h2>As Mais Pedidas</h2>
      <Swiper
        slidesPerView={5}
        navigation
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={Autoplay}
        >
        {products.map( (item) => (
          <SwiperSlide key={item.id}>
          <div className='banner-wrapper'>
              <img src={item.image} alt="Maeztra" className='slide-item'></img>
              <div className='product-info'>
                <p>{item.price}</p>
                <p>{item.title}</p>
                <p>{item.description}</p>

              </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSlider;