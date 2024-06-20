"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import PrimaryBtn from "../PrimaryButton";
import { ArrowBackIcon, HamburgerIcon } from "@chakra-ui/icons";
import LanguageSelector from "../LanguageSelector";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        alignItems={"center"}
        gap={{ base: 4, md: 10 }}
        display={["none", "none", "flex", "flex"]}
      >
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
      {/* mobile nav */}
      <Flex
        display={["flex", "flex", "none", "none"]}
        alignItems={"center"}
        gap={8}
      >
        <Input placeholder="Cari di idshop" w={"80%"} />
        <Image src="/cart-icon-2.svg" alt="cart" />
        <HamburgerIcon
          width={"24px"}
          height={"24px"}
          onClick={onOpen}
          color={"primary.1"}
        />
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent p={4}>
          <DrawerHeader mb={10}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Image
                src="/logo-id-shop.svg"
                alt="logo id shop"
                width={{ base: "100px", md: "170px" }}
              />
              <ArrowBackIcon
                width={"24px"}
                height={"24px"}
                color={"primary.1"}
                onClick={onClose}
              />
            </Flex>
          </DrawerHeader>
          <Flex direction={"column"} justifyContent={"space-between"} h="100%">
            <LanguageSelector />
            <Stack>
              <PrimaryBtn text="Daftar" />
              <Button
                variant="ghost"
                size={{ base: "sm", md: "md" }}
                color="primary.1"
                _hover={{ bgColor: "primary.30" }}
              >
                Masuk
              </Button>
            </Stack>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
