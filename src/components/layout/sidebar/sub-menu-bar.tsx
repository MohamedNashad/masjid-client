import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

function SubMenuBar({ onClose, children, MenuHeading, left }: any) {
  return (
    <Box
      bg={"white"}
      pos={"absolute"}
      left={left}
      top={0}
      height={"100vh"}
      zIndex={1}
      p={4}
      boxShadow={"xl"}
      width={"248px"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} pb={8}>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          {MenuHeading}
        </Text>
        <IconButton
          aria-label={"close"}
          variant={"outline"}
          onClick={onClose}
          size={"md"}
          colorScheme={"gray"}
          icon={<RiArrowLeftSLine size={"1.75rem"} color={"#666"} />}
        />
      </Flex>

      {children}
    </Box>
  );
}

export default SubMenuBar;
