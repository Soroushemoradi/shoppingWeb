import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperData from './SwiperData'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function SwiperCar() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bg-body mb-5 rounded-4 mb-4"
            >
                {/* {
                SwiperData.map(({src})=><React.Fragment key={src}><SwiperSlide>
                    <img src={src} className='w-100 h-100 carusell-img' alt="chairs-image" />
                    </SwiperSlide></React.Fragment>)
            } */}
                <SwiperSlide>
                    <img src='swiper-img1.jpg' className='w-100 h-100 carusell-img' alt="chairs-image"  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='swiper-img2.jpg' className='w-100 h-100 carusell-img' alt="chairs-image" height={600}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='swiper-img3.jpg' className='w-100 h-100 carusell-img' alt="chairs-image"  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='swiper-img4.jpg' className='w-100 h-100 carusell-img' alt="chairs-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='swiper-img5.jpg' className='w-100 h-100 carusell-img' alt="chairs-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='swiper-img6.jpg' className='w-100 h-100 carusell-img' alt="chairs-image" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperCar