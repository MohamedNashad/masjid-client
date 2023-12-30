import {
  CommonDrawer,
  CustomMessage,
  PayweekPicker,
} from "@/components/molecules";
import useWindowDimensions from "@/hooks/window-dimensions";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  DrawerHeader,
  Flex,
  FormLabel,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Switch,
  Text,
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  RiBuildingLine,
  RiDeleteBin2Line,
  RiEditLine,
  RiLogoutCircleLine,
  RiLogoutCircleRLine,
  RiMapPinLine,
  RiMenu2Line,
  RiSearch2Line,
  RiSettings2Line,
  RiSettings3Line,
  RiShieldCheckLine,
  RiTeamLine,
  RiUser6Line,
  RiUserFollowLine,
} from "react-icons/ri";
import { smoothClasses } from "@/chakra-ui/theme/classes";
import { useRef, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

interface Props {
  width: {};
  toggleOnClick: () => void;
  transform: string;
}

export const Header: React.FC<Props> = ({
  width,
  toggleOnClick,
  transform,
}) => {
  const { browserHeight, browserWidth } = useWindowDimensions();
  const {
    isOpen: companyDrawerIsOpen,
    onOpen: companyDrawerOnOpen,
    onClose: companyDrawerOnClose,
  } = useDisclosure();

  const onCompanyDrawerOpen = () => {
    companyDrawerOnOpen();
  };

  const onCompanyDrawerClose = () => {
    companyDrawerOnClose();
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const user = {
    name: "John Doe",
    role: "Admin",
    email: "john@example.com",
    avatarUrl: "https://via.placeholder.com/150", // Replace with actual avatar URL
  };

  const fileInputRef: any = useRef(null);

  return (
    <>
      <Box
        pos="fixed"
        width={width}
        paddingX={{ base: "16px", md: "32px" }}
        top={"0px"}
        zIndex={10}
        pr={{ base: "16px", md: "44px" }}
        bg={"#f2f6fe"}
      >
        <Box
          transition="width 0.3s ease-in-out"
          height={{ base: "auto", md: "80px" }}
          py={{ base: "16px", md: "0px" }}
          bg="#f2f6fe"
          pb={{ base: "16px", md: 1.5 }}
          width={"full"}
          display="flex"
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justifyContent="space-between"
          alignItems="center"
          borderBottom={"1px solid #e2e8f0"}
        >
          <Box display={"flex"} alignItems={"center"} gap={5}>
            <Tooltip label={"Toggle"} bg="brandPrimary.300" color="white">
              <IconButton
                onClick={toggleOnClick}
                aria-label="Toggle Sidebar"
                icon={<RiMenu2Line size="1.2rem" />}
                transform={transform}
                variant="solid"
                zIndex={999}
                bg={"white"}
                boxShadow={"rgba(0, 0, 0, 0.1) 0px 5px 15px 0px"}
                _hover={{ backgroundColor: "gray.100" }}
                color={"brandPrimary.500"}
                borderRadius={"full"}
              />
            </Tooltip>

            {browserWidth < 768 && (
              <Tooltip
                label={"Available Companies"}
                bg="brandPrimary.300"
                color="white"
              >
                <Button
                  variant="ghost"
                  width="auto"
                  px={0}
                  bg={"white"}
                  _hover={{ backgroundColor: "gray.100" }}
                  boxShadow={"md"}
                  borderRadius="full"
                  onClick={() => onCompanyDrawerOpen()}
                  py={2}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    rounded="full"
                    position="relative"
                    bg={"white"}
                    _hover={{ backgroundColor: "gray.100" }}
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    color="brandPrimary.400"
                    width="40px"
                    height="40px"
                    alignItems="center"
                    mr={{ base: "0px", md: 2 }}
                  >
                    {browserWidth < 768 && (
                      <Box
                        position="absolute"
                        top="0px"
                        right="0px"
                        width="8px"
                        height="8px"
                        borderRadius="full"
                        bg="red.500"
                        zIndex={3}
                      />
                    )}
                    <RiBuildingLine size="1.2rem" />
                  </Box>
                  {browserWidth > 768 && (
                    <Flex
                      pl={2}
                      pr={5}
                      flexDir="column"
                      alignItems="flex-start"
                    >
                      <Text
                        fontSize={"sm"}
                        maxWidth={"200px"}
                        noOfLines={1}
                        fontWeight={600}
                        color={"brandPrimary.600"}
                      >
                        ALL
                      </Text>

                      <Text fontSize="xs" color="gray.500">
                        2 Stores Selected
                      </Text>
                    </Flex>
                  )}
                </Button>
              </Tooltip>
            )}
            {browserWidth > 768 && (
              <PayweekPicker
                prevOnClick={() => {}}
                prevIsDisabled={currentIndex === 0}
                defaultValue={""}
                value={""}
                onChange={() => {}}
                selectIsDisabled={false}
                nextDisabled={currentIndex === 1}
                nextOnClick={() => {}}
              />
            )}
          </Box>

          {/*
           * Mobile Logo
           */}
          {browserWidth < 768 && (
            <Image
              src={"/images/logo-square-dark.svg"}
              alt="Workment"
              h={"100%"}
              maxW={"48px"}
            />
          )}

          <Flex alignItems={"center"} gap={5}>
            {/*
             * Desktop Company/Location Select
             */}
            {browserWidth > 768 && (
              <Tooltip
                label={"Available Companies"}
                bg="brandPrimary.300"
                color="white"
              >
                <Button
                  variant="ghost"
                  width="auto"
                  px={0}
                  bg={"white"}
                  _hover={{ backgroundColor: "gray.100" }}
                  boxShadow={"md"}
                  borderRadius="full"
                  onClick={() => onCompanyDrawerOpen()}
                  py={2}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    rounded="full"
                    position="relative"
                    bg={"white"}
                    _hover={{ backgroundColor: "gray.100" }}
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    color="brandPrimary.400"
                    width="40px"
                    height="40px"
                    alignItems="center"
                    mr={{ base: "0px", md: 2 }}
                  >
                    {browserWidth < 768 && (
                      <Box
                        position="absolute"
                        top="0px"
                        right="0px"
                        width="8px"
                        height="8px"
                        borderRadius="full"
                        bg="red.500"
                        zIndex={3}
                      />
                    )}
                    <RiBuildingLine size="1.2rem" />
                  </Box>
                  {browserWidth > 768 && (
                    <Flex
                      pl={2}
                      pr={5}
                      flexDir="column"
                      alignItems="flex-start"
                    >
                      <Text
                        fontSize={"sm"}
                        maxWidth={"200px"}
                        noOfLines={1}
                        fontWeight={600}
                        color={"brandPrimary.600"}
                      >
                        Store Name
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        2 Stores Selected
                      </Text>
                    </Flex>
                  )}
                </Button>
              </Tooltip>
            )}

            <Menu>
              <Tooltip label={"Profile"} bg="brandPrimary.300" color="white">
                <MenuButton
                  px={0}
                  as={Button}
                  variant="headerLinkItem"
                  boxShadow={"md"}
                  borderRadius={"full"}
                >
                  <Box display="flex" justifyContent="center">
                    {/* <Avatar
                      size="sm"
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    /> */}
                    <Avatar
                      size="sm"
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                  </Box>
                </MenuButton>
              </Tooltip>
              <MenuList
                minW="0"
                overflow="hidden"
                pt={0}
                width={"255px"}
                bg={"brandSecondary.10"}
              >
                {/* <Flex
                  px="6"
                  py="4"
                  position="relative"
                  background="white"
                  borderBottomColor={"gray.200"}
                  borderBottomWidth={"1px"}
                  borderBottomStyle={"solid"}
                  alignItems={"flex-start"}
                  gap={4}
                >
                  <Avatar
                    size="sm"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  />

                  <Box>
                    <Text fontWeight={"medium"}>{"John Doe"}</Text>

                    <Link
                      href={`mailto:${"sample@email.com"}`}
                      fontSize="xs"
                      color={"gray.600"}
                      display={"block"}
                    >
                      {"sample@email.com"}
                    </Link>
                    <Badge variant="outline" colorScheme="blue" size={"sm"}>
                      {"Admin"}
                    </Badge>
                  </Box>
                </Flex>
                <Flex pt={4} flexDir="column" gap={1}>
                  <MenuItem py={3} icon={<RiUser6Line />} onClick={() => {}}>
                    Profile
                  </MenuItem>
                  <MenuItem
                    py={3}
                    color={"red.500"}
                    icon={<RiLogoutCircleLine />}
                    onClick={() => {}}
                  >
                    Logout
                  </MenuItem>
                </Flex> */}
                <Box p={0.3} borderBottomWidth="2px">
                  <Flex align="center" justify="space-between">
                    <Box position="relative">
                      {/* Rectangle */}
                      <Box
                        bg="brandPrimary.100"
                        // bgGradient="linear(to-l, #7928CA, #2596be)"
                        w={"255px"}
                        h={16}
                        // borderRadius="md"
                        borderBottom={"none"}
                      />
                      {/* Half Avatar Circle */}
                      <Box
                        position="absolute"
                        bottom="-6"
                        left="50%"
                        transform="translateX(-50%)"
                        zIndex="docked"
                      >
                        {/* <Avatar
                          size="lg"
                          name={user.name}
                          src={user.avatarUrl}
                          borderRadius="50%"
                        /> */}

                        {/* <Avatar
                          size="lg"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        /> */}

                        <VStack gap={8} align={"center"} justify={"center"}>
                          {/* method 3 */}
                          <input
                            id="fileInput"
                            type="file"
                            name="file"
                            accept="image/jpg, image/jpeg, image/png"
                            onChange={() => {}}
                            ref={fileInputRef}
                            style={{ display: "none" }}
                          />

                          <Box position={"relative"}>
                            <Avatar
                              size="lg"
                              cursor="pointer"
                              // src={URL.createObjectURL(image)}
                              src="https://bit.ly/dan-abramov"

                              // border={"4px solid #f2f2f2"}
                              // backgroundColor={"#f2f2f2"}
                            />

                            <Menu>
                              <MenuButton
                                as={IconButton}
                                rounded={"full"}
                                aria-label="Change Profile Picture"
                                icon={<RiEditLine size={"0.5rem"} />}
                                variant="solid"
                                // colorScheme={"brandPrimary.500"}
                                backgroundColor={"brandPrimary.300"}
                                // bgGradient="linear(to-l, #7928CA, #2596be)"
                                pos="absolute"
                                right={"-2px"}
                                bottom={"-5px"}
                                boxShadow={"lg"}
                                size={"xs"}
                              />
                              <MenuList>
                                <MenuItem
                                  onClick={() => {}}
                                  icon={<RiEditLine />}
                                  _hover={{
                                    bg: "brandPrimary.500",
                                    // bgGradient:
                                    //   "linear(to-l, #7928CA, #2596be)",

                                    color: "white",
                                  }}
                                >
                                  <Text fontSize="sm" fontWeight={"semi-bold"}>
                                    Change Profile Image
                                  </Text>
                                </MenuItem>
                                <MenuItem
                                  color={"red.500"}
                                  icon={<RiDeleteBin2Line />}
                                  onClick={() => {}}
                                  _hover={{
                                    bg: "brandPrimary.500",
                                    // bgGradient:
                                    //   "linear(to-l, #7928CA, #2596be)",

                                    color: "white",
                                  }}
                                >
                                  <Text fontSize="sm" fontWeight={"semi-bold"}>
                                    Remove Profile Image
                                  </Text>
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </Box>
                        </VStack>
                      </Box>
                    </Box>
                  </Flex>

                  {/* User Info */}
                  <Flex direction="column" alignItems={"center"} mt={"35px"}>
                    <Text fontSize="md" fontWeight={"bold"}>
                      {user.name}
                    </Text>
                    <Text fontSize="sm">
                      <Link color={"gray"}>{user.email}</Link>
                    </Text>

                    <Badge
                      p={1.5}
                      color={"brandPrimary.500"}
                      mt={1}
                      variant="subtle"
                      mb={3}
                    >
                      <Text fontSize="xs">{user.role}</Text>
                    </Badge>
                  </Flex>
                  {/* Logout Button */}
                </Box>
                {/* <Divider
                  mt={0.5}
                  orientation="horizontal"
                  height={"10px"}
                  style={{
                    color: "brandPrimary.500",
                    borderWidth: "2px",
                  }}
                /> */}
                <Flex pt={2} flexDir="column" gap={1}>
                  <MenuItem
                    py={3}
                    icon={<FaRegCircleUser size={"1.2rem"} />}
                    onClick={() => {}}
                    bg={"brandSecondary.10"}
                    _hover={{
                      bg: "brandPrimary.500",
                      // bgGradient: "linear(to-l, #7928CA, #2596be)",

                      color: "white",
                    }} // Adjust the color property
                  >
                    <Text fontSize="sm">Profile</Text>
                  </MenuItem>
                  <MenuItem
                    py={3}
                    color={"red.500"}
                    icon={<RiLogoutCircleRLine size={"1.2rem"} />}
                    onClick={() => {}}
                    bg={"brandSecondary.10"}
                    _hover={{
                      bg: "brandPrimary.500",
                      // bgGradient: "linear(to-l, #7928CA, #2596be)",

                      color: "white",
                    }} // Adjust the color property
                  >
                    <Text fontSize="sm">Logout</Text>
                  </MenuItem>
                </Flex>
              </MenuList>
            </Menu>

            <Menu>
              <Tooltip label={"Settings"} bg="brandPrimary.300" color="white">
                <MenuButton
                  as={IconButton}
                  variant="solid"
                  bg={"white"}
                  _hover={{ backgroundColor: "gray.100" }}
                  _active={{ backgroundColor: "gray.100" }}
                  boxShadow={"md"}
                  px={2}
                  color="brandPrimary.500"
                  icon={<RiSettings2Line size={"1.2rem"} />}
                  rounded={"full"}
                />
              </Tooltip>
              <MenuList>
                <MenuItem icon={<RiBuildingLine />} onClick={() => {}}>
                  Company
                </MenuItem>
                <MenuItem icon={<RiMapPinLine />} onClick={() => {}}>
                  Locations
                </MenuItem>
                <MenuItem icon={<RiTeamLine />} onClick={() => {}}>
                  Users
                </MenuItem>
                <MenuItem icon={<RiUserFollowLine />} onClick={() => {}}>
                  Roles
                </MenuItem>
                <MenuItem icon={<RiShieldCheckLine />} onClick={() => {}}>
                  Permissions
                </MenuItem>
                <MenuItem icon={<RiSettings3Line />} onClick={() => {}}>
                  Settings
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          {browserWidth < 768 && (
            <>
              <Box flexBasis={"100%"} width={"100%"} mt={"16px"} />
              <PayweekPicker
                prevOnClick={() => {}}
                prevIsDisabled={currentIndex === 0}
                defaultValue={"selectedValue"}
                value={"selectedValue"}
                onChange={() => {}}
                selectIsDisabled={false}
                nextDisabled={currentIndex === 1}
                nextOnClick={() => {}}
              />
            </>
          )}
        </Box>
      </Box>

      <CommonDrawer
        isOpen={companyDrawerIsOpen}
        onClose={onCompanyDrawerClose}
        footerButtons
        drawerHeaderTitle={<DrawerHeader />}
      >
        <Box>
          <CustomMessage status="error" hasIcon={true} variant="subtle">
            <Text>
              Sorry! Cannot select different payment period stores! Please
              Unselect other stores and select again
            </Text>
          </CustomMessage>

          <div>
            <CustomMessage status="error" hasIcon={true} variant="subtle">
              <Text>
                Sorry! Cannot select different payment period stores! Please
                Unselect other stores and select again
              </Text>
            </CustomMessage>
            <Flex alignItems="center" mt={5}>
              <InputGroup>
                <InputLeftElement
                  marginTop={1}
                  pointerEvents="none"
                  children={<RiSearch2Line color="gray.300" />}
                />
                <Input
                  type="text"
                  name="search"
                  size="lg"
                  variant={"filled"}
                  onInput={(e) => {}}
                  placeholder="Search Store"
                />
              </InputGroup>
            </Flex>
            <Flex alignItems="center" mt={2}>
              <Switch
                id="isSelectedAll"
                name="isSelectedAll"
                onChange={(e) => {}}
                isChecked={false}
              />
              <Text fontWeight={600} fontSize={"md"}>
                Select All
              </Text>

              <Button ml={5} variant="ghost" onClick={() => {}}>
                Reset All
              </Button>
            </Flex>
            <SimpleGrid columns={2} spacing={4} mt={8} pb={12}>
              <Checkbox
                key={0}
                isChecked={false}
                id={"012"}
                isDisabled={false} // Disable unchecking when userLocations length is 1
                onChange={() => {}}
                w={"full"}
                sx={smoothClasses}
                size="md"
                _hover={{ backgroundColor: "gray.50" }}
                alignItems={"flex-start"}
                px={3}
                borderRadius={"md"}
                py={3}
                border={"1px solid"}
                borderColor={"gray.200"}
              >
                <FormLabel ml={1} mb={0}>
                  <Text
                    lineHeight={1}
                    mb={1}
                    fontWeight={"medium"}
                    color={"gray.900"}
                  >
                    {"001" + " - "} {"Alabama"}
                  </Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    {"Kpv LLC"}
                  </Text>
                </FormLabel>
              </Checkbox>
            </SimpleGrid>{" "}
          </div>

          <Box
            position={"fixed"}
            bottom={0}
            background={"white"}
            width={"full"}
            px={4}
            py={4}
            borderTopWidth={1}
            borderTopColor={"gray.300"}
            left={0}
            display="flex"
            justifyContent={"flex-end"}
          >
            <>
              <Button
                ml={4}
                colorScheme={"brandPrimary"}
                variant={"solid"}
                onClick={() => {}}
                minW={"100px"}
              >
                Apply
              </Button>
            </>

            {/* <>
              <Button
                ml={4}
                colorScheme={"brandPrimary"}
                variant={"solid"}
                onClick={() => {}}
                minW={"100px"}
              >
                Apply
              </Button>{" "}
            </> */}
          </Box>
        </Box>
      </CommonDrawer>
    </>
  );
};

export default Header;
