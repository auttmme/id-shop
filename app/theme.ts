import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: "#F9F9F9",
      },
    },
  },
  fonts: {
    heading: "var(--font-worksans)",
    body: "var(--font-worksans)",
  },
  colors: {
    primary: {
      1: "#0A91AB",
      10: "#3BA7BC",
      20: "#0A91AB80",
      30: "#0A91AB33",
    },
    secondary: {
      1: "#FFC045",
      10: "#FFCD6A",
      20: "#FFC04580",
      30: "#FFC04533",
    },
    neutral: {
      1: "#19191B",
      10: "#61646B",
      20: "#AFB1B6",
      30: "#F9F9F9",
      40: "#FFFFFF",
    },
  },
};

const customTheme = extendTheme(config);

export default customTheme;
