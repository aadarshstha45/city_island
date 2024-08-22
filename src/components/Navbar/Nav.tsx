import Logo from "@/assets/logo.svg";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  UnorderedList,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems1, navItems2 } from "./data";

const Motion = {
  Button: motion(Button),
  IconButton: motion(IconButton),
  UnorderedList: motion(UnorderedList),
  Flex: motion(Flex),
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface NavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Nav({ isOpen, onClose }: NavProps) {
  const path = useLocation().pathname;

  useEffect(() => {
    onClose();
  }, [path, onClose]);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      {isOpen && <DrawerOverlay />}
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader alignItems={"center"} borderBottomWidth="1px">
          <Image src={Logo} w={50} aspectRatio={1} />
        </DrawerHeader>
        <DrawerBody p={0}>
          <Motion.Flex
            justify={"center"}
            align={"center"}
            gap={4}
            w={"full"}
            variants={itemVariants}
            flexDir={"column"}
            p={4}
          >
            {navItems1.map((item, index) => (
              <Motion.Flex
                key={index}
                variants={itemVariants}
                initial="closed"
                animate="open"
                w={"full"}
                onClick={onClose}
              >
                <Motion.Button
                  as={NavLink}
                  to={item.url}
                  _activeLink={{ bg: "#CD0011", color: "white" }}
                  onClick={onClose}
                  w={"full"}
                  fontSize={20}
                  fontWeight={600}
                  mx={4}
                  whileTap={{ scale: 0.9 }}
                  variant={"ghost"}
                  _hover={{ bg: "#CD0011", color: "white" }}
                >
                  {item.title}
                </Motion.Button>
              </Motion.Flex>
            ))}
            {navItems2.map((item, index) => (
              <Motion.Flex
                key={index}
                variants={itemVariants}
                initial="closed"
                animate="open"
                w={"full"}
                onClick={onClose}
              >
                <Motion.Button
                  w={"full"}
                  fontSize={20}
                  as={NavLink}
                  onClick={onClose}
                  to={item.url}
                  _activeLink={{ bg: "#CD0011", color: "white" }}
                  fontWeight={600}
                  mx={4}
                  whileTap={{ scale: 0.9 }}
                  variant={"ghost"}
                  _hover={{ bg: "#CD0011", color: "white" }}
                >
                  {item.title}
                </Motion.Button>
              </Motion.Flex>
            ))}
          </Motion.Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
