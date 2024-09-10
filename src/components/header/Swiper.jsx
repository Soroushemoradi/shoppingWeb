import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperData from './SwiperData'
import './header.css'
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
                className="mySwiper bg-body mb-5 rounded-4"

            >
                {
                    SwiperData.map(({ src }) => <React.Fragment key={src}><SwiperSlide>
                        <img src={src} className='w-100 h-100 carusell-img' alt="chairs-image" />
                    </SwiperSlide></React.Fragment>)
                }
                
            </Swiper>
        </>
    )
}

export default SwiperCar