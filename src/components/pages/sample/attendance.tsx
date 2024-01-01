import React, { useState } from "react";
import { radioClasses, smoothClasses } from "@/chakra-ui/theme/classes";
import useWindowDimensions from "@/hooks/window-dimensions";
import { EmployeeListSkeleton } from "@/components/skeleton-views";
import { SearchIcon } from "@chakra-ui/icons";
import CustomScroller from "react-custom-scroller";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  RiAddLine,
  RiMore2Fill,
  RiShareLine,
  RiSoundModuleLine,
  RiStore3Line,
} from "react-icons/ri";
import Card from "@/components/molecules/card";
// import KendoSample from "@/components/kendo-grids/kendo-sample";
import {
  Grid as KendoGrid,
  GridColumn as Column,
  GridDetailRowProps,
  GridExpandChangeEvent,
  GridToolbar,
  GridItemChangeEvent,
  GridCellProps,
  GridRowProps,
  GridDataStateChangeEvent,
  GridPageChangeEvent,
} from "@progress/kendo-react-grid";
import PageHeading from "@/components/molecules/page-heading";
import KendoSample from "./sample";
import { GridNextjs } from "@/components/kendo-grids/main";

type Props = {};

const AttendancePage = (props: Props) => {
  const { isOpen: isOpenFilter, onToggle: onFilterToggle } = useDisclosure();
  const { browserWidth } = useWindowDimensions();
  const { isOpen: isEmpList, onToggle } = useDisclosure({
    defaultIsOpen: true,
  });
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const [isLoading, setIsLoading]: any = useState(false);

  return (
    <>
      {/* <PageHeading heading="AttendancePage" /> */}

      <Box>
        <Tabs variant="unstyled">
          {/* Main Tab list Navigation */}
          <TabList justifyContent={"space-between"}>
            <Flex alignItems={"center"} ml={{ base: 0, md: 3 }} gap={3}>
              <Tab
                whiteSpace={"nowrap"}
                _selected={{
                  bg: "white",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  fontWeight: "bold",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  color: "brandPrimary.500",
                }}
              >
                By User
              </Tab>
              <Tab
                whiteSpace={"nowrap"}
                _selected={{
                  bg: "white",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  fontWeight: "bold",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  color: "brandPrimary.500",
                }}
              >
                By Store
              </Tab>
            </Flex>
            <Flex
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={3}
              width={"50%"}
            >
              <Flex alignItems={"center"} gap={2}></Flex>
              <Menu>
                <Tooltip label={"More"} bg="brandPrimary.300" color="white">
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<RiMore2Fill />}
                    variant="outline"
                    colorScheme={"brandPrimary"}
                  />
                </Tooltip>
                <MenuList>
                  {/* Add new shift button */}

                  <MenuItem icon={<RiAddLine />} onClick={() => {}}>
                    Add New Shift
                  </MenuItem>

                  <MenuItem icon={<RiShareLine />} onClick={() => {}}>
                    Share Employee
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </TabList>

          <TabPanels px={0}>
            <TabPanel p={0}>
              <Card>
                {/* Emp search and filter wrapper starts here */}
                <Collapse in={isOpenFilter} animateOpacity>
                  <Grid
                    borderWidth={1}
                    borderColor={"gray.100"}
                    px={4}
                    py={4}
                    borderRadius={"sm"}
                    bg={"gray.50"}
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    mb={"40px"}
                  >
                    <GridItem display={"flex"} alignItems={"flex-end"}>
                      <Checkbox
                        alignItems={"center"}
                        px={3}
                        borderRadius={"md"}
                        py={2}
                        bg={"white"}
                        border={"1px solid"}
                        borderColor={"gray.200"}
                        width={"full"}
                        onChange={() => {}}
                        isChecked={false}
                        sx={smoothClasses}
                      >
                        Minors Only
                      </Checkbox>
                    </GridItem>
                    <GridItem display={"flex"} alignItems={"flex-end"}>
                      <Checkbox
                        alignItems={"center"}
                        px={3}
                        borderRadius={"md"}
                        py={2}
                        bg={"white"}
                        border={"1px solid"}
                        width={"full"}
                        borderColor={"gray.200"}
                        sx={smoothClasses}
                        onChange={() => {}}
                      >
                        Manually Edited Only
                      </Checkbox>
                    </GridItem>
                    <GridItem display={"flex"} alignItems={"flex-end"}>
                      <Checkbox
                        alignItems={"center"}
                        px={3}
                        borderRadius={"md"}
                        py={2}
                        bg={"white"}
                        border={"1px solid"}
                        width={"full"}
                        borderColor={"gray.200"}
                        sx={smoothClasses}
                        isChecked={true}
                        onChange={() => {}}
                      >
                        Currently Working Only
                      </Checkbox>
                    </GridItem>
                  </Grid>
                </Collapse>
                {/* Emp search and filter wrapper ends here */}

                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "350px calc(100% - 350px)",
                  }}
                  gap={0}
                >
                  {/* Emp list wrapper starts here */}
                  {isLoading ? (
                    <GridItem pr={{ base: 0, md: "30px" }}>
                      {browserWidth > 768 && <EmployeeListSkeleton />}
                    </GridItem>
                  ) : (
                    <>
                      {browserWidth < 768 && (
                        <Button
                          variant={"outline"}
                          onClick={() => {}}
                          marginBottom={"20px"}
                        >
                          {isEmpList ? "Close" : "Open"} Employee List
                        </Button>
                      )}
                      <Collapse
                        unmountOnExit={true}
                        in={isEmpList}
                        animateOpacity
                      >
                        <GridItem
                          pr={{ base: 0, md: "30px" }}
                          overflow="hidden"
                        >
                          <Flex alignItems={"center"} gap={3} mb={4}>
                            <FormControl>
                              <InputGroup>
                                <Input
                                  bg={"white"}
                                  name="search"
                                  size={"md"}
                                  onInput={() => {}}
                                  type="text"
                                  variant="outline"
                                  placeholder="Search by ID or name"
                                />
                                <InputLeftElement pointerEvents="none">
                                  <SearchIcon color="gray.600" />
                                </InputLeftElement>
                              </InputGroup>
                            </FormControl>
                            <Tooltip
                              label={isOpenFilter ? "Collapse" : "Expand"}
                              bg="brandPrimary.300"
                              color="white"
                            >
                              <IconButton
                                icon={<RiSoundModuleLine />}
                                variant={isOpenFilter ? "solid" : "outline"}
                                onClick={onFilterToggle}
                                colorScheme={"brandPrimary"}
                                aria-label="Filter"
                              />
                            </Tooltip>
                          </Flex>
                          <CustomScroller
                            style={{ height: "642px" }}
                          ></CustomScroller>
                        </GridItem>
                      </Collapse>
                    </>
                  )}
                </Grid>
              </Card>
            </TabPanel>
            <TabPanel p={0}>
              <Card>
                <Box mb={5}>
                  {/* <EmployeeTotals
                    totalTime={totalWorkingHoursCard}
                    totalWages={totalWagesForSelectedLocationCard}
                    regular={totalRegularHoursCard}
                    overTime={totalOverTimeHoursCard}
                  /> */}
                </Box>
                <FormControl maxW={"400px"} mb={4} pt={4}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="gray.600" />
                    </InputLeftElement>
                    <Input
                      bg={"white"}
                      type="text"
                      name="search"
                      // onInput={(e) => onSearch((e.target as HTMLInputElement).value)}
                      placeholder="Search Store"
                    />
                  </InputGroup>
                </FormControl>
                {/* <KendoSample /> */}
                {/* <KendoGrid
                  style={{ height: "400px" }}
                  data={[{}]}
                  // skip={page.skip}
                  // take={page.take}
                  // onPageChange={pageChange}
                  sortable={true}
                  filterable={true}
                >
                  <Column
                    field="locationId"
                    title="Store ID"
                    // cell={locationStoreCode}
                  />
                  <Column
                    field="locationName"
                    title="Store Name"
                    // cell={locationStoreName}
                  />
                  <Column
                    field="totalHours"
                    title="Total Working Hrs"
                    // cell={locationStoreTotalWorkingHours}
                  />
                  <Column
                    field="regularHours"
                    title="Regular Hrs"
                    // cell={locationStoreRegularHours}
                  />
                  <Column
                    field="overtime"
                    title="Overtime"
                    // cell={locationStoreOvertimeHours}
                  />
                  <Column
                    field="totalWages"
                    title="Total Cost"
                    // cell={locationStoreTotalCost}
                  />
                </KendoGrid> */}
                {/* <KendoSample /> */}
              </Card>
              {/* <Card>
                <GridNextjs />
              </Card> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* <Card>
        <GridNextjs />
      </Card> */}
    </>
  );
};

export default AttendancePage;
