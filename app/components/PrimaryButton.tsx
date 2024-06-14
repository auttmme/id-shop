import { Button, ResponsiveValue } from "@chakra-ui/react";
import React from "react";

interface PrimaryBtnProps {
  text: string;
  w?: string;
  h?: string;
  size?: ResponsiveValue<string>;
  onClick?: () => void;
}

function PrimaryBtn({ text, w, h, size, onClick }: PrimaryBtnProps) {
  return (
    <Button
      bgColor="primary.1"
      color="white"
      w={w}
      h={h}
      size={size}
      onClick={onClick}
      _hover={{ bgColor: "primary.30", color: "primary.1" }}
    >
      {text}
    </Button>
  );
}

export default PrimaryBtn;
