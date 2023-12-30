import React from "react";

import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Box,
  AlertIcon,
  Flex,
  Alert,
  AlertTitle,
  AlertDescription,
  DrawerBody,
  Divider,
  Spacer,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  size?: string;
  drawerHeader?: boolean;
  drawerHeaderTitle: React.ReactNode;
  drawerSubTitle?: React.ReactNode;
  children: React.ReactNode;
  footerButtons?: boolean;
  footerButtonContent?: React.ReactNode;
  drawerPlacement?: any;
  paddingBottom?: string;
  px?: string;
  isEmptyFieldsAvailable?: any;
  isLocationsEmpty?: any;
  isRolesEmpty?: any;
}

const CommonDrawer = ({
  isOpen,
  onClose,
  size = "md",
  drawerPlacement = "right",
  drawerHeader = true,
  drawerHeaderTitle,
  drawerSubTitle,
  children,
  footerButtons = false,
  footerButtonContent,
  isEmptyFieldsAvailable,
  isLocationsEmpty,
  isRolesEmpty,
  paddingBottom,
  px,
}: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement={drawerPlacement}
      onClose={onClose}
      size={size}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          mt={2}
          _hover={{ backgroundColor: "brandPrimary.300" }}
          rounded={"full"}
          bg={"gray.100"}
        />

        {drawerHeader && (
          <DrawerHeader
            borderBottomWidth={"1px"}
            borderBottomColor={"gray.200"}
            borderBottomStyle={"solid"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            pr={"84px"}
          >
            {"drawerHeaderTitle"}
            {" - "}
            {"drawerSubTitle"}
          </DrawerHeader>
        )}

        <DrawerBody paddingBottom={paddingBottom} px={px}>
          {isEmptyFieldsAvailable || isLocationsEmpty ? (
            <Box mt={5} mb={6}>
              <Alert status="error" alignItems={"flex-start"}>
                <AlertIcon />
                <Box>
                  <AlertTitle>Fill all the required fields!</AlertTitle>
                  <AlertDescription fontSize={"sm"}>
                    If you are having trouble submitting your information, you
                    may probably have missed a required field or entered an
                    invalid value.{" "}
                    {isLocationsEmpty || isRolesEmpty
                      ? "or if you filled all the required fields and still has the issue then you might missed the location or role, please select at least 1 location and 1 role. "
                      : ""}{" "}
                    This message will disappear once you have filled all the
                    required fields with correct values.
                  </AlertDescription>
                </Box>
              </Alert>
            </Box>
          ) : null}

          {children}
        </DrawerBody>

        {footerButtons && <DrawerFooter>{footerButtonContent}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
};

export default CommonDrawer;
