import Banner from "@/assets/Banner.png";
import Navbar from "@/components/Navbar";

import { Box, Flex, Image } from "@chakra-ui/react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Order from "./Order";
import Welcome from "./Welcome";
import WhyUs from "./WhyUs";
const LayoutWrapper = () => {
  return (
    <Flex flexDir={"column"} gap={2} maxW={"100vw"} overflow={"hidden"}>
      <Box pos={"relative"} w={"100vw"}>
        <Box
          pos={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={-1}
          h={900}
        >
          <Image src={Banner} objectFit={"cover"} w={"100%"} h={"100%"} />
          <Box
            pos={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={"rgba(0, 0, 0, 0.5)"}
          />
        </Box>
        <Navbar />
      </Box>
      <Welcome />
      <WhyUs />
      <Order />
      <Contact />
      <About />
      <Footer />
    </Flex>
  );
};

export default LayoutWrapper;
