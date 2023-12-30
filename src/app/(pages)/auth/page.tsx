"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import {
  Button,
  Text,
  Box,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import AuthLayout from "@/components/layout/auth/auth-layout";
// import { Form, Formik, useFormik } from "formik";
import { CustomInput } from "@/components/molecules";
import { RiLoader5Fill } from "react-icons/ri";

type Props = {};

const page = (props: Props) => {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const errorRef = useRef();

  const dispatch = useAppDispatch();

  return (
    <>
      <AuthLayout
        title="Login"
        subTitle="Please login to your account to get started"
      >
        {/* <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={"authSchema"}
          onSubmit={() => {}}
        >
          {({ isSubmitting }) => ( */}
        {/* <Form className="infoForm" style={{ width: "100%" }}> */}
          <Box mb={{ base: "20px", md: 8 }}>
            <CustomInput
              label="Username or E-mail"
              variant="outline"
              type="text"
              placeholder="Username or E-mail"
              className="formInput"
              name="username"
            />
          </Box>
          <Box>
            <CustomInput
              label="Password"
              variant="outline"
              type={show ? "text" : "password"}
              placeholder="Password"
              className="formInput"
              name="password"
              // clickToView={handleClickShowPw}
              // icon={show}
              isPassword={true}
            />
          </Box>
          {errorMessage ? (
            <Alert
              ref={errorRef}
              aria-live="assertive"
              status="error"
              mt={"20px"}
            >
              <AlertIcon />
              <AlertTitle>{errorMessage}</AlertTitle>
            </Alert>
          ) : null}

          <Box
            my={8}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <input type="checkbox" /> Remember me
            </Box>
            <Link href="/forgot-password">Forgot Password</Link>
          </Box>

          <Button size={"lg"} isDisabled={false} width={"full"} type="submit">
            {/* {isSubmitting ? (
                  <Flex alignItems={"center"} gap={2}>
                    <RiLoader5Fill className="spinner" color={"white"} />
                    <Text>Please Wait</Text>
                  </Flex>
                ) : (
                  "Login"
                )} */}
            <Flex alignItems={"center"} gap={2}>
              <RiLoader5Fill className="spinner" color={"white"} />
              <Text>Login</Text>
            </Flex>
          </Button>
        {/* </Form> */}
        {/* )}
        </Formik> */}
      </AuthLayout>
    </>
  );
};

export default page;
