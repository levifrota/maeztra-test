import React, { useEffect, useState } from 'react';
import '../styles/MaeztraBrandsSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Brand1 from '../assets/comma.png';
import Brand2 from '../assets/melissa.png';
import Brand3 from '../assets/forever21.png';
import Brand4 from '../assets/zara.png';
import Brand5 from '../assets/ann-taylor.png';
import Icon1 from '../assets/Tipbar01.png';
import Icon2 from '../assets/Tipbar02.png';
import Icon3 from '../assets/Tipbar03.png';
import Icon4 from '../assets/Tipbar04.png';
import Icon5 from '../assets/Tipbar05.png';


function MaeztraBrandsSlider() {
  const [slidesPerView, setSlidesPerView] = useState(5)
  const applySpaceBetween = true;

  const brands = [
    { id: '1', image: Brand1 },
    { id: '2', image: Brand2 },
    { id: '3', image: Brand3 },
    { id: '4', image: Brand4 },
    { id: '5', image: Brand5 },
  ];

  const maeztraSlides = [
    { id: '1', image: Icon5, title: 'Produtos importados', subtitle: 'Produtos de Alta Qualidade' },
    { id: '1', image: Icon4, title: 'Estoque no Brazil', subtitle: 'Produtos mais perto de você!' },
    { id: '1', image: Icon3, title: 'Trocas Garantidas', subtitle: 'Trocas em até 48 horas, veja as regras' },
    { id: '1', image: Icon2, title: 'Ganhe 5% off', subtitle: 'Pagando à vista no Cartão' },
    { id: '1', image: Icon1, title: 'Frete Grátis', subtitle: 'Em compras acima de R$ 499,00' },
  ]

    useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 540) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(5);
      }

    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  });
  return (
    <div className='maeztra-brands-slider'>
      <div className="buy-maeztra">
        <h3 className='title1'>Por que comprar na Maeztra?</h3>  
        <Swiper
        slidesPerView={slidesPerView}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={Autoplay}
        spaceBetween={applySpaceBetween ? 7 : 0}
        grabCursor={true}
        className='maeztra-swiper'
        >
        {maeztraSlides.map( (item) => ( 
          <SwiperSlide key={item.id}>
          <div className='maeztra-wrapper'>
              <img src={item.image} alt="Marcas" className='slide-item'></img>
              <div className='maeztra-info'>
                <strong className='maeztra-title'>{item.title}</strong>
                <p className='maeztra-subtitle'>{item.subtitle}</p>
              </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
      <div className='brands-slider'>
        <h2 className='title2'>Marcas Parceiras</h2>
        <Swiper
          slidesPerView={slidesPerView}
          autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          modules={Autoplay}
          spaceBetween={applySpaceBetween ? 30 : 0}
          grabCursor={true}
        >
        {brands.map( (item) => (
          <SwiperSlide key={item.id}>
            <div className='brands-wrapper'>
                <img src={item.image} alt="Marcas" className='brand-item'></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default MaeztraBrandsSlider;