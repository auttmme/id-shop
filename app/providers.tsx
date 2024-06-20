"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import customTheme from "./theme";
import { LanguageProvider } from "./LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={customTheme}>
      <LanguageProvider>{children}</LanguageProvider>
    </ChakraProvider>
  );
}
