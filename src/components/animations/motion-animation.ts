export const fadeLeftInXAnimationVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -500,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeRightInXAnimationVariants = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeUpInYAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3 * index,
    },
  }),
};

export const fadeDownInYAnimationVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3 * index,
    },
  }),
};
