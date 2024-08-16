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
const MotionGridItem = motion(GridItem);

const Welcome = () => {
  const [isLessThan690] = useMediaQuery("(max-width: 690px)");
  const [isLessThan450] = useMediaQuery("(max-width: 450px)");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <MotionFlex
      flexDir={"column"}
      mt={{ base: 700, md: 600 }}
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
          fontSize={{ base: "38px", md: "42px", xl: "46px" }}
          fontWeight="bold"
          position="absolute"
          top={{ base: "-550px", sm: "-500px", md: "-520px" }}
          zIndex={30}
          w={{ sm: "500px", md: "650px" }}
          textAlign={"center"}
          textColor={"white"}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 1.2 }}
        >
          Let's Fall in Love with Food Together.
        </MotionText>
        <MotionFlex
          flexDir={"column"}
          align={"center"}
          bg={"#CD0011"}
          w={"380px"}
          h={"400px"}
          position="absolute"
          bottom={{ base: "-90px", md: "-60px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <MotionButton
            borderRadius={50}
            p={4}
            textColor={"primary"}
            mt={6}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            Order Now
          </MotionButton>
          <Box zIndex={20} position="relative" w="300px" h="300px" mt={12}>
            <MotionImage
              src={Plate}
              w={300}
              h={300}
              borderRadius={"50%"}
              p={2}
              mt={-3}
              initial={{ rotate: -360 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1 }}
            />
            {/* SVG for Circular Text */}
            <svg
              viewBox="0 0 350 350"
              width="350"
              height="350"
              style={{
                position: "absolute",
                top: -20,
                left: 0,
                zIndex: 25,
              }}
            >
              {/* Define the shadow filter */}
              <defs>
                <filter
                  id="shadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="4" dy="4" result="offsetblur" />
                  <feFlood floodColor="rgba(0, 0, 0, 0.5)" />
                  <feComposite in2="offsetblur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Circle Path */}
              <path
                id="circle"
                d="M 150, 150 m -130, 0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0"
                fill="transparent"
              />

              {/* Text with shadow filter applied */}
              <text
                fill="white"
                fontSize="20"
                fontWeight="bold"
                letterSpacing="20"
                filter="url(#shadow)" // Applying the shadow filter
              >
                <textPath href="#circle" startOffset="0%">
                  TRY OUR HOTTEST MENU
                </textPath>
              </text>
            </svg>
          </Box>
        </MotionFlex>
      </MotionFlex>
      <Box pos="relative" mt={150}>
        <Box
          pos="absolute"
          top={{ base: -155, md: -165 }} // Adjust based on your needs
          left={0}
          bg={"white"}
          w="100vw"
          h={{ base: "132px", md: "167px" }}
          zIndex={9}
          clipPath={"polygon(50% 0%, 0% 100%, 100% 100%)"}
          transitionDuration={"0"}
        />
        <Box bg={"white"} w="100vw" zIndex={8} pt={4}>
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
              <Header
                title="Welcome to"
                subtitle="City Island Co Seafood Lounge"
              />

              <MotionText
                mt={4}
                textAlign={"center"}
                fontSize={{ base: "16px", md: "18px" }}
                lineHeight={1.8}
                fontWeight={500}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                fontFamily={"Roboto"}
                transition={{ duration: 1.2 }}
              >
                Extraordinary meals come from so much more than a culinary
                delight. Wonderfully prepared and ultra-fresh seafood may be the
                main event at City Island Co Seafood Lounge, but dining with us
                is the whole package! With the most fun-loving serving team
                around, a full bar, and plenty of classic-yet-elevated seafood
                dishes, it's no surprise that our family-friendly seafood
                restaurant has become a fan favorite. Whether you join us for
                brunch, lunch, or dinner, pull up a chair and get ready for an
                amazing meal.
              </MotionText>
              <SimpleGrid
                columns={isLessThan450 ? 1 : isLessThan690 ? 2 : 3}
                mt={8}
                spacing={4}
              >
                {foodData.map((food, index) => (
                  <MotionGridItem
                    colSpan={{ base: 1, sm: 1, lg: 1 }}
                    key={index}
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
                        bottom={0}
                        fontWeight={500}
                        textAlign={"center"}
                        alignSelf={"bottom"}
                        fontSize={{ base: "18px", md: "20px" }}
                        p={2}
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
        </Box>
      </Box>
    </MotionFlex>
  );
};

export default Welcome;
