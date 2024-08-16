import Cook1 from "@/assets/images/cook.png";
import Cook2 from "@/assets/images/cook2.png";
import Header from "@/components/Header";
import {
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Motion components
const MotionContainer = motion(Container);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionGridItem = motion(GridItem);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const About = () => {
  // Ref for in-view detection
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <MotionContainer
      ref={ref} // Apply ref to Container
      maxW={"98vw"}
      py={10}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <MotionSimpleGrid
        maxW={"98vw"}
        columns={{ base: 1, md: 2 }}
        spacing={10}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <MotionGridItem
          colSpan={1}
          justifySelf={"center"}
          alignContent={"center"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <Header title={"Find US"} subtitle={"Visit Our Restaurant"} />
          <MotionText textAlign={"center"} mt={4}>
            We see our customers as invited guests to a party, and we are the
            hosts.
          </MotionText>
          <MotionText textAlign={"center"} mt={4}>
            <Text textColor={"primary"} as={"span"} fontWeight={"bold"}>
              Address:{" "}
            </Text>
            2595 Palm Bay Rd NE, Palm Bay, FL 32905
          </MotionText>
          <MotionText textAlign={"center"} mt={4}>
            <Text textColor={"primary"} as={"span"} fontWeight={"bold"}>
              Hours:{" "}
            </Text>
            11:00 AM - 9:00 PM
          </MotionText>
          <MotionText textAlign={"center"} mt={4}>
            <Text textColor={"primary"} as={"span"} fontWeight={"bold"}>
              Phone:{" "}
            </Text>
            (321) 429-5333
          </MotionText>
        </MotionGridItem>
        <MotionGridItem colSpan={1}>
          <Flex
            gap={{ base: 1, md: 6 }}
            maxW={window.innerWidth}
            align={"center"}
          >
            <MotionImage
              objectFit={"cover"}
              w={{ base: 200, md: 300 }}
              h={{ base: 200, md: 300 }}
              src={Cook2}
              alt={"Cook"}
              initial={{ scale: 0.9 }}
              animate={{ scale: inView ? 1 : 0.9 }}
              transition={{ duration: 1 }}
            />
            <MotionImage
              w={{ base: 200, md: 300 }}
              objectFit={"cover"}
              h={{ base: 250, md: 350 }}
              src={Cook1}
              alt={"Cook"}
              initial={{ scale: 0.9 }}
              animate={{ scale: inView ? 1 : 0.9 }}
              transition={{ duration: 1 }}
            />
          </Flex>
        </MotionGridItem>
      </MotionSimpleGrid>
    </MotionContainer>
  );
};

export default About;
