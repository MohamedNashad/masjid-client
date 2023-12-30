import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "./icons/search-icon";
import FilterPopover from "./filter-popover";

const Filters = ({ columnFilters, setColumnFilters }:any) => {
  const taskName = columnFilters.find((f:any) => f.id === "task")?.value || "";

  const onFilterChange = (id:any, value:any) =>
    setColumnFilters((prev:any) =>
      prev
        .filter((f:any) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  return (
    <HStack mb={6} spacing={3}>
      <InputGroup size="sm" maxW="12rem">
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder="Task name"
          borderRadius={5}
          value={taskName}
          onChange={(e) => onFilterChange("task", e.target.value)}
        />
      </InputGroup>
      <FilterPopover
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
    </HStack>
  );
};
export default Filters;
