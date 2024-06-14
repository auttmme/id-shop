import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import PrimaryBtn from "../PrimaryButton";

function Navbar() {
  return (
    <Flex alignItems={"center"} gap={{ base: 4, md: 10 }}>
      <Image
        src="/logo-id-shop.svg"
        alt="logo id shop"
        width={{ base: "100px", md: "170px" }}
      />
      <InputGroup
        size={{ base: "md", md: "lg" }}
        w={{ base: "60%", md: "80%" }}
      >
        <Input placeholder="Cari di idshop" />
        <InputRightElement mr={3}>
          <PrimaryBtn text="Cari" h="2rem" w="50px" size="sm" />
        </InputRightElement>
      </InputGroup>
      <Image src="/cart-icon.svg" alt="cart" />
    </Flex>
  );
}

export default Navbar;
