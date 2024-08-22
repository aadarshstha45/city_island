import ContactBg from "@/assets/images/formbg.png";
import Header from "@/components/Header";
import {
  Button,
  Flex,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Motion components
const MotionFlex = motion(Flex);
const MotionGridItem = motion(GridItem);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionInput = motion(Input);
const MotionTextarea = motion(Textarea);

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  return (
    <Flex flexDir={"column"} gap={4} mb={4}>
      <MotionFlex
        bgImage={ContactBg}
        flexDir={"column"}
        bgSize={"cover"}
        bgPos={"center"}
        h={400}
        py={10}
        px={2}
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
        transition={{ duration: 1 }}
      >
        <Header
          title={"ARE YOU HUNGRY?"}
          subtitle={"Give us a shot!"}
          textColor="white"
        />
        <MotionText
          textAlign={"center"}
          textColor={"white"}
          mt={4}
          fontWeight={600}
          fontFamily={"Roboto"}
        >
          We're not far from King Soopers. Order online for carryout or
          delivery!
        </MotionText>
      </MotionFlex>
      <SimpleGrid
        justifySelf={"center"}
        alignSelf={"center"}
        border={"4px solid #CD0011"}
        borderRadius={10}
        columns={2}
        gap={4}
        p={10}
        fontFamily={"Roboto"}
      >
        <MotionGridItem colSpan={1}>
          <MotionInput placeholder="Name: " />
        </MotionGridItem>
        <MotionGridItem colSpan={1}>
          <MotionInput placeholder="Phone: " />
        </MotionGridItem>
        <MotionGridItem colSpan={1}>
          <MotionInput placeholder="Email: " />
        </MotionGridItem>
        <MotionGridItem colSpan={1}>
          <MotionInput placeholder="Address: " />
        </MotionGridItem>
        <MotionGridItem colSpan={2}>
          <MotionTextarea placeholder="Message: " />
        </MotionGridItem>
        <MotionGridItem colSpan={2}>
          <MotionButton
            bg={"#CD0011"}
            w={"full"}
            borderRadius={5}
            _hover={{ bg: "#A3000E" }}
            textColor={"white"}
            whileTap={{ scale: 0.9 }}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            Send Now
          </MotionButton>
        </MotionGridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default Contact;
