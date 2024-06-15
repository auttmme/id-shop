import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function PromoCard() {
  return (
    <Stack gap={4}>
      <Card
        bgColor="secondary.1"
        borderRadius="10px"
        p={4}
        direction={{ base: "column", md: "row" }}
      >
        <Image
          src="/images/promo-1.jpg"
          alt="payday sale promo"
          width={{ base: "100%", md: "40%" }}
          height="200px"
          objectFit={"cover"}
        />
        <CardBody>
          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            height={"100%"}
            gap={6}
          >
            <Heading fontWeight={"400"}>PAY DAY SALE!!</Heading>
            <Text color={"neutral.10"}>
              Nikmati promo spektakuler{" "}
              <Text as={"span"} color="primary.1">
                idshop
              </Text>{" "}
              setiap tanggal 25!
            </Text>
            <Button
              width={"100%"}
              color="white"
              bgColor={"primary.1"}
              _hover={{ bgColor: "primary.1" }}
            >
              Ikuti Event
            </Button>
          </Flex>
        </CardBody>
      </Card>
      <Card
        bgColor="primary.1"
        borderRadius="10px"
        p={4}
        direction={{ base: "column", md: "row" }}
      >
        <Image
          src="/images/promo-2.jpg"
          alt="payday sale promo"
          width={{ base: "100%", md: "40%" }}
          height="200px"
          objectFit={"cover"}
        />
        <CardBody>
          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            height={"100%"}
            gap={6}
          >
            <Heading fontWeight={"400"} color={"secondary.1"}>
              GRATIS ONGKIR 50%
            </Heading>
            <Text color={"neutral.30"}>
              Klaim voucher gratis ongkos kirim Kamu.
            </Text>
            <Button
              width={"100%"}
              color="white"
              bgColor={"secondary.1"}
              _hover={{ bgColor: "secondary.1" }}
            >
              Klaim Voucher
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Stack>
  );
}

export default PromoCard;
