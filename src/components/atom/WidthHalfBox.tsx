import { Box } from "@mui/material";
import { WidthHalfBoxSize } from "../../styles/mui";
import { WidthHalfBoxProps } from "../../utils/type";

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
