import Crab1 from "@/assets/images/crab1.png";
import { Flex, Image, Text } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
  subtitle: string;
  textColor?: string;
}

const Header = ({ title, subtitle, textColor }: HeaderProps) => {
  return (
    <Flex flexDir={"column"} justify={"center"} align={"center"}>
      <Text
        textAlign={"center"}
        textColor={"primary"}
        fontSize={{ base: "28px", md: "20px" }}
        fontWeight={500}
        textTransform={"uppercase"}
      >
        {title}
      </Text>
      <Text
        textAlign={"center"}
        fontSize={{ base: "36px", md: "42px", lg: "48px" }}
        fontWeight={500}
        textColor={textColor}
        textTransform={"uppercase"}
      >
        {subtitle}
      </Text>
      <Image mt={4} justifySelf={"center"} src={Crab1} alt={"Crab"} />
    </Flex>
  );
};

export default Header;
