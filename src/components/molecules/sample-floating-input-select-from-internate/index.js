import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { Select } from "./ReactSelect";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .identifier Input:not(:placeholder-shown) + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

const SelectInput = ({
  id,
  label,
  helperText,
  options,
  getOptionValue,
  getOptionLabel,
}) => {
  return (
    <ChakraProvider theme={theme}>
      <FormControl variant="floating" id={id}>
        <Select
          color={"black"}
          className="identifier"
          placeholder=" "
          getOptionValue={getOptionValue}
          getOptionLabel={getOptionLabel}
          options={options}
        />
        <FormLabel htmlFor={id}>{label}</FormLabel>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </ChakraProvider>
  );
};
const TextInput = ({ id, label, value, onChange, helperText, ...rest }) => {
  return (
    <ChakraProvider theme={theme}>
      <FormControl variant="floating" id={id}>
        <Input placeholder=" " type="text" />
        <FormLabel {...rest} htmlFor={id}>
          {label}
        </FormLabel>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </ChakraProvider>
  );
};

// Filters
export const TextInputFilter = ({ helperText }) => {
  return (
    <TextInput id="numero" label={"Username or E-mail"} helperText={helperText} />
  );
};

export const SelectCities = ({ value }) => {
  const data = [
    {
      id: 1,
      name: "Boston",
    },
    {
      id: 2,
      name: "New York",
    },
    {
      id: 3,
      name: "Cumberland",
    },
  ];
  return (
    <SelectInput
      label="City Filter:"
      options={data}
      getOptionValue={(city) => city.id}
      getOptionLabel={(city) => city.name}
    />
  );
};
