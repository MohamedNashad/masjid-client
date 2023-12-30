import useWindowDimensions from "@/hooks/window-dimensions";
import { toggleAction } from "@/redux/slices/sidebar-toggle-slice";
import { useAppDispatch } from "@/redux/store";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link as ChakraLink,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiClipboardLine,
  RiCloseLine,
  RiDashboardLine,
  RiGroup2Line,
  RiStarSmileLine,
  RiWalkLine,
} from "react-icons/ri";
import Link from "next/navigation";
import CustomScroller from "react-custom-scroller";
import endpoints from "@/configs/endpoints-config";
import { motion } from "framer-motion";
import { fadeLeftInXAnimationVariants } from "@/components/animations/motion-animation";

interface Props {
  width: {};
  paddingX: string;
  src: string;
  linkPaddingX: string;
  justifyContent: string;
  mr: string;
  textDisplay: string;
  iconSize: string;
  display?: {};
  toggleSidebar: () => void;
  transform: {};
  // name?: string;
}

const SideBar: React.FC<Props> = ({
  width,
  paddingX,
  display,
  src,
  linkPaddingX,
  justifyContent,
  mr,
  textDisplay,
  iconSize,
  transform,
  toggleSidebar,
}) => {
  const dispatch = useAppDispatch();
  const { browserWidth } = useWindowDimensions();
  const hideSidebar = () => {
    browserWidth < 768 && dispatch(toggleAction());
  };

  const [openSubMenu, setOpenSubMenu] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: RiDashboardLine,
      permission: true,
      path: "/dashboard",
      isActive:
        window.location.href.split("/").pop() ===
        `${endpoints.frontEndBaseUrl}dashboard`.split("/").pop()
          ? true
          : false,
    },
    {
      name: "Attendance",
      // permission: attendanceViewPermission,
      icon: RiWalkLine,
      path: "/attendance-split-view",
      isActive:
        window.location.href.split("/").pop() ===
          `${endpoints.frontEndBaseUrl}attendance`.split("/").pop() ||
        window.location.href.split("/").pop() ===
          `${endpoints.frontEndBaseUrl}attendance-detail`.split("/").pop() ||
        window.location.href.split("/").pop() ===
          `${endpoints.frontEndBaseUrl}attendance-split-view`.split("/").pop()
          ? true
          : false,
    },
    {
      name: "Attendance Review",
      // permission: attendanceReviewViewPermission,
      icon: RiStarSmileLine,
      path: "/attendance-review",
      isActive:
        window.location.href.split("/").pop() ===
        `${endpoints.frontEndBaseUrl}attendance-review`.split("/").pop()
          ? true
          : false,
    },
    {
      name: "Reports",
      // permission: reportsViewPermission,
      icon: RiClipboardLine,
      path: "/attendance-report",
      isActive: window.location.href.includes("/attendance-report"),
      // subMenuItems: [
      //   // Adding sub-menu items for Reports
      //   {
      //     name: "Generate Report",
      //     path: "/generate-report",
      //     isActive: window.location.href.includes("/generate-report"),
      //   },
      //   {
      //     name: "View Reports",
      //     path: "/view-reports",
      //     isActive: window.location.href.includes("/view-reports"),
      //   },
      //   // Add more sub-menu items if needed
      // ],
    },
    {
      name: "Employees",
      // permission: employeeViewPermission,
      icon: RiGroup2Line,
      path: "/employee",
      isActive: window.location.href.includes("/employee"),
    },
  ];

  const toggleSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const SidebarItem = ({ props }: any) => {
    if (props.subMenuItems) {
      return (
        <Box hideBelow={"sm"}>
          <Button
            pos={"static"}
            w={"full"}
            onClick={toggleSubMenu}
            display="flex"
            alignItems="center"
            paddingY={3}
            paddingX={linkPaddingX}
            mb={2}
            justifyContent={"space-between"}
            borderRadius="8px"
            _hover={{ color: "white" }}
            color={props.isActive ? "white" : "white"}
            bg={props.isActive ? "#18255F" : "transparent"}
          >
            <Flex alignItems={"center"}>
              <motion.div
                variants={fadeLeftInXAnimationVariants}
                initial="initial"
                animate="animate"
              >
                <Box mr={mr}>{props.icon}</Box>
                <Text display={textDisplay} fontWeight={500}>
                  {props.name}
                </Text>
              </motion.div>
            </Flex>
            <Box>
              <RiArrowRightSLine size={"1.5rem"} />
            </Box>
          </Button>
          {openSubMenu && (
            <Box
              bg={"white"}
              pos={"absolute"}
              left={"100%"}
              top={0}
              height={"100vh"}
              zIndex={1}
              p={4}
              boxShadow={"xl"}
              width={"248px"}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                pb={8}
              >
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  {props.name}
                </Text>
                <IconButton
                  aria-label={"close"}
                  variant={"outline"}
                  onClick={() => setOpenSubMenu(false)}
                  size={"md"}
                  colorScheme={"gray"}
                  icon={<RiArrowLeftSLine size={"1.75rem"} color={"#666"} />}
                />
              </Flex>
              {props.subMenuItems.map((child: any, index: number) => (
                <VStack gap={3}>
                  <ChakraLink key={index}>{child.name}</ChakraLink>
                </VStack>
              ))}
            </Box>
          )}
        </Box>
      );
    } else {
      return (
        <ChakraLink
          as={Link}
          to={props.path}
          display="flex"
          width={"full"}
          alignItems="center"
          paddingY={4}
          paddingX={linkPaddingX}
          justifyContent={justifyContent}
          borderTopLeftRadius={"8px"}
          borderBottomLeftRadius={"8px"}
          onClick={hideSidebar}
          position={"relative"}
          _hover={{
            color: props.isActive ? "#293c8b" : "white",
          }}
          color={props.isActive ? "#293c8b" : "#a9b4e2"}
          bg={props.isActive ? "#f2f6fe" : "transparent"}
          _after={
            props.isActive && {
              content: '""',
              position: "absolute",
              backgroundColor: "transparent",
              bottom: "-50px",
              height: "50px",
              width: "24px",
              right: 0,
              borderTopRightRadius: "24px",
              boxShadow: "0 -24px 0 0 #f2f6fe ",
            }
          }
          _before={
            props.isActive && {
              content: '""',
              position: "absolute",
              backgroundColor: "transparent",
              top: "-50px",
              height: "50px",
              width: "24px",
              right: 0,
              borderBottomRightRadius: "24px",
              boxShadow: "0 24px 0 0 #f2f6fe",
            }
          }
        >
          <div className={props.isActive ? "active" : "no"}></div>
          <motion.div
            variants={fadeLeftInXAnimationVariants}
            initial="initial"
            animate="animate"
          >
            <Icon mr={4} as={props.icon} boxSize={iconSize} />
          </motion.div>
          <motion.div
            variants={fadeLeftInXAnimationVariants}
            initial="initial"
            animate="animate"
          >
            <Text
              display={textDisplay}
              fontWeight={props.isActive ? "bold" : "500"}
            >
              {props.name}
            </Text>
          </motion.div>
        </ChakraLink>
      );
    }
  };

  return (
    <>
      <Box
        display={display}
        transform={transform}
        pos={"relative"}
        position="fixed"
        height={{ base: "100vh", md: "calc(100vh - 24px)" }}
        width={width}
        transition="all 0.3s ease-in-out"
        style={{
          backgroundColor: "#293c8b",
          backgroundImage: "linear-gradient(55deg, #293c8b 0%, #3749b1 100%)",
        }}
        // bgGradient="linear(to-l, #7928CA, #2596be)"
        paddingRight={0}
        zIndex={99}
        borderRadius={{ base: "0px", md: "2xl" }}
      >
        <Box zIndex={2} position={"relative"}>
          {/* Logo */}
          <Box
            paddingLeft={paddingX}
            paddingRight={"20px"}
            py={5}
            minH="32px"
            display="flex"
            alignItems="center"
            justifyContent={{ base: "space-between", md: "center" }}
          >
            <motion.div
              variants={fadeLeftInXAnimationVariants}
              initial="initial"
              animate="animate"
            >
              <Image src={src} alt="Workment" h={"100%"} minW={"32px"} />
            </motion.div>
            {browserWidth < 768 && (
              <IconButton
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
                icon={<RiCloseLine size="1.8rem" />}
                variant="solid"
                _hover={{ backgroundColor: "transparent" }}
                color={"white"}
                bg={"transparent"}
                borderRadius={"full"}
              />
            )}
          </Box>
          {/* Sidebar navigation */}
          <CustomScroller
            style={{
              height: "calc(100vh - 104px)",
              paddingRight: "0px !important",
            }}
          >
            <VStack
              mt={5}
              paddingLeft={"20px"}
              spacing={3}
              alignItems={"flex-start"}
            >
              {menuItems.map(
                // (item) => item.permission && <SidebarItem key={item.name} props={item} />,
                (item) => (
                  <SidebarItem key={item.name} props={item} />
                )
              )}
            </VStack>
          </CustomScroller>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
