import React, { useEffect, useState } from 'react';
import '../styles/ProductSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Product1 from '../assets/308x381.png';
import Product2 from '../assets/308x381-2.png';
import color1 from '../assets/colors1.svg';
import color2 from '../assets/colors2.svg';

const ProductSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);
  const products = [
    {
      id: '1',
      color: color1,
      price: 'R$ 500,00',
      title: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      image: Product1,
    },
    {
      id: '2',
      color: color2,
      price: 'R$ 320,00',
      title: 'Ruched Rose Print Mini Skirt',
      description:
        'A scontaineratin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      image: Product2,
    },
    {
      id: '3',
      color: color1,
      price: 'R$ 500,00',
      title: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      image: Product1,
    },
    {
      id: '4',
      color: color2,
      price: 'R$ 320,00',
      title: 'Ruched Rose Print Mini Skirt',
      description:
        'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      image: Product2,
    },
    {
      id: '5',
      color: color1,
      price: 'R$ 500,00',
      title: 'Faux Suede Mini Skirt',
      description:
        'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      image: Product1,
    },
    {
      id: '6',
      color: color2,
      price: 'R$ 320,00',
      title: 'Ruched Rose Print Mini Skirt',
      description:
        'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      image: Product2,
    },
  ];
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 540) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(5);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="product-slider">
      <h2 className="spotlight">As Mais Pedidas</h2>
      <Swiper
        className="swipperclass"
        slidesPerView={slidesPerView}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={Autoplay}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-banners">
              <img src={item.image} alt="Maeztra" className="slide-item"></img>
              <div className="product-info">
                <img src={item.color} alt="" />
                <p className="product-price">{item.price}</p>
                <p className="product-title">{item.title}</p>
                <p className="product-description">{item.description}</p>
                <button className="product-add">Adicionar</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
