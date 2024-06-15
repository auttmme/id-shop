"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  TabList,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  CardHeader,
  Heading,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  TabIndicator,
  CardBody,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";

function BillsCard() {
  const tabs = [
    "Pulsa",
    "Paket data",
    "Listrik PLN",
    "Uang Elektronik",
    "Air PDAM",
  ];

  const listPulsa = ["10.000", "20.000", "50.000", "100.000"];
  const listPaketData = [
    "Paket Seminggu - 20.000",
    "Paket Bulanan - 50.000",
    "Paket Bulanan OMG - 78.000",
    "Paket Berkah - 54.000",
  ];

  const [pulsa, setPulsa] = useState(listPulsa[0]);
  const [paket, setPaket] = useState(listPaketData[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card bgColor="neutral.40" borderRadius="10px" p={4}>
      <CardHeader>
        <Heading size={"lg"}>Top Up dan Tagihan</Heading>
      </CardHeader>
      <CardBody>
        <Tabs position="relative" variant="unstyled">
          <TabList
            overflowX={"scroll"}
            sx={{
              scrollbarWidth: "none",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab key={index}>{tab}</Tab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="primary.1"
            borderRadius="1px"
          />
          <TabPanels>
            {/* panel pulsa */}
            <TabPanel p={0}>
              <Flex
                gap={4}
                alignItems={"center"}
                direction={{ base: "column", md: "row" }}
                mt={6}
              >
                <InputGroup width={{ base: "100%", lg: "50%" }}>
                  <InputLeftElement>
                    <Image src="/phone-icon.svg" alt="phone icon" />
                  </InputLeftElement>
                  <Input type="number" placeholder="Nomor Telpon" />
                </InputGroup>
                <Menu matchWidth>
                  <MenuButton
                    as={Button}
                    onClick={() => setIsOpen(!isOpen)}
                    rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    variant="outline"
                    _hover={{ bgColor: "transparent" }}
                    width={{ base: "100%", lg: "50%" }}
                  >
                    {pulsa}
                  </MenuButton>
                  <MenuList>
                    {listPulsa.map((pulsa, index) => (
                      <MenuItem key={index} onClick={() => setPulsa(pulsa)}>
                        {pulsa}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Button
                  variant={"outline"}
                  color="primary.1"
                  border={"2px"}
                  borderColor={"primary.1"}
                  borderRadius={"5px"}
                  _hover={{ bgColor: "primary.30" }}
                  width={{ base: "100%", lg: "initial" }}
                >
                  Beli
                </Button>
              </Flex>
            </TabPanel>
            <TabPanel p={0}>
              <Flex
                gap={4}
                alignItems={"center"}
                direction={{ base: "column", md: "row" }}
                mt={6}
              >
                <InputGroup width={{ base: "100%", lg: "50%" }}>
                  <InputLeftElement>
                    <Image src="/phone-icon.svg" alt="phone icon" />
                  </InputLeftElement>
                  <Input type="number" placeholder="Nomor Telpon" />
                </InputGroup>
                <Menu matchWidth>
                  <MenuButton
                    as={Button}
                    onClick={() => setIsOpen(!isOpen)}
                    rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    variant="outline"
                    _hover={{ bgColor: "transparent" }}
                    width={{ base: "100%", lg: "50%" }}
                  >
                    {paket}
                  </MenuButton>
                  <MenuList>
                    {listPaketData.map((paket, index) => (
                      <MenuItem key={index} onClick={() => setPaket(paket)}>
                        {paket}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Button
                  variant={"outline"}
                  color="primary.1"
                  border={"2px"}
                  borderColor={"primary.1"}
                  borderRadius={"5px"}
                  _hover={{ bgColor: "primary.30" }}
                  width={{ base: "100%", lg: "initial" }}
                >
                  Beli
                </Button>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default BillsCard;
