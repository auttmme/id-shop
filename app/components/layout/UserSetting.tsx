"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PrimaryBtn from "../PrimaryButton";
import LanguageSelector from "../LanguageSelector";

function UserSetting() {
  return (
    <Flex gap={4} alignItems="center" width={"100%"} justifyContent="flex-end">
      <LanguageSelector />
      <Button
        variant="ghost"
        size={{ base: "sm", md: "md" }}
        color="primary.1"
        _hover={{ bgColor: "primary.30" }}
      >
        Masuk
      </Button>
      <PrimaryBtn size={{ base: "sm", md: "md" }} text="Daftar" />
    </Flex>
  );
}

export default UserSetting;
