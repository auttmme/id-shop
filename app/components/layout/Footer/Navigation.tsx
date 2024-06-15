import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Navigation() {
  const layananPelanggan = [
    "Pusat Bantuan",
    "Cara Pengembalian",
    "Pengiriman",
    "Pengembalian Barang dan Dana",
    "Metode Pembayaran",
    "Hubungi Kami",
  ];
  const jelajah = [
    "Tentang Kami",
    "Kebijakan Privasi",
    "Karir",
    "Blog",
    "idshop Security",
    "id Mall",
  ];

  return (
    <SimpleGrid
      columns={{ base: 2, md: 3 }}
      gap={8}
      width={{ base: "100%", md: "80%" }}
    >
      <Box>
        <Text size={"2xl"} fontWeight={"500"} mb={4} color={"neutral.1"}>
          Layanan Pelanggan
        </Text>
        <Stack gap={1}>
          {layananPelanggan.map((item, index) => (
            <Box
              borderBottom={"1px"}
              py={1}
              borderColor={"neutral.20"}
              key={index}
              width={"100%"}
            >
              <Text>{item}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box>
        <Text size={"2xl"} fontWeight={"500"} mb={4} color={"neutral.1"}>
          Jelajahi idshop
        </Text>
        <Stack gap={1}>
          {jelajah.map((item, index) => (
            <Box
              borderBottom={"1px"}
              py={1}
              borderColor={"neutral.20"}
              key={index}
              width={"100%"}
            >
              <Text>{item}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box>
        <Text size={"2xl"} fontWeight={"500"} mb={4} color={"neutral.1"}>
          Layanan Pelanggan
        </Text>
        <Image
          src="images/download-source.png"
          alt="google play and app store"
        />
      </Box>
    </SimpleGrid>
  );
}

export default Navigation;
