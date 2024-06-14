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

function UserSetting() {
  const languages = ["Bahasa Indonesia", "English"];
  const [language, setLanguage] = useState("Bahasa Indonesia");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguage = (language: string) => {
    setLanguage(language);
  };

  return (
    <Flex gap={4} alignItems="center" width={"100%"} justifyContent="flex-end">
      <Menu>
        <MenuButton
          as={Button}
          onClick={() => setIsOpen(!isOpen)}
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          variant="outline"
          _hover={{ bgColor: "transparent" }}
        >
          <Flex gap={2}>
            <Image
              src={"/language-icon.svg"}
              width={18}
              height={18}
              alt="language icon"
            />
            <Text>{language}</Text>
          </Flex>
        </MenuButton>
        <MenuList>
          {languages.map((language, index) => (
            <MenuItem key={index} onClick={() => handleLanguage(language)}>
              {language}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
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
