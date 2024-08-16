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
  // Ref for in-view detection
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      bgImage={ContactBg}
      bgSize={"cover"}
      bgPos={"center"}
      py={32}
      px={2}
      maxW={"98vw"}
    >
      <MotionGridItem
        ref={ref} // Apply ref to MotionGridItem
        colSpan={1}
        justifySelf={"center"}
        alignContent={"center"}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          We're not far from King Soopers. Order online for carryout or
          delivery!
        </MotionText>
      </MotionGridItem>
      <MotionGridItem
        ref={ref} // Apply ref to MotionGridItem
        colSpan={1}
        justifySelf={"center"}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <MotionFlex
          bg={"white"}
          initial={{ scale: 0.9 }}
          animate={{ scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <SimpleGrid
            borderLeft={"6px solid #CD0011"}
            columns={2}
            gap={4}
            p={10}
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
                _hover={{ bg: "#CD0011" }}
                textColor={"white"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 1 }}
              >
                Send Now
              </MotionButton>
            </MotionGridItem>
          </SimpleGrid>
        </MotionFlex>
      </MotionGridItem>
    </SimpleGrid>
  );
};

export default Contact;
