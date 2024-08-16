import Logo from "@/assets/logo.svg";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { navItems1, navItems2 } from "./data";
const Navbar = () => {
  return (
    <Flex py={6} justify={"center"} align={"center"}>
      <HStack align={"center"} gap={4}>
        {navItems1.map((item, index) => (
          <React.Fragment key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Text textColor={"white"} fontSize={20} fontWeight={600} mx={4}>
                {item.title}
              </Text>
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
          <Image src={Logo} w={120} aspectRatio={1} />
        </motion.div>
        {navItems2.map((item, index) => (
          <React.Fragment key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Text textColor={"white"} fontSize={20} fontWeight={600} mx={4}>
                {item.title}
              </Text>
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
