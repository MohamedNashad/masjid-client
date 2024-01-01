// "use client";
// import React, { useRef, useState } from "react";
// import Link from "next/link";
// import { useDisclosure } from "@chakra-ui/react";
// import {
//   Button,
//   Text,
//   Box,
//   Flex,
//   Alert,
//   AlertIcon,
//   AlertTitle,
// } from "@chakra-ui/react";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import AuthLayout from "@/components/layout/auth/auth-layout";
// // import { Form, Formik, useFormik } from "formik";
// import { CustomInput } from "@/components/molecules";
// import { RiLoader5Fill } from "react-icons/ri";

// type Props = {};

// const page = (props: Props) => {
//   const [show, setShow] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const errorRef = useRef();

//   const dispatch = useAppDispatch();

//   return (
//     <>
//       <AuthLayout
//         title="Login"
//         subTitle="Please login to your account to get started"
//       >
//         {/* <Formik
//           initialValues={{ username: "", password: "" }}
//           validationSchema={"authSchema"}
//           onSubmit={() => {}}
//         >
//           {({ isSubmitting }) => ( */}
//         {/* <Form className="infoForm" style={{ width: "100%" }}> */}
//           <Box mb={{ base: "20px", md: 8 }}>
//             <CustomInput
//               label="Username or E-mail"
//               variant="outline"
//               type="text"
//               placeholder="Username or E-mail"
//               className="formInput"
//               name="username"
//             />
//           </Box>
//           <Box>
//             <CustomInput
//               label="Password"
//               variant="outline"
//               type={show ? "text" : "password"}
//               placeholder="Password"
//               className="formInput"
//               name="password"
//               // clickToView={handleClickShowPw}
//               // icon={show}
//               isPassword={true}
//             />
//           </Box>
//           {errorMessage ? (
//             <Alert
//               ref={errorRef}
//               aria-live="assertive"
//               status="error"
//               mt={"20px"}
//             >
//               <AlertIcon />
//               <AlertTitle>{errorMessage}</AlertTitle>
//             </Alert>
//           ) : null}

//           <Box
//             my={8}
//             display={"flex"}
//             alignItems={"center"}
//             justifyContent={"space-between"}
//           >
//             <Box>
//               <input type="checkbox" /> Remember me
//             </Box>
//             <Link href="/forgot-password">Forgot Password</Link>
//           </Box>

//           <Button size={"lg"} isDisabled={false} width={"full"} type="submit">
//             {/* {isSubmitting ? (
//                   <Flex alignItems={"center"} gap={2}>
//                     <RiLoader5Fill className="spinner" color={"white"} />
//                     <Text>Please Wait</Text>
//                   </Flex>
//                 ) : (
//                   "Login"
//                 )} */}
//             <Flex alignItems={"center"} gap={2}>
//               <RiLoader5Fill className="spinner" color={"white"} />
//               <Text>Login</Text>
//             </Flex>
//           </Button>
//         {/* </Form> */}
//         {/* )}
//         </Formik> */}
//       </AuthLayout>
//     </>
//   );
// };

// export default page;

"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "@/components/pages/auth/logo";
import { OAuthButtonGroup } from "@/components/pages/auth/auth-button-group";
import FloatingLabelPasswordInput, {
  // PasswordField,
} from "@/components/pages/auth/password-field";
import {
  FloatingLabelInput,
  FloatingLabelInput2,
} from "@/components/molecules";

type Props = {};

const page = (props: Props) => {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
      // bg={"#f2f6fe"}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <Text color="fg.muted">
              Don't have an account? <Link href="#">Sign up</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          // bg={{ base: "#f2f6fe", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "lg" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              {/* <FormControl> */}
              {/* <FormLabel htmlFor="email">Email</FormLabel> */}
              {/* <Input id="email" type="email" /> */}
              {/* </FormControl> */}
              <FloatingLabelInput
                label="Email"
                id="email"
                name="email"
                type="email"
              />
              {/* <PasswordField /> */}
              <FloatingLabelPasswordInput
                label="Password"
                id="password"
                name="password"
                // mt={"3"}
              />

              {/* <FloatingLabelInput2 /> */}
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button>Sign in</Button>
              <HStack>
                <Divider border="5px" borderColor="gray.200" />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider border="5px" borderColor="gray.200" />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default page;
