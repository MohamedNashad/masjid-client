// import KendoSample from "@/components/kendo-grids/kendo-sample";
// import CardHeaderButtons from "@/components/molecules/card-header-buttons";
// import {
//   Box,
//   Checkbox,
//   Divider,
//   FormLabel,
//   Grid,
//   GridItem,
//   Select,
// } from "@chakra-ui/react";
// import React from "react";

// type Props = {};

// const Sample = (props: Props) => {
//   return (
//     <>
//       <CardHeaderButtons />
//       <Grid templateColumns="repeat(5, 1fr)" gap={6}>
//         <GridItem w="100%">
//           <FormLabel fontWeight={"semi-bold"}>Select Status</FormLabel>
//           <Select placeholder="Select Status">
//             <option value="option1">Active</option>
//             <option value="option2">Inactive</option>
//             <option value="option3">All</option>
//           </Select>
//         </GridItem>
//         <GridItem w="100%" h="10">
//           <FormLabel fontWeight={"semi-bold"}>Filter</FormLabel>
//           <Select placeholder="Select option">
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//           </Select>
//         </GridItem>
//         {/*
//         <GridItem w="100%" h="10" bg="blue.500" />
//         <GridItem w="100%" h="10" bg="blue.500" /> */}
//       </Grid>

//       <Grid templateColumns="repeat(4, 1fr)" gap={6}>
//         <GridItem w="100%">
//           <Box>
//             <Checkbox
//               alignItems={"center"}
//               px={3}
//               borderRadius={"md"}
//               py={2}
//               mt={2}
//               bg={"white"}
//               border={"1px solid"}
//               borderColor={"gray.200"}
//               width={"full"}
//               onChange={() => {}}
//             >
//               Share Location Employee
//             </Checkbox>
//           </Box>
//         </GridItem>
//         <GridItem w="100%">
//           <Box>
//             <Checkbox
//               alignItems={"center"}
//               px={3}
//               borderRadius={"md"}
//               py={2}
//               mt={2}
//               bg={"white"}
//               border={"1px solid"}
//               borderColor={"gray.200"}
//               width={"full"}
//               onChange={() => {}}
//             >
//               Share Location Employee
//             </Checkbox>
//           </Box>
//         </GridItem>
//         <GridItem w="100%">
//           <Box>
//             <Checkbox
//               alignItems={"center"}
//               px={3}
//               borderRadius={"md"}
//               py={2}
//               mt={2}
//               bg={"white"}
//               border={"1px solid"}
//               borderColor={"gray.200"}
//               width={"full"}
//               onChange={() => {}}
//             >
//               Share Location Employee
//             </Checkbox>
//           </Box>
//         </GridItem>
//         <GridItem w="100%">
//           <Box>
//             <Checkbox
//               alignItems={"center"}
//               px={3}
//               borderRadius={"md"}
//               py={2}
//               mt={2}
//               bg={"white"}
//               border={"1px solid"}
//               borderColor={"gray.200"}
//               width={"full"}
//               onChange={() => {}}
//             >
//               Share Location Employee
//             </Checkbox>
//           </Box>
//         </GridItem>
//       </Grid>

//       <Divider mt={2} orientation="horizontal" color={"blue"} height={"20px"} />

//       {/* <Box mt={"25px"}> */}
//       {/* <Flex>*/}
//       {/* <Box>
//         <TableContainer>
//           <Table variant="simple">
//             <TableCaption>Imperial to metric conversion factors</TableCaption>
//             <Thead>
//               <Tr>
//                 <Th>To convert</Th>
//                 <Th>into</Th>
//                 <Th isNumeric>multiply by</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               <Tr>
//                 <Td>inches</Td>
//                 <Td>millimetres (mm)</Td>
//                 <Td isNumeric>25.4</Td>
//               </Tr>
//               <Tr>
//                 <Td>feet</Td>
//                 <Td>centimetres (cm)</Td>
//                 <Td isNumeric>30.48</Td>
//               </Tr>
//               <Tr>
//                 <Td>yards</Td>
//                 <Td>metres (m)</Td>
//                 <Td isNumeric>0.91444</Td>
//               </Tr>
//             </Tbody>
//             <Tfoot>
//               <Tr>
//                 <Th>To convert</Th>
//                 <Th>into</Th>
//                 <Th isNumeric>multiply by</Th>
//               </Tr>
//             </Tfoot>
//           </Table>
//         </TableContainer>
//       </Box> */}

//       {/* <KendoSample /> */}
//       {/*  <Spacer />
//         </Flex> */}
//       {/* </Box> */}
//     </>
//   );
// };

// export default Sample;

import React from "react";
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
import { GridNextjs } from "@/components/kendo-grids/main";

type Props = {};

const KendoSample = (props: Props) => {
  return (
    <>
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
      <GridNextjs />
    </>
  );
};

export default KendoSample;
