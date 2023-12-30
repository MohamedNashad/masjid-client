import endpoints from "@/configs/endpoints-config";
import { Box, GridItem, Image } from "@chakra-ui/react";

function AuthLeftside() {
  return (
    <GridItem
      height={"full"}
      pos={{ base: "absolute", md: "relative" }}
      width={"calc(100% - 8px)"}
    >
      <Image
        maxW={"240px"}
        src={endpoints.frontEndBaseUrl + "images/workment-logo.svg"}
        alt="Workment"
        hideFrom={"md"}
        pos={"absolute"}
        zIndex={2}
        top={"24px"}
        transform={"translateX(-50%)"}
        left={"50%"}
      />
      <Box
        position={"relative"}
        height={"calc(100vh - 16px)"}
        bgImage={endpoints.frontEndBaseUrl + "images/hero-bg.jpg"}
        bgPosition={{ base: "center", md: "left" }}
        bgRepeat="no-repeat"
        backgroundSize={"cover"}
        ml={"8px"}
        my={"8px"}
        borderRadius="2xl"
        border={"1px solid"}
        borderColor={"brandSecondary.500"}
      />
    </GridItem>
  );
}

export default AuthLeftside;
