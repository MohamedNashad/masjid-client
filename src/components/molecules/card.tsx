import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  mb?: number;
  boxShadow?: string;
}

const Card: React.FC<Props> = ({
  children,
  mb,
  boxShadow = "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
}) => (
  <Box
    bg="white"
    boxShadow={boxShadow}
    p="4"
    mb={mb}
    borderRadius="xl"
    pos="relative"
  >
    {children}
  </Box>
);

export default Card;
