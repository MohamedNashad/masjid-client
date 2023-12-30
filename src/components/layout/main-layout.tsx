import { Box, Text } from "@chakra-ui/react";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import Header from "./header/Header";
// import { toggleAction } from "../../slices/sidebarToggleSlice";
import "./main-layout.css";
import { motion } from "framer-motion";
import useWindowDimensions from "@/hooks/window-dimensions";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import SideBar from "./sidebar/sidebar";
import { toggleAction } from "@/redux/slices/sidebar-toggle-slice";
import Header from "./header/header";
import endpoints from "@/configs/endpoints-config";

interface Props {
  children: React.ReactNode;
}

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const MainLayout: React.FC<Props> = ({ children }) => {

  const toggleMenu = useSelector((store: RootState) => store.sidebarToggleReducer);

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(toggleAction());
  };

  const isCollapse = toggleMenu.collapseSidebarMenu;
  const { browserWidth } = useWindowDimensions();

  return (
    <Box m={{ base: 0, md: "12px" }} mr={0}>
      <SideBar
        toggleSidebar={onClick}
        width={{
          base: `${isCollapse ? "248px" : "248px"}`,
          md: `${isCollapse ? "80px" : "248px"}`,
        }}
        transform={{
          base: `${isCollapse ? "translateX(-248px)" : "translateX(0px)"}`,
          md: `${isCollapse ? "translateX(0px)" : "translateX(0px)"}`,
        }}
        paddingX={"20px"}
        src={
          browserWidth < 768
            ? "/images/logo-square.svg"
            : `${
                isCollapse
                  ? "/images/logo-square.svg"
                  : endpoints.frontEndBaseUrl + "images/workment-logo.svg"
              }`
        }
        linkPaddingX={isCollapse ? "2" : "4"}
        justifyContent={isCollapse ? "center" : "flex-start"}
        mr={isCollapse ? "0" : "0"}
        textDisplay={isCollapse ? "none" : "block"}
        iconSize={isCollapse ? "28px" : "5"}
      />
      <Box
        paddingLeft={{ base: "0px", md: `${isCollapse ? "80px" : "248px"}` }}
        transition="all 0.3s ease-in-out"
      >
        <Header
          transform={isCollapse ? "rotate(-180deg)" : "rotate(0deg)"}
          toggleOnClick={onClick}
          width={{
            base: "100%",
            md: `${isCollapse ? "calc(100% - 80px)" : "calc(100% - 248px)"}`,
          }}
        />
        <motion.div
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          // transition={{
          //   x: { type: "spring", stiffness: 100 },
          //   duration: 0.1,
          //   delay: 0,
          // }}
        >
          <Box
            paddingTop={{ base: "152px", md: "100px" }}
            paddingX={{ base: "16px", md: "32px" }}
            pos={"relative"}
            minH={"100vh"}
            zIndex={9}
          >
            {children}
          </Box>
        </motion.div>
        {/* footer */}
        <Box
          bg={"#f2f6fe "}
          marginTop={"32px"}
          paddingX="20px"
          paddingY={"20px"}
          textAlign={"center"}
        >
          <Text fontSize={"sm"} fontWeight={600}>
            © 2023 Workment
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
