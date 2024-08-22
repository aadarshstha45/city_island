import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

const LayoutWrapper = () => {
  const path = useLocation().pathname;
  return (
    <Flex flexDir={"column"}>
      {path !== "/" && <Navbar />}
      <Box minH={window.innerHeight - 191}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
      {path !== "/" && <Footer />}
    </Flex>
  );
};

export default LayoutWrapper;
