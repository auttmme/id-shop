import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Expedition() {
  const expeditions = [
    {
      title: "JNE",
      src: "/images/jne.png",
    },
    {
      title: "sicepat",
      src: "/images/sicepat.png",
    },
    {
      title: "J&T",
      src: "/images/jnt.png",
    },
    {
      title: "gosend",
      src: "/images/gosend.png",
    },
    {
      title: "grab express",
      src: "/images/grab.png",
    },
  ];

  return (
    <Box>
      <Text size={"2xl"} fontWeight={"500"} mb={2} color={"neutral.1"}>
        Jasa Pengiriman
      </Text>
      <SimpleGrid spacing={2} columns={{ base: 3, md: 6, lg: 10 }}>
        {expeditions.map((item, index) => (
          <Center
            bgColor={"neutral.40"}
            borderRadius={"5px"}
            py={4}
            key={index}
          >
            <Image
              src={item.src}
              alt={item.title}
              min-w="auto"
              max-w="80px"
              height={"25px"}
              objectFit={"contain"}
            />
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Expedition;
