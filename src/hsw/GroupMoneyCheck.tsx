import { Box, Typography } from "@mui/material";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import GroupMoneyList from "./GroupMoneyList";

const GroupMoneyCheck = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        bgcolor: colors.background.secondary,
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
      <div className="w-full flex gap-3 h-full">
        <GroupMoneyList profit={true} allMoney={60000}></GroupMoneyList>
        <GroupMoneyList profit={false} allMoney={60000}></GroupMoneyList>
      </div>
    </Box>
  );
};

export default GroupMoneyCheck;
