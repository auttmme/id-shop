"use client";

import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  Flex,
  MenuList,
  MenuItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

function LanguageSelector() {
  const languages = ["Bahasa Indonesia", "English"];
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguage = (newLanguage: string) => {
    changeLanguage(newLanguage);
  };

  return (
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
  );
}

export default LanguageSelector;
