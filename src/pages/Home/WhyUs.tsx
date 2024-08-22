import Cooking from "@/assets/images/cook.png";
import Header from "@/components/Header";
import {
  Flex,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { whyUsData } from "./data";

const MotionFlex = motion(Flex);
const MotionGridItem = motion(GridItem);
const MotionImage = motion(Image);
const MotionHStack = motion(HStack);
const MotionText = motion(Text);

const WhyUs = () => {
  const [isLessThan868] = useMediaQuery("(max-width: 868px)");

  const xTranslation = isLessThan868 ? 0 : -70;

  // Ref for the section to detect when it comes into view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} py={10} ref={ref}>
      <MotionGridItem
        colSpan={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        display={{ base: "none", md: "block" }}
      ></MotionGridItem>
      <MotionGridItem
        colSpan={1}
        transform={{ base: "translateY(0px)", md: "translateY(30)" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
        transition={{ duration: 1 }}
      >
        <Header title="Why Choose Us" subtitle="our best support" />
      </MotionGridItem>
      <MotionGridItem
        colSpan={1}
        mt={{ base: 4, md: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        h={"full"}
      >
        <MotionImage
          w={"full"}
          h={600}
          src={Cooking}
          alt={"Cooking"}
          objectFit={"cover"}
          initial={{ scale: 0.9 }}
          animate={{ scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 1 }}
        />
      </MotionGridItem>
      <MotionGridItem
        colSpan={1}
        pos={"relative"}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        mt={{ base: 600, sm: 400, md: 0 }}
      >
        <MotionFlex
          w={"full"}
          flexDir={"column"}
          gap={10}
          justifySelf={"flex-end"}
          pos={"absolute"}
          bottom={0}
          bg={"#F7F6F4"}
          px={4}
          py={10}
          initial={{ y: 50 }}
          animate={{ y: isInView ? 0 : 50 }}
          transition={{ duration: 1.2 }}
        >
          {whyUsData.map((data, index) => (
            <React.Fragment key={`${data.id}-${index}`}>
              <MotionHStack
                spacing={4}
                transform={{
                  md: "translateX(-30%)",
                  lg: "translateX(-20%)",
                }}
                flexWrap={{ base: "wrap", sm: "nowrap" }}
                initial={{ opacity: 0, x: 30 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? xTranslation : 30, // Use calculated x value
                }}
                justify={{ base: "center", sm: "start" }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {data.icon && (
                  <Flex
                    bg={"white"}
                    shadow={"md"}
                    p={12}
                    borderRadius={"50%"}
                    justify={"center"}
                    align={"center"}
                    w={{ base: 8, sm: 12 }}
                    h={{ base: 8, sm: 12 }}
                  >
                    <data.icon />
                  </Flex>
                )}
                <Stack gap={1}>
                  <MotionText
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight={500}
                    letterSpacing={1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1.2 }}
                    textAlign={{ base: "center", sm: "start" }}
                  >
                    {data.title}
                  </MotionText>

                  <MotionText
                    key={data.id}
                    fontSize={{ base: "16px", md: "18px" }}
                    lineHeight={1.8}
                    fontWeight={500}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1.2 }}
                    fontFamily={"Roboto"}
                    textAlign={{ base: "center", sm: "start" }}
                  >
                    {data.description}
                  </MotionText>
                </Stack>
              </MotionHStack>
            </React.Fragment>
          ))}
        </MotionFlex>
      </MotionGridItem>
    </SimpleGrid>
  );
};

export default WhyUs;
