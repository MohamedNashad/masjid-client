import { Button } from "@chakra-ui/react";

const AnimatedButton = () => {
  return (
    // <Button
    //   w="200px"
    //   h="50px"
    //   bg="blue.400"
    //   color="white"
    //   _hover={{
    //     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    //     transform: "translateY(-5px)",
    //     transition: "box-shadow 0.3s, transform 0.3s",
    //   }}
    //   _active={{
    //     boxShadow: "none",
    //     transform: "translateY(0)",
    //     transition: "none",
    //   }}
    // >
    //   Animated Button
    // </Button>
    //     <Button
    //     w="200px"
    //     h="50px"
    //     bg="blue.400"
    //     color="white"
    //     _hover={{
    //       boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.4)", // Darker shadow on hover
    //       transform: "translateY(-5px)",
    //       transition: "box-shadow 0.3s, transform 0.3s",
    //     }}
    //     _active={{
    //       boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)", // Lighter shadow on click
    //       transform: "translateY(0)",
    //       transition: "box-shadow 0.3s, transform 0.3s",
    //     }}
    //   >
    //     Animated Button
    //   </Button>
    <Button
    //   w="200px"
    //   h="50px"
    //   bg="brandPrimary.500"
    bg="#4464ec"

      color="white"
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.4)" // Default subtle shadow
      //   boxShadow="0px 2px 6px rgba(48, 140, 229, 0.6)" // Default subtle shadow matching blue.400
    //   boxShadow="0px 2px 6px rgba(31, 82, 161, 0.6)" // Darker shadow matching a modified blue tone
      _hover={{
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.4)", // Darker shadow on hover
        transform: "translateY(-5px)",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      _active={{
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)", // Lighter shadow on click
        transform: "translateY(0)",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      //   fontFamily={"sans-serif"}
      fontWeight={"semi-bold"}
    >
      Animated Button
    </Button>
  );
};

export default AnimatedButton;
