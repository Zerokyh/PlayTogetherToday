import { Box, Typography } from "@mui/material";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import GroupMoneyPlusList from "./GroupMoneyPlusList";
import GroupMoneyMinusList from "./GroupMoneyMinusList";
import useThemeStore from "../store/store";

const GroupMoneyCheck = () => {
  const { isTheme } = useThemeStore();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        bgcolor:
          isTheme === "기본"
            ? colors.background.secondary
            : colors.sub_background.secondary,
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        alignItems: "center",
        padding: "12px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: sizes.fontSize.normal }}>
          회비 운영 내역
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "right",
        }}
      >
        <Typography sx={{ fontSize: sizes.fontSize.normal, fontWeight: "600" }}>
          ₩ 000,000,000원
        </Typography>
      </Box>

      <Box
        sx={{ width: "100%", display: "flex", gap: "12px", maxHeight: "240px" }}
      >
        <GroupMoneyPlusList profit={true} allMoney={60000}></GroupMoneyPlusList>
        <GroupMoneyMinusList
          profit={false}
          allMoney={60000}
        ></GroupMoneyMinusList>
      </Box>
    </Box>
  );
};

export default GroupMoneyCheck;
