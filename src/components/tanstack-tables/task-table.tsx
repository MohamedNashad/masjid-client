"use client";
import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Radio,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DATA from "./data";
import EditableCell from "./editable-cell";
import StatusCell from "./status-cell";
import DateCell from "./date-cell";
import Filters from "./filters";
import SortIcon from "./icons/sort-icon";
import theme from "@/chakra-ui/theme";

const columns: any = [
  {
    accessorKey: "task",
    header: "Task",
    size: 225,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusCell,
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: (row: any, columnId: any, filterStatuses: any) => {
      if (filterStatuses.length === 0) return true;
      const status = row.getValue(columnId);
      return filterStatuses.includes(status?.id);
    },
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: DateCell,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    size: 225,
    cell: EditableCell,
  },
];

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const [columnFilters, setColumnFilters] = useState([]);
  const [paginationCount, setPaginationCount] = useState(10); // State for pagination count

  const table: any = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex: any, columnId: any, value: any) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });

  return (
    <Box>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <Box
        className="table"
        w={table.getTotalSize()}
        sx={theme.tanStackTableStyles[".table"]}
      >
        {table.getHeaderGroups().map((headerGroup: any) => (
          <Box
            className="tr"
            key={headerGroup.id}
            sx={theme.tanStackTableStyles[".tr"]}
          >
            {headerGroup.headers.map((header: any) => (
              <Box
                className="th"
                w={header.getSize()}
                key={header.id}
                sx={theme.tanStackTableStyles[".th"]}
              >
                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <Icon
                    as={SortIcon}
                    mx={3}
                    fontSize={14}
                    onClick={header.column.getToggleSortingHandler()}
                  />
                )}
                {
                  {
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted()]
                }
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`}
                  sx={theme.tanStackTableStyles[".resizer"]}
                />
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row: any) => (
          <Box
            className="tr"
            key={row.id}
            sx={theme.tanStackTableStyles[".tr"]}
          >
            {row.getVisibleCells().map((cell: any) => (
              <Box
                className="td"
                w={cell.column.getSize()}
                key={cell.id}
                sx={theme.tanStackTableStyles[".td"]}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Divider mt={"5"} mb={"2"} />
      {/* <Text mb={2}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </Text>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Box>
          <Select value={paginationCount} onChange={handleChangePagination}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={-1}>ALL</option>{" "}
          </Select>
        </Box>
        <Button
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
      </ButtonGroup> */}

      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={6}
        alignItems={"center"}
        mb={"3"}
      >
        <GridItem w="100%">
          <Flex alignItems={"center"} p={"2"} gap={"3"}>
            <ButtonGroup size="sm" isAttached variant="outline">
              <Button
                className="border rounded p-1"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                {"<<"}
              </Button>
              <Button
                className="border rounded p-1"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {"<"}
              </Button>
              <Button
                className="border rounded p-1"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {">"}
              </Button>
              <Button
                className="border rounded p-1"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                {">>"}
              </Button>
            </ButtonGroup>

            <Flex alignItems={"center"}>
              <FormLabel>Page</FormLabel>
              <FormLabel as="b">
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </FormLabel>
            </Flex>

            <Box>
              <HStack spacing="12px" alignItems="center">
                <FormLabel flexShrink="0">Go to Page:</FormLabel>
                <Input
                  type="number"
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    table.setPageIndex(page);
                  }}
                  className="border p-1 rounded w-16"
                  width="50px"
                />
                <Select
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                  width="70px"
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                     {pageSize}
                    </option>
                  ))}
                </Select>
                <FormLabel flexShrink="0">Items Per Page</FormLabel>

              </HStack>
            </Box>
          </Flex>
        </GridItem>
      </Grid>

      {/* <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
    </Box>
  );
};
export default TaskTable;
