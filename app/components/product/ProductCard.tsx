import { Box, Card, Image, Stack, Text, Flex } from "@chakra-ui/react";
import React from "react";

interface ProductProps {
  title: string;
  image: string;
  price: string;
  sold?: string;
  discount?: string;
}

function ProductCard({ title, image, price, sold, discount }: ProductProps) {
  return (
    <Box p={4} position={"relative"} bgColor={"neutral.40"} w={"160px"}>
      <Flex
        direction="column"
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
      >
        <Image
          src={image}
          alt={title}
          w="150px"
          h="150px"
          objectFit={"cover"}
        />
        <Stack mt={4} gap={1}>
          <Text>{title}</Text>
          <Text fontWeight={"500"}>{price}</Text>
        </Stack>
        <Text
          mt={4}
          color={"neutral.10"}
          fontWeight={"500"}
          alignSelf={"flex-end"}
        >
          {sold}
        </Text>
      </Flex>
      <Box
        borderTopLeftRadius={"2px"}
        borderBottomLeftRadius={"2px"}
        bgColor={"primary.1"}
        color={"white"}
        px={3}
        position={"absolute"}
        right={0}
        top={2}
        z-index={100}
      >
        <Text fontWeight={"500"}>{discount}</Text>
      </Box>
    </Box>
  );
}

export default ProductCard;
