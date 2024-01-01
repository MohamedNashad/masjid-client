import {
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Box
  } from "@chakra-ui/react";
  
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
  };
  
  export default function FloatingLabelInput2() {
    return (
      <ChakraProvider>
        <Box p={8}>
          <FormControl id="first-name" isRequired isInvalid>
            <Input
              placeholder=" "
              _focus={{
                "+ label": activeLabelStyles,
                "+ label + div": { opacity: 1, transform: "translateY(-16px)" }
              }}
            />
            <FormLabel
              top={0}
              left={0}
              zIndex={2}
              position="absolute"
              backgroundColor="white"
              pointerEvents="none"
              mx={3}
              px={1}
              my={2}
              transformOrigin="left top"
              transition="transform 0.2s, color 0.2s"
            >
              First name
            </FormLabel>
            <FormHelperText opacity={0} transform="translateY(0)">
              Keep it very short and sweet!
            </FormHelperText>
            <FormErrorMessage>Your First name is invalid</FormErrorMessage>
          </FormControl>
        </Box>
      </ChakraProvider>
    );
  }
  