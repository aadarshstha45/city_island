import Logo from "@/assets/logo.svg";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems1, navItems2 } from "./data";
import Nav from "./Nav";

const Motion = {
  Button: motion(Button),
};

const Navbar = () => {
  const [isLessThan1100] = useMediaQuery("(max-width: 1100px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const path = useLocation().pathname;
  return (
    <Flex
      py={6}
      justify={"center"}
      align={"center"}
      borderBottom={path !== "/" ? "1px solid" : ""}
      borderColor={"gray.100"}
    >
      <HStack
        justify={"space-between"}
        alignItems={"center"}
        w={"100%"}
        px={10}
        display={isLessThan1100 ? "flex" : "none"}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Logo} boxSize={70} aspectRatio={1} />
        </motion.div>
        <Motion.Button p={2} whileTap={{ scale: 0.9 }} onClick={onOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </Motion.Button>
        <Nav isOpen={isOpen} onClose={onClose} />
      </HStack>
      <HStack
        align={"center"}
        gap={4}
        display={isLessThan1100 ? "none" : "flex"}
      >
        {navItems1.map((item, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                as={NavLink}
                to={item.url}
                _activeLink={{ color: "#CD0011" }}
                textColor={path !== "/" ? "black" : "white"}
                fontSize={20}
                fontWeight={600}
                mx={4}
              >
                {item.title}
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                display={index === navItems1.length - 1 ? "none" : "block"}
                w={2}
                h={2}
                bg={"red"}
                borderRadius={"50%"}
              />
            </motion.div>
          </React.Fragment>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Logo} w={path !== "/" ? 70 : 120} aspectRatio={1} />
        </motion.div>
        {navItems2.map((item, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                as={NavLink}
                to={item.url}
                _activeLink={{ color: "#CD0011" }}
                textColor={path !== "/" ? "black" : "white"}
                fontSize={20}
                fontWeight={600}
                mx={4}
              >
                {item.title}
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                w={2}
                h={2}
                bg={"red"}
                borderRadius={"50%"}
                display={index === navItems1.length - 1 ? "none" : "block"}
              />
            </motion.div>
          </React.Fragment>
        ))}
      </HStack>
    </Flex>
  );
};

export default Navbar;
