import {
    FormLabel,
    Input,
    FormErrorMessage,
    Box,
    InputGroup,
    Button,
    InputRightElement,
  } from "@chakra-ui/react";
  // import { useField } from "formik";
  import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
  
  function CustomInput({
    label = String,
    isPassword = false,
    icon = false,
    clickToView = {},
    maxW = "none",
    ...props
  }) {
    // const [field, meta, errorBorderColor] = useField(props);
  
    return (
      <>
        <Box position={"relative"}>
          <FormLabel fontSize={"md"}>{label}</FormLabel>
          <InputGroup>
            <Input
              variant={"outline"}
              // {...field}
              {...props}
              // className={meta.touched && meta.error ? "error" : ""}
            />
            {/* This is for showing the password show/hide eye icon. set isPassword={true} to enable this */}
            {isPassword ? (
              <InputRightElement width={"4.5rem"}>
                {/* <Button onClick={clickToView} variant={"solid"} size={"xs"} colorScheme={"gray"}>
                  {icon ? "Hide" : "Show"}
                </Button> */}
              </InputRightElement>
            ) : null}
          </InputGroup>
          {/* {meta.touched && meta.error && (
            <Box className="error" whiteSpace={"pre-wrap"} maxW={maxW}>
              {meta.error}
            </Box>
          )} */}
        </Box>
      </>
    );
  }
  export default CustomInput;
  