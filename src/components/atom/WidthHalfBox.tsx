import { Box } from "@mui/material";

import { WidthHalfBoxProps } from "../../utils/type";
import { WidthHalfBoxInnerMui } from "../../styles/mui";

const WidthHalfBox = ({ children, sx }: WidthHalfBoxProps) => {
  return (
    <Box
      sx={{
        ...WidthHalfBoxInnerMui,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default WidthHalfBox;
