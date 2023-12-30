import { BellIcon, CheckIcon, EmailIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tooltip,
} from "@chakra-ui/react";

import React from "react";
import {
  MdOutlineMailOutline,
  MdOutlineNotifications,
  MdOutlineMoreVert,
  MdOutlineRefresh,
  MdRadioButtonChecked,
} from "react-icons/md";
import { FiClock, FiFilter } from "react-icons/fi";
import {
  RiBuildingLine,
  RiCloseCircleLine,
  RiDeleteBack2Line,
  RiMapPinLine,
  RiSettings2Line,
  RiTeamLine,
} from "react-icons/ri";
import { smoothClasses } from "@/chakra-ui/theme/classes";
import { IoMdArrowDropdown, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { fadeLeftInXAnimationVariants } from "../animations";
import { motion } from "framer-motion";

type CardHeaderProps = {
  module?: string;
};

// const CardHeaderButtons = (props: :CardHeaderProps) => {
const CardHeaderButtons = ({ module }: CardHeaderProps) => {
  return (
    <>
      <motion.div
        variants={fadeLeftInXAnimationVariants}
        initial="initial"
        animate="animate"
      >
        <Stack
          spacing={4}
          direction="row"
          align="center"
          mb={5}
          // height={"18px"}
        >
          {module === "employee" && (
            <Tooltip label={"Refresh"} bg="brandPrimary.300" color="white">
              <IconButton
                isRound={true}
                variant="outline"
                colorScheme="brandPrimary"
                aria-label="Done"
                fontSize="18px"
                icon={<MdOutlineRefresh />}
                border={"none"}
                bg={"white"}
              />
            </Tooltip>
          )}
          <Tooltip label={"Refresh"} bg="brandPrimary.300" color="white">
            <IconButton
              isRound={true}
              variant="outline"
              colorScheme="brandPrimary"
              aria-label="Done"
              fontSize="18px"
              icon={<MdOutlineRefresh />}
              border={"none"}
              bg={"white"}
            />
          </Tooltip>
          <Tooltip label={"Refresh"} bg="brandPrimary.300" color="white">
            <ButtonGroup size="sm" isAttached variant="outline">
              <Button>
                Save
                {/* <Checkbox
                alignItems={"center"}
                px={3}
                borderRadius={"sm"}
                py={2}
                bg={"white"}
                border={"none"}
                borderColor={"gray.200"}
                width={"auto"}
                onChange={() => {}}
                // isChecked={true}
                sx={smoothClasses}
              /> */}
              </Button>
              <IconButton
                aria-label="Add to friends"
                icon={<IoMdArrowDropdown />}
              />
            </ButtonGroup>
          </Tooltip>

          <Tooltip
            label={"Temperory Employee"}
            bg="brandPrimary.300"
            color="white"
          >
            <IconButton
              isRound={true}
              variant="outline"
              colorScheme="brandPrimary"
              aria-label="Done"
              fontSize="18px"
              icon={<MdOutlineNotifications />}
              border={"none"}
              bg={"white"}
            />
          </Tooltip>
          <Tooltip label={"Report Scam"} bg="brandPrimary.300" color="white">
            <IconButton
              isRound={true}
              variant="outline"
              colorScheme="brandPrimary"
              aria-label="Done"
              fontSize="18px"
              icon={<CheckIcon />}
              border={"none"}
              bg={"white"}
            />
          </Tooltip>
          <Tooltip label={"Report Scam"} bg="brandPrimary.300" color="white">
            <IconButton
              isRound={true}
              variant="outline"
              colorScheme="brandPrimary"
              aria-label="Done"
              fontSize="18px"
              icon={<MdOutlineMailOutline />}
              border={"none"}
              bg={"white"}
            />
          </Tooltip>
          <Divider orientation="vertical" color={"blue"} height={"20px"} />
          <Tooltip label={"Report Scam"} bg="brandPrimary.300" color="white">
            <IconButton
              isRound={true}
              variant="outline"
              colorScheme="brandPrimary"
              aria-label="Done"
              fontSize="18px"
              icon={<LinkIcon />}
              border={"none"}
              bg={"white"}
            />
          </Tooltip>
          <Tooltip label={"Report Scam"} bg="brandPrimary.300" color="white">
            <IconButton
              isRound={true}
              variant="outline"
              colorScheme="brandPrimary"
              aria-label="Done"
              fontSize="18px"
              icon={<FiClock />}
              border={"none"}
              bg={"white"}
            />
          </Tooltip>
          <Tooltip label={"More"} bg="brandPrimary.300" color="white">
            <IconButton
              isRound={true}
              variant="outline"
              colorScheme="brandPrimary"
              aria-label="Done"
              fontSize="18px"
              icon={<RiSettings2Line />}
              border={"none"}
              bg={"white"}
            />
          </Tooltip>
          <Divider orientation="vertical" color={"blue"} height={"20px"} />

          <Menu>
            <Tooltip label={"More"} bg="brandPrimary.300" color="white">
              <MenuButton
                as={IconButton}
                variant="outline"
                bg={"white"}
                _hover={{ backgroundColor: "gray.100" }}
                _active={{ backgroundColor: "gray.100" }}
                px={2}
                color="brandPrimary.500"
                icon={<MdOutlineMoreVert size={"1.2rem"} />}
                rounded={"full"}
                border={"none"}
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
            </MenuList>
          </Menu>

          <Menu>
            <Tooltip label={"More"} bg="brandPrimary.300" color="white">
              <MenuButton
                as={IconButton}
                variant="outline"
                bg={"white"}
                _hover={{ backgroundColor: "gray.100" }}
                _active={{ backgroundColor: "gray.100" }}
                px={2}
                color="brandPrimary.500"
                icon={<MdOutlineMoreVert size={"1.2rem"} />}
                rounded={"full"}
                border={"none"}
              />
            </Tooltip>
            <MenuList>
              <MenuItem icon={<RiBuildingLine />} onClick={() => {}}>
                Active
              </MenuItem>
              <MenuItem icon={<RiMapPinLine />} onClick={() => {}}>
                Inactive
              </MenuItem>
              <MenuItem icon={<RiTeamLine />} onClick={() => {}}>
                All
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <Tooltip label={"More"} bg="brandPrimary.300" color="white">
              <MenuButton
                as={IconButton}
                variant="outline"
                bg={"white"}
                _hover={{ backgroundColor: "gray.100" }}
                _active={{ backgroundColor: "gray.100" }}
                px={2}
                color="brandPrimary.500"
                icon={<FiFilter size={"1.2rem"} />}
                rounded={"full"}
                border={"none"}
              />
            </Tooltip>
            <MenuList>
              <MenuItem icon={<RiBuildingLine />} onClick={() => {}}>
                Active
              </MenuItem>
              <MenuItem icon={<RiMapPinLine />} onClick={() => {}}>
                Inactive
              </MenuItem>
              <MenuItem icon={<RiTeamLine />} onClick={() => {}}>
                All
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <Tooltip label={"More"} bg="brandPrimary.300" color="white">
              <MenuButton
                as={IconButton}
                variant="outline"
                bg={"white"}
                _hover={{ backgroundColor: "gray.100" }}
                _active={{ backgroundColor: "gray.100" }}
                px={2}
                color="brandPrimary.500"
                icon={<FiFilter size={"1.2rem"} />}
                rounded={"full"}
                border={"none"}
              />
            </Tooltip>
            <MenuList>
              <MenuItem icon={<RiBuildingLine />} onClick={() => {}}>
                Active
              </MenuItem>
              <MenuItem icon={<RiMapPinLine />} onClick={() => {}}>
                Inactive
              </MenuItem>
              <MenuItem icon={<RiTeamLine />} onClick={() => {}}>
                All
              </MenuItem>
            </MenuList>
          </Menu>

          {/* <Flex flexDirection={"row"}> */}
          <Menu>
            <Tooltip label={"More"} bg="brandPrimary.300" color="white">
              <MenuButton
                as={IconButton}
                variant="outline"
                bg={"white"}
                _hover={{ backgroundColor: "gray.100" }}
                _active={{ backgroundColor: "gray.100" }}
                px={2}
                color="brandPrimary.500"
                icon={<IoMdCheckmarkCircleOutline size={"1.2rem"} />}
                rounded={"full"}
                border={"none"}
              />
            </Tooltip>
            <MenuList>
              <MenuItem
                icon={<IoMdCheckmarkCircleOutline />}
                onClick={() => {}}
              >
                Active
              </MenuItem>
              <MenuItem icon={<RiCloseCircleLine />} onClick={() => {}}>
                Inactive
              </MenuItem>
              <MenuItem icon={<MdRadioButtonChecked />} onClick={() => {}}>
                All
              </MenuItem>
            </MenuList>
          </Menu>
          <Stack direction="row">
            {/* <Badge>Default</Badge> */}
            <Badge colorScheme="green">ACTIVE</Badge>
            <Badge colorScheme="red">INACTIVE</Badge>
            <Badge colorScheme="purple">ALL</Badge>
          </Stack>
          {/* </Flex> */}

          <Checkbox
            alignItems={"center"}
            px={3}
            borderRadius={"md"}
            py={2}
            bg={"white"}
            border={"1px solid"}
            borderColor={"gray.200"}
            width={"auto"}
            onChange={() => {}}
            // isChecked={true}
            sx={smoothClasses}
          >
            {/* <IoMdArrowDropdown /> */}
            <Menu>
              <Tooltip label={"More"} bg="brandPrimary.300" color="white">
                <MenuButton
                  as={IconButton}
                  variant="outline"
                  bg={"white"}
                  _hover={{ backgroundColor: "gray.100" }}
                  _active={{ backgroundColor: "gray.100" }}
                  px={2}
                  color="brandPrimary.500"
                  icon={<IoMdArrowDropdown size={"1.2rem"} />}
                  rounded={"full"}
                  border={"none"}
                />
              </Tooltip>
              <MenuList>
                <MenuItem icon={<RiBuildingLine />} onClick={() => {}}>
                  All
                </MenuItem>
                <MenuItem icon={<RiMapPinLine />} onClick={() => {}}>
                  None
                </MenuItem>
                <MenuItem icon={<RiTeamLine />} onClick={() => {}}>
                  Read
                </MenuItem>
              </MenuList>
            </Menu>
          </Checkbox>
        </Stack>
        <Divider mb={8} />
      </motion.div>
    </>
  );
};

export default CardHeaderButtons;
