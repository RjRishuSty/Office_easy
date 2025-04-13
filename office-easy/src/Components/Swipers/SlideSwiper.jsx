import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useMediaQuery } from "@mui/material";
import TestimonialCard from "../Cards/TestimonialCard";
import WhatWeDoCard from "../Cards/WhatWeDoCard";

const SlideSwiper = ({ sliderData, useIn }) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const isWhatWeDo = useIn === "whatWeDo";
  const isTestimonial = useIn === "testimonial";

  return (
    <Swiper
      slidesPerView={isWhatWeDo || isTestimonial ? (isMobile ? 1 : 3) : 1}
      spaceBetween={isWhatWeDo || isTestimonial ? (isMobile ? 30 : 30) : 0}
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
      style={{
        width: "100%",
        padding: isWhatWeDo || isTestimonial ? 50 : 0,
        cursor: "pointer",
      }}
    >
      {sliderData.map((item, index) => (
        <SwiperSlide key={index}>
          {isWhatWeDo ? (
            <WhatWeDoCard item={item} />
          ) : isTestimonial ? (
            <TestimonialCard item={item} />
          ) : (
            <img
              loading="lazy"
              src={item.img}
              alt="office"
              style={{

                width: isWhatWeDo ? "auto" : "100%",
                border:'2px solid red',
                height: "400px",
                objectFit: isWhatWeDo ? "contain" : "cover",
                objectPosition: "center",
                filter: "brightness(80%)",
                borderRadius: 30,
              }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideSwiper;
