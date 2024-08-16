import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Motion = {
  Box: motion(Box),
  Button: motion(Button),
  Center: motion(Center),
  Container: motion(Container),
  SimpleGrid: motion(SimpleGrid),
  Flex: motion(Flex),
  Grid: motion(Grid),
  GridItem: motion(GridItem),
  HStack: motion(HStack),
  Heading: motion(Heading),
  Image: motion(Image),
  Stack: motion(Stack),
  Text: motion(Text),
  VStack: motion(VStack),
};

export default Motion;
