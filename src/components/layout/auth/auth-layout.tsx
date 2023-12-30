import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AuthLeftside from "./auth-left-side";
import { AuthLayoutProps } from "@/types/auth";
import endpoints from "@/configs/endpoints-config";

/**
 * animate right side
 */
const fadeinAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
    },
  },
};

function AuthLayout({ children, title, subTitle }: AuthLayoutProps) {
  return (
    <>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "2fr 1fr"]}
        h={"100vh"}
        bg={"white"}
      >
        <AuthLeftside />
        <GridItem bg={"white"} height={"full"}>
          <Flex
            alignItems={"center"}
            px={{ base: 8, md: 16 }}
            height={{ base: "auto", md: "full" }}
            bottom={{ base: "9px", md: "auto" }}
            left={{ base: "9px", md: "auto" }}
            right={{ base: "8px", md: "auto" }}
            width={{ base: "calc(100% - 18px)", md: "auto" }}
            pos={{ base: "absolute", md: "relative" }}
            zIndex={2}
            borderRadius={"2xl"}
            py={{ base: 8, md: 0 }}
            bg={{ base: "white", md: "transparent" }}
          >
            <Box
              w={"full"}
              display={"flex"}
              flexDir={"column"}
              alignItems={"left"}
            >
              <motion.div
                variants={fadeinAnimationVariants}
                initial="initial"
                animate="animate"
              >
                <Image
                  maxW={"300px"}
                  src={
                    endpoints.frontEndBaseUrl +
                    "images/workment-logo-in-white.svg"
                  }
                  alt="Workment"
                  mb={4}
                  hideBelow={"md"}
                />
                <Text fontSize="3xl" fontWeight={"bold"}>
                  {title}
                </Text>
                <Text mb={{ base: "24px", md: "40px" }} fontSize="md">
                  {subTitle}
                </Text>
                {children}
              </motion.div>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export default AuthLayout;
