import { Box, Typography } from "@mui/material";
import GetGroupBirth from "./GetGroupBirth";
import { colors } from "../styles/colors";

const GroupBirthBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "30%",
        borderRadius: 4,
        bgcolor: colors.background.tertiary,
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        padding: "10px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
        이번달 주인공
      </Typography>
      <GetGroupBirth birthName="광복절" birthday="8/15"></GetGroupBirth>
    </Box>
  );
};
export default GroupBirthBox;
