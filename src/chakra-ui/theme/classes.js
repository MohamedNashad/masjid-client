const COLORS = {
  0: "#F7F7FA",
  5: "#edf8ff",
  10: "#7cc0ff",
  40: "#f4fbff",
  controlColor: "#2264D1",
  focusColor: "#9DC2FF",
  successColor: "#38A169",
  successColorAccent: "#F0FFF4",
};

export const smoothClasses = {
  // transition: "all 150ms",
  _checked: {
    bg: COLORS[40],
    borderColor: COLORS[10],
    fontWeight: 600,
    color: "#3182ce",
  },
  _hover: {
    // transition: "all 350ms",
    bg: COLORS[0],
    _checked: {
      bg: COLORS[5],
    },
  },
};

export const radioClasses = {
  transition: "all 150ms",
  _checked: {
    label: {
      fontWeight: "bold",
      borderColor: COLORS[10],
    },
  },
  _hover: {
    transition: "all 350ms",
    bg: COLORS[0],
    _checked: {
      bg: COLORS[5],
    },
  },
};
