// import {
//   FormControl,
//   FormLabel,
//   IconButton,
//   Input,
//   InputGroup,
//   InputProps,
//   InputRightElement,
//   useDisclosure,
//   useMergeRefs,
// } from "@chakra-ui/react";
// import { forwardRef, useRef } from "react";
// import { HiEye, HiEyeOff } from "react-icons/hi";

// export const PasswordField = forwardRef<HTMLInputElement, InputProps>(
//   (props, ref) => {
//     const { isOpen, onToggle } = useDisclosure();
//     const inputRef = useRef<HTMLInputElement>(null);

//     const mergeRef = useMergeRefs(inputRef, ref);
//     const onClickReveal = () => {
//       onToggle();
//       if (inputRef.current) {
//         inputRef.current.focus({ preventScroll: true });
//       }
//     };

//     return (
//       <FormControl>
//         <FormLabel htmlFor="password">Password</FormLabel>
//         <InputGroup>
//           <InputRightElement>
//             <IconButton
//               variant="text"
//               aria-label={isOpen ? "Mask password" : "Reveal password"}
//               icon={isOpen ? <HiEyeOff /> : <HiEye />}
//               onClick={onClickReveal}
//             />
//           </InputRightElement>
//           <Input
//             id="password"
//             ref={mergeRef}
//             name="password"
//             type={isOpen ? "text" : "password"}
//             autoComplete="current-password"
//             required
//             {...props}
//           />
//         </InputGroup>
//       </FormControl>
//     );
//   }
// );

// PasswordField.displayName = "PasswordField";

import { useState } from "react";
import {
  Input,
  FormLabel,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const FloatingLabelPasswordInput = ({ label, ...rest }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClickReveal = () => {
    setIsOpen(!isOpen);
  };

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
        zIndex="3"
        // mb={isFocused ? "3" : ""}
      >
        <Box
          p={!isFocused ? "2" : ""}
          // mt={isFocused ? "3" : ""}
        >
          {label}
        </Box>
      </FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="ghost"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          {...rest}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          borderBottom="1px"
          borderColor={isFocused ? "brandPrimary.500" : "gray.200"}
          type={isOpen ? "text" : "password"}
          _placeholder={{
            color: "gray.500",
            lineHeight: "normal",
          }}
        />
      </InputGroup>
    </FormControl>
  );
};

export default FloatingLabelPasswordInput;
