import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bg={"black"} p={4} justify={"center"}>
      <Text
        textAlign={"center"}
        fontWeight={600}
        textColor={"white"}
        fontSize={{ base: "14px", md: "16px", xl: "20px" }}
      >
        Copyright © 2022 - City Island Co Seafood Lounge. All Rights Reserved.
        Designed By:{" "}
        <Text as={"span"} textColor={"primary"}>
          {" "}
          Jasper IT
        </Text>
      </Text>
    </Flex>
  );
};

export default Footer;
