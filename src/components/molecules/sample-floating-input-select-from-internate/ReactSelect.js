import React from "react";
import ReactSelect from "react-select";
import { useTheme } from "@chakra-ui/react";

export const Select = React.forwardRef(
  ({ isInvalid, size, getColorValue, mb, mr, ...rest }, ref) => {
    const { styles, theme } = useSelectStyles({
      isInvalid,
      size,
      getColorValue,
      mb,
      mr
    });

    return (
      <ReactSelect
        className="identificador"
        ref={ref}
        theme={theme}
        styles={styles}
        {...rest}
      />
    );
  }
);

Select.defaultProps = {
  placeholder: " ",
  noOptionsMessage: () => "Sem opções disponíveis",
  loadingMessage: () => "Carregando...",
  menuPlacement: "auto",
  isClearable: true
};

const useSelectStyles = ({
  isInvalid,
  size,
  getColorValue,
  mb,
  mr,
  roundedLeft
}) => {
  const { sizes, radii, colors, space, fontSizes, zIndices } = useTheme();

  const theme = (_theme) => {
    return {
      ..._theme,
      borderRadius: sizes[1],
      colors: {
        ..._theme.colors,
        primary: colors.gray["500"],
        primary75: colors.gray["200"],
        primary50: colors.gray["100"],
        primary25: colors.gray["50"],
        danger: colors.red["500"],
        dangerLight: colors.red["300"]
      }
    };
  };

  const styles = {
    container: (provided) => {
      const _styles = {
        marginBottom: (mb && space[mb]) || mb,
        marginRight: (mr && space[mr]) || mr
      };

      return { ...provided, ..._styles };
    },
    control: (provided, state) => {
      const _styles = {
        minHeight: sizes[10],
        paddingLeft: space[2],
        borderColor: colors.gray[400],
        borderRadius: radii.md,
        fontSize: fontSizes.md,
        borderTopLeftRadius: (roundedLeft && radii[roundedLeft]) || roundedLeft,
        borderBottomLeftRadius:
          (roundedLeft && radii[roundedLeft]) || roundedLeft
      };

      const hoverStyles = {
        borderColor: colors.gray[300]
      };

      if (state.isDisabled) {
        _styles.opacity = 0.4;
        _styles.cursor = "not-allowed";
        _styles.pointerEvents = "initial";
        _styles.backgroundColor = "transparent";
      }

      if (state.isFocused) {
        _styles.boxShadow = `0 0 0 1px ${colors.blue["500"]}`;
        _styles.borderColor = colors.blue["500"];
        hoverStyles.borderColor = colors.blue["500"];
      }

      if (isInvalid) {
        _styles.boxShadow = `0 0 0 1px ${colors.red["500"]}`;
        _styles.borderColor = colors.red["500"];
        hoverStyles.borderColor = colors.red["500"];
      }

      if (size === "sm") {
        _styles.minHeight = sizes[8];
        _styles.borderRadius = radii.sm;
        _styles.fontSize = fontSizes.sm;
        _styles.paddingLeft = space[0];
      }

      return {
        ...provided,
        ..._styles,
        "&:hover": {
          ...hoverStyles
        }
      };
    },
    indicatorsContainer: (provided) => {
      const _styles = {};

      if (size === "sm") {
        _styles.height = "1.9rem";
        _styles.minHeight = "1.9rem";
      }

      return {
        ...provided,
        ..._styles
      };
    },
    input: (provided) => {
      const _styles = {};

      if (size === "sm") {
        _styles.margin = "0rem";
      }

      return {
        ...provided,
        ..._styles
      };
    },
    multiValueLabel: (_styles) => ({
      ..._styles,
      color: getColorValue ? "white" : _styles.color
    }),
    multiValue: (_styles, { data }) => {
      return {
        ..._styles,
        color: getColorValue ? "white" : _styles.color,
        backgroundColor: getColorValue
          ? getColorValue(data)
          : _styles.backgroundColor // TODO: tornar personalizável?
      };
    },
    menu: (provided) => {
      const _styles = { zIndex: zIndices.docked };
      return { ...provided, ..._styles };
    },
    option: (provided) => {
      const _styles = {};

      if (size === "sm") {
        _styles.paddingLeft = space[2];
        _styles.paddingRight = space[2];
        _styles.paddingTop = space[1];
        _styles.paddingBottom = space[1];
      }

      return { ...provided, ..._styles };
    },
    noOptionsMessage: (provided) => {
      const _styles = {};

      if (size === "sm") {
        _styles.paddingLeft = space[2];
        _styles.paddingRight = space[2];
        _styles.paddingTop = space[1];
        _styles.paddingBottom = space[1];
      }

      return { ...provided, ..._styles };
    }
  };

  return { theme, styles };
};
