import { Box } from "@chakra-ui/react";
import Header from "./components/layout/Header";
import ContentWrapper from "./components/content/ContentWrapper";
import Footer from "./components/layout/Footer/Footer";

export default function Home() {
  return (
    <Box pb={10}>
      <Header />
      <ContentWrapper />
      <Footer />
    </Box>
  );
}
