import { Link, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box, color } from "@mui/system";

type CurrentAuthorize_ButtonProps = {
  authorize: boolean;
};

const CurrentAuthorize_Button = ({
  authorize,
}: CurrentAuthorize_ButtonProps) => {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Typography sx={{ color: authorize ? "blue" : "grey" }}>공개</Typography>
      <span>/</span>
      <Typography sx={{ color: authorize ? "grey" : "blue" }}>
        비공개
      </Typography>
    </Box>
  );
};
export default CurrentAuthorize_Button;
