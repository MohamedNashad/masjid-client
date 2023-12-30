import { Flex, FormControl, IconButton, Select } from "@chakra-ui/react";
import {
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiCalendar2Line,
} from "react-icons/ri";

type PayweekPickerProps = {
  prevOnClick: () => void;
  prevIsDisabled: boolean;
  defaultValue: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectIsDisabled: boolean;
  nextDisabled: boolean;
  nextOnClick: () => void;
  children: React.ReactNode;
};

export default function PayweekPicker({
  prevOnClick,
  prevIsDisabled,
  defaultValue,
  value,
  onChange,
  selectIsDisabled,
  children,
  nextDisabled,
  nextOnClick,
}: PayweekPickerProps) {
  return (
    <Flex
      alignItems={"center"}
      gap={2}
      background={"white"}
      borderRadius={"full"}
      px={1}
      boxShadow={"md"}
    >
      <IconButton
        size={"sm"}
        colorScheme="gray"
        variant={"solid"}
        borderRadius={"full"}
        onClick={prevOnClick}
        isDisabled={prevIsDisabled}
        aria-label="Prev Week"
        icon={<RiArrowDropLeftLine size={"1.8rem"} />}
      />
      <FormControl w={"270px"}>
        <Select
          defaultValue={defaultValue}
          value={value}
          bg={"white"}
          borderRadius={"md"}
          border={"none"}
          onChange={onChange}
          isDisabled={selectIsDisabled}
          icon={<RiCalendar2Line />}
        >
          {children}
        </Select>
      </FormControl>
      <IconButton
        size={"sm"}
        isDisabled={nextDisabled}
        colorScheme="gray"
        borderRadius={"full"}
        variant={"solid"}
        onClick={nextOnClick}
        aria-label="Prev Week"
        icon={<RiArrowDropRightLine size={"1.8rem"} />}
      />
    </Flex>
  );
}
