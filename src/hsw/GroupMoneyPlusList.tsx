import { Box, Typography } from "@mui/material";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import GroupMoneyPlusMinus from "./GroupMoneyPlusMinus";

type GroupMoneyPlusListProps = {
  allMoney?: number;
  profit?: boolean;
};

const GroupMoneyPlusList = ({ allMoney, profit }: GroupMoneyPlusListProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        bgcolor: colors.background.tertiary,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        padding: "12px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          fontWeight: "600",
          fontSize: sizes.fontSize.small,
          justifyContent: "flex-end",
        }}
      >
        <Typography>
          {profit ? "총 수익 :" : "총 지출 :"} {allMoney}원
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={10000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={30000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
        <GroupMoneyPlusMinus
          profit={profit}
          countMoney={20000}
        ></GroupMoneyPlusMinus>
      </Box>
    </Box>
  );
};

export default GroupMoneyPlusList;
