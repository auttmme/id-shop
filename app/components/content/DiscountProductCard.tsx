"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../data.json";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Grid,
  Flex,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import ProductCard from "../product/ProductCard";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function DiscountProductCard() {
  const { Discount } = data;

  return (
    <Card bgColor="neutral.40" borderRadius="10px" p={4}>
      <CardHeader>
        <Flex justifyContent={"space-between"}>
          <Heading size={"lg"}>Diskon Hari Ini</Heading>
          <Text fontWeight={"500"} color={"primary.1"}>
            Lihat Semua
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          rewind
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
        >
          {Discount.map((item, index) => (
            <SwiperSlide key={index}>
              <Center>
                <ProductCard
                  title="Nama Produk"
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  imgWidth="150px"
                  imgHeigth="150px"
                />
              </Center>
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
      </CardBody>
    </Card>
  );
}

export default DiscountProductCard;
