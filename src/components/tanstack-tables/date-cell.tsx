import { forwardRef } from "react";
import { Box, Center, Icon } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "./icons/calendar-icon";
import theme from "@/chakra-ui/theme";

const DateCustomInput = forwardRef(
  ({ value, onClick, clearDate }: any, ref: any) => (
    <Center ref={ref} onClick={onClick} cursor="pointer">
      {value ? (
        <>
          {value}
          <Box
            pos="absolute"
            right={3}
            fontSize="md"
            color="red.300"
            onClick={(e) => {
              e.stopPropagation();
              clearDate();
            }}
          >
            &times;
          </Box>
        </>
      ) : (
        <Icon as={CalendarIcon} fontSize="xl" />
      )}
    </Center>
  )
);

const DateCell = ({ getValue, row, column, table }: any) => {
  const date = getValue();
  const { updateData } = table.options.meta;
  return (
    <Box
      className="date-wrapper"
      sx={theme.tanStackTableStyles[".date-wrapper"]}
    >
      <DatePicker
        // wrapperClassName="date-wrapper"
        dateFormat="MMM d"
        selected={date}
        onChange={(date: any) => updateData(row.index, column.id, date)}
        customInput={
          <DateCustomInput
            clearDate={() => updateData(row.index, column.id, null)}
          />
        }
      />
    </Box>
  );
};
export default DateCell;
