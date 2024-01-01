import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1368px",
  "2xl": "1536px",
};

const theme = extendTheme(
  { breakpoints },
  {
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    styles: {
      global: {
        svg: {
          cursor: "pointer",
        },
        // ... (other global styles)
      },
    },
    components: {
      Tabs: {
        baseStyle: {
          tab: {
            color: "gray.600",
            _selected: {
              fontWeight: "bold",
              boxShadow: "none",
            },
          },
        },
      },
      Accordion: {
        baseStyle: {
          button: {
            paddingTop: 5,
            paddingBottom: 5,
            color: "blue.700",
            fontWeight: "bold",
          },
          panel: {
            paddingTop: 3,
            paddingBottom: 8,
          },
        },
      },
      Link: {
        variants: {
          base: {
            color: "brandPrimary.500",
            fontWeight: 500,
            _hover: {
              color: "brandPrimary.400",
            },
          },
        },
        defaultProps: {
          variant: "base",
        },
      },
      Button: {
        variants: {
          outline: {
            borderColor: "gray.300",
          },
          base: {
            bg: "brandPrimary.500",
            color: "white",
            fontWeight: 600,
            _hover: {
              bg: "brandPrimary.600",
              _disabled: {
                bg: "brandPrimary.200",
              },
            },
            _disabled: {
              bg: "brandPrimary.200",
              color: "white",
              opacity: 1,
            },
            _loading: { opacity: 1 },
          },
        },
        defaultProps: {
          variant: "base",
        },
      },
    },
    colors: {
      brandPrimary: {
        50: "#ebefff",
        100: "#c8cfeb",
        200: "#a5afd9",
        300: "#828fc9",
        400: "#293C8B",
        500: "#4656a0",
        600: "#36437d",
        700: "#26305a",
        800: "#161d38",
        900: "#060a18",
      },
      brandSecondary: {
        10: "#f8fdfe",
        50: "#dcf3ff",
        100: "#aedaff",
        200: "#7cc0ff",
        300: "#4aa7ff",
        400: "#1a8eff",
        500: "#4BADE9",
        600: "#005bb4",
        700: "#004182",
        800: "#002751",
        900: "#000e21",
      },
    },
    tanStackTableStyles: {
      ".table": {
        border: "1px solid blue",
        width: "full"
      },
      ".tr": {
        display: "flex",
        // width: "fit-content",
        width: "full"

      },
      ".th, .td": { boxShadow: "inset 0 0 0 1px blue" },
      ".th": {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "gray.400",
        padding: "0.5rem",
        fontWeight: "bold",
        fontSize: "xs",
        textTransform: "uppercase",
        textAlign: "center",
        width: "full"

      },
      ".td > input": {
        m: "1",
        padding: "0.2rem",
        bg: "transparent",
        maxW: "100%",
      },
      ".date-wrapper": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        w: "100%",
        h: "100%",
      },
      ".resizer": {
        position: "absolute",
        opacity: 0,
        top: 0,
        right: 0,
        h: "100%",
        w: "5px",
        bg: "#27bbff",
        cursor: "col-resize",
        userSelect: "none",
        touchAction: "none",
        borderRadius: "6px",
      },
      ".resizer.isResizing": {
        bg: "#2eff31",
        opacity: 1,
      },
      "*:hover > .resizer": {
        opacity: 1,
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brandSecondary",
    components: ["Button"],
  })
);

export default theme;
