"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Box, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function BannerCarousel() {
  const banners = [
    "/images/banner-1.jpg",
    "/images/banner-2.jpg",
    "/images/banner-3.jpg",
  ];

  return (
    <Box>
      <Swiper
        className="swiper"
        rewind
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box>
              <Image
                src={banner}
                alt={`banner carousel image ${index + 1}`}
                width="100%"
                height={{ base: "200px", md: "300px", lg: "400px" }}
                objectFit={"cover"}
                borderRadius={"md"}
              />
            </Box>
          </SwiperSlide>
        ))}
        <Box className="swiper-button-prev">
          <ChevronLeftIcon
            w={6}
            h={6}
            bgColor={"transparent"}
            color={"white"}
            _hover={{ color: "white" }}
          />
        </Box>
        <Box className="swiper-button-next">
          <ChevronRightIcon
            w={6}
            h={6}
            bgColor={"transparent"}
            color={"white"}
            _hover={{ color: "white" }}
          />
        </Box>
      </Swiper>
    </Box>
  );
}

export default BannerCarousel;
