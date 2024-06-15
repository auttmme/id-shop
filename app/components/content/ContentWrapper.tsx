import React from "react";
import { Stack } from "@chakra-ui/react";
import BannerCarousel from "../BannerCarousel";
import CategoryCard from "./CategoryCard";
import DiscountProductCard from "./DiscountProductCard";
import BillsCard from "./BillsCard";
import PromoCard from "./PromoCard";
import RecommendationProductCard from "./RecommendationProductCard";

function ContentWrapper() {
  return (
    <Stack
      px={{ base: "16px", md: "40px", lg: "116px" }}
      pt={10}
      gap={{ base: 5, lg: 10 }}
    >
      <BannerCarousel />
      <CategoryCard />
      <BillsCard />
      <PromoCard />
      <DiscountProductCard />
      <RecommendationProductCard />
    </Stack>
  );
}

export default ContentWrapper;
