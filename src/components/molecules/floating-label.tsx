"use client";
import { useState } from "react";
import { Input, FormLabel, FormControl, Box } from "@chakra-ui/react";

const FloatingLabelInput = ({ label, ...rest }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const shouldFloat = isFocused || rest.value;

  return (
    <FormControl mt={isFocused ? "6" : ""}>
      <FormLabel
        htmlFor={rest.id || rest.name}
        position="absolute"
        transformOrigin="left top"
        color={isFocused ? "brandPrimary.500" : "gray.400"}
        transform={shouldFloat ? "scale(1) translateY(-30px)" : "none"}
        transition="transform 0.2s, color 0.2s"
        pointerEvents="none"
        zIndex="1"
      >
        <Box p={!isFocused ? "2" : ""}>{label}</Box>
      </FormLabel>
      <Input
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        borderBottom="1px"
        borderColor={isFocused ? "brandPrimary.500" : "gray.200"}
        _placeholder={{
          color: "gray.500",
          lineHeight: "normal", // Adjust the line height here
          p: "5",
        }}
      />
    </FormControl>
  );
};

export default FloatingLabelInput;
