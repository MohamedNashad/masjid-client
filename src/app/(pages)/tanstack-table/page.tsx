import TaskTable from "@/components/tanstack-tables/task-table";
import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Box maxW={1000} bg={"gray"} mx="auto" px={6} pt={24} fontSize="sm">
        <TaskTable />
      </Box>
    </>
  );
};

export default page;
