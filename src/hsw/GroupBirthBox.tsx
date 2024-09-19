import { Box, Typography } from "@mui/material";
import GetGroupBirth from "./GetGroupBirth";
import { colors } from "../styles/colors";
import useThemeStore from "../store/store";

const GroupBirthBox = () => {
  const { isTheme } = useThemeStore();
  return (
    <Box
      sx={{
        width: "100%",
        height: "30%",
        borderRadius: 4,
        bgcolor:
          isTheme === "기본"
            ? colors.background.tertiary
            : colors.sub_background.tertiary,
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        overflowY: "scroll",
      }}
    >
      <Typography
        sx={{ fontSize: "16px", fontWeight: "600", textAlign: "center" }}
      >
        이번달 주인공
      </Typography>
      <GetGroupBirth birthName="광복절" birthday="8/15"></GetGroupBirth>
      {/* <GetGroupBirth birthName="광복절" birthday="8/15"></GetGroupBirth>
      <GetGroupBirth birthName="광복절" birthday="8/15"></GetGroupBirth>
      <GetGroupBirth birthName="광복절" birthday="8/15"></GetGroupBirth> */}
    </Box>
  );
};
export default GroupBirthBox;
