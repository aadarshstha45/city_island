import Header from "@/components/Header";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { foodData } from "./data";

// Motion components
const MotionFlex = motion(Flex);
const MotionGridItem = motion(GridItem);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Order = () => {
  const [isLessThan650] = useMediaQuery("(max-width: 650px)");
  const [isLessThan988] = useMediaQuery("(max-width: 988px)");

  // Ref for in-view detection
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box bg={"#F7F6F4"} py={10} ref={ref}>
      <MotionFlex
        justify={"center"}
        flexDir={"column"}
        align={"center"}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <Container maxW={{ base: "98vw", md: "90vw", lg: "container.lg" }}>
          <MotionFlex
            flexDir={"column"}
            justify={"center"}
            align={"center"}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
            transition={{ duration: 1.2 }}
          >
            <Header title={"Check Our Dishes"} subtitle={"Our Hot Menu"} />
            <MotionText
              mt={4}
              textAlign={"center"}
              fontSize={{ base: "16px", md: "18px" }}
              lineHeight={1.8}
              fontWeight={500}
              letterSpacing={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1.4 }}
            >
              Wonderfully prepared and ultra-fresh seafood may be the main event
              at City Island Co Seafood Lounge, but dining with us is the whole
              package!
            </MotionText>
          </MotionFlex>
        </Container>
        <SimpleGrid
          columns={isLessThan650 ? 1 : isLessThan988 ? 2 : 3}
          mt={10}
          spacing={4}
        >
          {foodData.map((food, index) => (
            <MotionGridItem
              colSpan={{ base: 1, sm: 1, lg: 1 }}
              key={food.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.9,
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <MotionFlex
                flexDir={"column"}
                gap={2}
                align={"center"}
                initial={{ y: 50 }}
                animate={{ y: isInView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Flex
                  justify={"center"}
                  w={300}
                  h={350}
                  borderRadius={5}
                  overflow={"hidden"}
                  pos={"relative"}
                  bg={`url(${food.image}) center/cover no-repeat`}
                  _before={{
                    content: '""',
                    pos: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: "rgba(0, 0, 0, 0.3)",
                  }}
                />
                <MotionText
                  fontWeight={500}
                  textAlign={"center"}
                  alignSelf={"bottom"}
                  fontSize={{ base: "18px", md: "20px" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  {food.title}
                </MotionText>
                <MotionButton
                  textColor={"primary"}
                  fontWeight={400}
                  size={"sm"}
                  mt={-2}
                  variant={"unstyled"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                >
                  Order Now
                </MotionButton>
              </MotionFlex>
            </MotionGridItem>
          ))}
        </SimpleGrid>
      </MotionFlex>
    </Box>
  );
};

export default Order;
