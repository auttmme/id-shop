import { Card, CardBody, CardHeader, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import data from "../../data.json";
import ProductCard from "../product/ProductCard";

function RecommendationProductCard() {
  const { Recommendation } = data;

  return (
    <Card bgColor={"transparent"} boxShadow={"none"}>
      <CardHeader>
        <Heading size={"lg"}>Rekomendasi Untuk Kamu</Heading>
      </CardHeader>
      <CardBody padding={0}>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={5}
        >
          {Recommendation.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
              sold={item.sold}
              discount={item.discount}
              imgWidth="100%"
              imgHeigth="200px"
            />
          ))}
        </Grid>
      </CardBody>
    </Card>
  );
}

export default RecommendationProductCard;
