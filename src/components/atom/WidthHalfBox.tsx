import { Box } from "@mui/material";
import { WidthHalfBoxSize } from "../../styles/mui";
import { ReactNode } from "react";

type WidthHalfBoxProps = {
  children?: ReactNode;
};

const WidthHalfBox = ({ children }: WidthHalfBoxProps) => {
  return (
    <Box
      sx={{
        ...WidthHalfBoxSize,
      }}
    >
      {children}
    </Box>
  );
};

export default WidthHalfBox;
