"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import data from "../../data.json";

function CategoryCard() {
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4, xl: 6 }) ?? 2;
  const { Categories } = data;

  return (
    <Card bgColor="neutral.40" borderRadius="10px">
      <CardHeader>
        <Heading size={"lg"}>Kategori</Heading>
      </CardHeader>
      <CardBody>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
        >
          {Categories.map((item, index) => {
            const isLastRow =
              Math.floor(index / columns) ===
              Math.floor((Categories.length - 1) / columns);
            const isLastColumn = (index + 1) % columns === 0;

            return (
              <Box
                key={index}
                py={6}
                px={2}
                borderBottom={isLastRow ? "none" : "1px solid #AFB1B6"}
                borderRight={isLastColumn ? "none" : "1px solid #AFB1B6"}
              >
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  gap={3}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={{ base: "40px", lg: "80px" }}
                    height={{ base: "40px", lg: "80px" }}
                  />
                  <Text textAlign={"center"} fontWeight={"500"}>
                    {item.title}
                  </Text>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
