import React from "react";
import { Recommendation } from "../../data.json";
import { Box, Text, Image } from "@chakra-ui/react";
import BannerCarousel from "../BannerCarousel";
import CategoryCard from "./CategoryCard";

function ContentWrapper() {
  return (
    <Box px={{ base: "16px", md: "40px", lg: "116px" }} pt={10}>
      <BannerCarousel />
      <CategoryCard />
    </Box>
  );
}

export default ContentWrapper;
