import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ButtonGroup,
  Flex,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  RiNodeTree,
  RiSplitCellsHorizontal,
  RiTableLine,
} from "react-icons/ri";
import ViewButtonGroup from "./button-group";

interface Props {
  heading: string;
  subHeadingOne?: string;
  subHeadingTwo?: string;
  subHeadingThree?: string;
  subHeadingFour?: string;
  pagePath?: string;
  currentView?: number | any;
}

const PageHeading: React.FC<Props> = ({
  heading,
  subHeadingOne,
  subHeadingTwo,
  subHeadingThree,
  subHeadingFour,
  pagePath,
  currentView,
}) => (
  <Box mb="6">
    <Flex
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent={"space-between"}
      gap={{ base: "4", md: "0" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{heading}</BreadcrumbLink>
        </BreadcrumbItem>
        {subHeadingOne && (
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{subHeadingOne}</BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {subHeadingTwo && (
          <BreadcrumbItem>
            <BreadcrumbLink>{subHeadingTwo}</BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {subHeadingThree && (
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{subHeadingThree}</BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {subHeadingFour && (
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{subHeadingFour}</BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>

      {/* use this */}
      {/* {pagePath === "attendance-split-view" && (
        <ButtonGroup variant={"outline"}>
         <Tooltip label={"Split View"} bg="brandPrimary.300" color="white">
          <IconButton
            aria-label="Split View"
            icon={<RiSplitCellsHorizontal size={"1.5rem"} />}
            onClick={() => {}}
            variant={currentView === 2 ? "solid" : "outline"}
            colorScheme={"brandPrimary"}
            size={"lg"}
            bg={currentView === 2 ? "brandPrimary.500" : "white"}
            borderColor={currentView === 2 ? "brandPrimary.500" : "gray.300"}
          />
        </Tooltip>
        <Tooltip
          label={"Currently Working View"}
          bg="brandPrimary.300"
          color="white"
        >
          <IconButton
            aria-label="Currently Working View"
            icon={<RiTableLine size={"1.5rem"} />}
            onClick={() => {}}
            variant={currentView === 0 ? "solid" : "outline"}
            colorScheme={"brandPrimary"}
            size={"lg"}
            bg={currentView === 0 ? "brandPrimary.500" : "white"}
            borderColor={currentView === 0 ? "brandPrimary.500" : "gray.300"}
          />
        </Tooltip>
        <Tooltip label="Drill-down View" bg="brandPrimary.300" color="white">
          <IconButton
            aria-label="Drill-down View"
            icon={<RiNodeTree size={"1.5rem"} />}
            onClick={() => {}}
            variant={currentView === 1 ? "solid" : "outline"}
            colorScheme={"brandPrimary"}
            size={"lg"}
            bg={currentView === 1 ? "brandPrimary.500" : "white"}
            borderColor={currentView === 1 ? "brandPrimary.500" : "gray.300"}
          />
        </Tooltip>
        </ButtonGroup>
      )} */}

      {/* <ButtonGroup variant={"outline"}>
        <Tooltip label={"Split View"} bg="brandPrimary.300" color="white">
          <IconButton
            aria-label="Split View"
            icon={<RiSplitCellsHorizontal size={"1.5rem"} />}
            onClick={() => {}}
            variant={currentView === 2 ? "solid" : "outline"}
            colorScheme={"brandPrimary"}
            size={"lg"}
            bg={currentView === 2 ? "brandPrimary.500" : "white"}
            borderColor={currentView === 2 ? "brandPrimary.500" : "gray.300"}
          />
        </Tooltip>
        <Tooltip
          label={"Currently Working View"}
          bg="brandPrimary.300"
          color="white"
        >
          <IconButton
            aria-label="Currently Working View"
            icon={<RiTableLine size={"1.5rem"} />}
            onClick={() => {}}
            variant={currentView === 0 ? "solid" : "outline"}
            colorScheme={"brandPrimary"}
            size={"lg"}
            bg={currentView === 0 ? "brandPrimary.500" : "white"}
            borderColor={currentView === 0 ? "brandPrimary.500" : "gray.300"}
          />
        </Tooltip>
        <Tooltip label="Drill Down View" bg="brandPrimary.300" color="white">
          <IconButton
            aria-label="Drill-down View"
            icon={<RiNodeTree size={"1.5rem"} />}
            onClick={() => {}}
            variant={currentView === 1 ? "solid" : "outline"}
            colorScheme={"brandPrimary"}
            size={"lg"}
            bg={currentView === 1 ? "brandPrimary.500" : "white"}
            borderColor={currentView === 1 ? "brandPrimary.500" : "gray.300"}
          />
        </Tooltip>
      </ButtonGroup> */}

      <ViewButtonGroup currentView={currentView} />
    </Flex>
  </Box>
);

export default PageHeading;
