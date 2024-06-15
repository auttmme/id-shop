import { Divider, Stack } from "@chakra-ui/react";
import React from "react";
import Navigation from "./Navigation";
import PaymentMethod from "./PaymentMethod";
import Expedition from "./Expedition";
import Privacy from "./Privacy";
import Copyright from "./Copyright";

function Footer() {
  return (
    <Stack gap={6} mt={"100px"} px={{ base: "16px", md: "40px", lg: "116px" }}>
      <Navigation />
      <Stack gap={4}>
        <PaymentMethod />
        <Expedition />
        <Privacy />
      </Stack>
      <Divider bgColor={"neutral.20"} height={"1px"} />
      <Copyright />
    </Stack>
  );
}

export default Footer;
