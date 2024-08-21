import { Box } from "@mui/material";

import { WidthHalfBoxProps } from "../../utils/type";
import { WidthHalfBoxMui } from "../../styles/mui";

const WidthHalfBox = ({ children }: WidthHalfBoxProps) => {
  return (
    <Box
      sx={{
        ...WidthHalfBoxMui,
      }}
    >
      {children}
    </Box>
  );
};

export default WidthHalfBox;
