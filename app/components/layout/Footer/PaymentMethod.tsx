import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function PaymentMethod() {
  const paymentMethods = [
    {
      title: "BCA",
      src: "/images/BCA.png",
    },
    {
      title: "Mandiri",
      src: "/images/mandiri.png",
    },
    {
      title: "BRI",
      src: "/images/BRI.png",
    },
    {
      title: "BNI",
      src: "/images/BNI.png",
    },
    {
      title: "Gopay",
      src: "/images/gopay.png",
    },
    {
      title: "Dana",
      src: "/images/dana.png",
    },
    {
      title: "Alfamart",
      src: "/images/alfamart.png",
    },
    {
      title: "Visa",
      src: "/images/visa.png",
    },
    {
      title: "Mastercard",
      src: "/images/mastercard.png",
    },
  ];

  return (
    <Box>
      <Text size={"2xl"} fontWeight={"500"} mb={2} color={"neutral.1"}>
        Metode Pembayaran
      </Text>
      <SimpleGrid spacing={2} columns={{ base: 3, md: 6, lg: 10 }}>
        {paymentMethods.map((item, index) => (
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

export default PaymentMethod;
