import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import Rightswipe from './Images/Rightswipe.svg';
import Leftswipe from './Images/leftwipe.svg';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";  
import "./Carousel.css"

function Carousel ({navId,data}){
    const [swiperRef, setSwiperRef] = useState(null);
    const [slides, setSlides] = useState(
        Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`),
      );
    return(
        <div className="car_container">
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={8}
                spaceBetween={30}
                //navigation={true}
                navigation ={{nextEl: `.arrow-right-${navId}`, prevEl: `.arrow-left-${navId}`}}
                virtual
            >
            {data.map((pic) => (
                <SwiperSlide key={pic.id} >
                    <Card   
                        follows={pic.follows}
                        songsTitle={pic.title}
                        image={pic.image}
                    />
                </SwiperSlide>
            ))} 
            </Swiper>
            <div className={`arrow-left-${navId} arrow-left arrow`}><img src={Leftswipe} /></div>
            <div  className={`arrow-right-${navId} arrow-right arrow`}><img src={Rightswipe}  /></div> 
        </div>
    )
}
export default Carousel;