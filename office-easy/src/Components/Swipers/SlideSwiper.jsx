import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Styles from "./SlideSwiper.module.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SlideSwiper = ({ sliderData }) => {

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <img
             loading="lazy"
              src={item.img}
              alt="office"
              style={{
                width: "100%",
                height: "50vh",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(80%)",
                borderRadius:30,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SlideSwiper;
