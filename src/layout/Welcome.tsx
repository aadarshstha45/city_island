import Plate from "@/assets/images/Plate.png";
import Header from "@/components/Header";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { foodData } from "./data";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);
const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

const Welcome = () => {
  const [isLessThan690] = useMediaQuery("(max-width: 690px)");
  const [isLessThan450] = useMediaQuery("(max-width: 450px)");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <MotionFlex
      flexDir={"column"}
      mt={600}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MotionFlex
        justify={"center"}
        align={"center"}
        position="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <MotionText
          fontSize={{ base: "24px", md: "32px", xl: "38px" }}
          fontWeight="bold"
          position="absolute"
          top="-500px"
          zIndex={30}
          w={{ sm: "300px", md: "600px" }}
          textAlign={"center"}
          textColor={"white"}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Let's Fall in Love with Food Together.
        </MotionText>
        <MotionFlex
          flexDir={"column"}
          align={"center"}
          bg={"#CD0011"}
          w={"350px"}
          h={"350px"}
          position="absolute"
          bottom="calc(100% )"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <MotionButton
            borderRadius={50}
            p={4}
            textColor={"primary"}
            mt={8}
            whileHover={{ scale: 1.1 }}
          >
            Order Now
          </MotionButton>
          <MotionImage
            src={Plate}
            w={300}
            h={300}
            mt={4}
            zIndex={20}
            transform={"translateY(20%)"}
            initial={{ rotate: -360, zIndex: 20 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
          />
        </MotionFlex>
      </MotionFlex>
      <Box
        bg={"white"}
        w="100vw"
        h="200px"
        zIndex={10}
        clipPath={"polygon(50% 0%, 0% 100%, 100% 100%)"}
        transform={"translateY(-40%)"}
      />
      <Container
        maxW={{ base: "98vw", md: "85vw", xl: "75vw" }}
        ref={containerRef}
      >
        <MotionFlex
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5 }}
        >
          <Header title="Welcome to" subtitle="City Island Co Seafood Lounge" />

          <MotionText
            mt={4}
            textAlign={"center"}
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight={1.8}
            fontWeight={500}
            letterSpacing={1}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2 }}
          >
            Extraordinary meals come from so much more than a culinary delight.
            Wonderfully prepared and ultra-fresh seafood may be the main event
            at City Island Co Seafood Lounge, but dining with us is the whole
            package! With the most fun-loving serving team around, a full bar,
            and plenty of classic-yet-elevated seafood dishes, it's no surprise
            that our family-friendly seafood restaurant has become a fan
            favorite. Whether you join us for brunch, lunch, or dinner, pull up
            a chair and get ready for an amazing meal.
          </MotionText>
          <SimpleGrid
            columns={isLessThan450 ? 1 : isLessThan690 ? 2 : 3}
            mt={8}
            spacing={4}
          >
            {foodData.map((food) => (
              <MotionGridItem
                colSpan={{ base: 1, sm: 1, lg: 1 }}
                key={food.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 1, delay: food.id * 0.2 }}
              >
                <Flex
                  justify={"center"}
                  w={200}
                  h={200}
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
                >
                  <Text
                    pos={"absolute"}
                    bottom={4}
                    fontWeight={500}
                    textAlign={"center"}
                    alignSelf={"bottom"}
                    fontSize={{ base: "18px", md: "20px" }}
                    p={4}
                    textColor={"white"}
                  >
                    {food.title}
                  </Text>
                </Flex>
              </MotionGridItem>
            ))}
          </SimpleGrid>
        </MotionFlex>
      </Container>
    </MotionFlex>
  );
};

export default Welcome;
