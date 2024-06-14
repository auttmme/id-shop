import { Stack } from "@chakra-ui/react";
import React from "react";
import UserSetting from "./UserSetting";
import Navbar from "./Navbar";

function Header() {
  return (
    <Stack p={4} gap={4} border="1px" borderColor="neutral.20">
      <UserSetting />
      <Navbar />
    </Stack>
  );
}

export default Header;
