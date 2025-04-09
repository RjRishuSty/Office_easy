import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import UserRating from "../UserRating/UserRating";

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
            <>
              <Card
                sx={{
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={item.img}
                  alt=" Property Space"
                  sx={{
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "brightness(85%)",
                    transition:
                      "transform 0.4s ease-in-out, filter 0.3s ease-in-out",
                    transform: "scale(1)",
                    "&:hover": {
                      filter: "brightness(100%)",
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "primary.light",
                    py: 3,
                  }}
                >
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: isMobile ? "1.5rem" : "1rem",
                      fontWeight: 700,
                      textAlign: "center",
                      textTransform: "uppercase",
                      color: "text.secondary",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: isMobile ? "1rem" : "0.8rem",
                      fontWeight: 500,
                      textAlign: "center",
                      textTransform: "capitalize",
                      color: "#fff",
                    }}
                  >
                    {item.status}
                  </Typography>
                </Box>
              </Card>
            </>
          ) : isTestimonial ? (
            <>
              <Card
                sx={{
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      sx: {
                        fontSize: "6rem",
                        color: "text.secondary",
                        mr: 0.5,
                      },
                    })}
                    <Box
                      sx={{
                        mt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          color: "text.primary",
                          fontWeight: 700,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <Chip
                          label={item.location}
                          variant="filled"
                          sx={{
                            color: "#fff",
                            fontSize: "0.9rem",
                            mr: 1,
                            backgroundColor: "primary.light",
                          }}
                        />
                        <UserRating rating={item.rating} />
                      </Box>
                    </Box>
                  </Box>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "1rem",
                      textAlign: "start",
                      color: "text.light",
                    }}
                  >
                    {item.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </>
          ) : (
            <img
              loading="lazy"
              src={item.img}
              alt="office"
              style={{
                width: isWhatWeDo ? "auto" : "100%",
                height: "50vh",
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
