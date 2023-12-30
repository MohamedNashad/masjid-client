import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

type Props = {
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
  hasIcon?: boolean;
  hasTitle?: boolean;
  title?: string;
  children: React.ReactNode;
  mb?: number;
  variant?: "solid" | "subtle" | "left-accent" | "top-accent" | undefined;
};

const CustomMessage = ({
  status,
  hasIcon = false,
  hasTitle = false,
  title,
  children,
  mb = 8,
  variant = "subtle",
}: Props) => {
  return (
    <Alert status={status} mb={mb} variant={variant} borderRadius={"md"}>
      {hasIcon && <AlertIcon />}
      {hasTitle && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default CustomMessage;
