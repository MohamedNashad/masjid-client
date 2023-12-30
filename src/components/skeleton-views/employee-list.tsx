import { Box, Flex, Skeleton } from "@chakra-ui/react";

export default function EmployeeListSkeleton() {
  return (
    <>
      <Flex alignItems={"center"} gap={3} mb={4}>
        <Skeleton w={"100%"} height={10} />
        <Skeleton w={"50px"} height={10} />
      </Flex>
      <Box>
        <Box px={2}>
          <Skeleton w={"80px"} height={3} />
        </Box>
        {[...Array(5)].map((item) => {
          return (
            <Flex
              px={2}
              py={3}
              flexDir={"column"}
              gap={2}
              key={item}
              borderBottomColor={"gray.200"}
              borderBottomWidth={"1px"}
              borderBottomStyle={"solid"}
            >
              <Skeleton w={"50%"} height={5} />
              <Skeleton w={"70%"} height={3} />
            </Flex>
          );
        })}
      </Box>
      <Box mt={10}>
        <Box px={2}>
          <Skeleton w={"80px"} height={3} />
        </Box>
        {[...Array(2)].map((item) => {
          return (
            <Flex
              px={2}
              py={3}
              flexDir={"column"}
              gap={2}
              key={item}
              borderBottomColor={"gray.200"}
              borderBottomWidth={"1px"}
              borderBottomStyle={"solid"}
            >
              <Skeleton w={"50%"} height={5} />
              <Skeleton w={"70%"} height={3} />
            </Flex>
          );
        })}
      </Box>
    </>
  );
}
