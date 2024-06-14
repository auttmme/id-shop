import React from "react";
import { Recommendation } from "../data.json";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

function HomeWrapper() {
  return (
    <Box>
      <Text>{Recommendation[0].title}</Text>
      <Image src={Recommendation[0].image} alt="alt" width={200} height={200} />
    </Box>
  );
}

export default HomeWrapper;
