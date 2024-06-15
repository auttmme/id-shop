import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Privacy() {
  const providers = [
    {
      title: "iso",
      src: "/images/iso.png",
    },
    {
      title: "visa",
      src: "/images/visa-2.png",
    },
  ];
  return (
    <Box>
      <Text size={"2xl"} fontWeight={"500"} mb={2} color={"neutral.1"}>
        Jasa Pengiriman
      </Text>
      <Flex gap={2}>
        {providers.map((item, index) => (
          <Center
            bgColor={"neutral.40"}
            borderRadius={"5px"}
            px={8}
            py={4}
            key={index}
          >
            <Image src={item.src} alt={item.title} objectFit={"cover"} />
          </Center>
        ))}
      </Flex>
    </Box>
  );
}

export default Privacy;
