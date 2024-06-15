import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Copyright() {
  const socialMedia = [
    {
      title: "tiktok",
      src: "/images/tiktok.png",
    },
    {
      title: "instagram",
      src: "/images/instagram.png",
    },
    {
      title: "youtube",
      src: "/images/youtube.png",
    },
    {
      title: "facebook",
      src: "/images/facebook.png",
    },
  ];

  return (
    <Flex
      justifyContent={{ base: "flex-start", md: "space-between" }}
      alignItems={{ base: "start", md: "center" }}
      direction={{ base: "column", md: "row" }}
    >
      <Text
        color={"neutral.1"}
        fontWeight={"500"}
        fontSize={"sm"}
        mb={{ base: 2, md: 0 }}
      >
        &#169; idshop 2024. Hak Cipta Dilindungi
      </Text>
      <Box>
        <Text fontWeight={"500"} mb={2}>
          Ikuti Kami
        </Text>
        <Flex gap={2}>
          {socialMedia.map((item, index) => (
            <Image key={index} src={item.src} alt={item.title} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Copyright;
