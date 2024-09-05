import { Box, Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import XIcon from "@mui/icons-material/X";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import ParticipateList from "./ParticipateList";

type BorderParticipateProps = {
  groupName?: string;
  participate?: Boolean;
  count?: number;
  allCount?: number;
};

const BorderParticipate = ({
  groupName,
  allCount = 0,
  count = 0,
}: BorderParticipateProps) => {
  const [value, setValue] = useState(0);

  const [memberCount, setMemberCount] = useState<number>(0);

  useEffect(() => {
    setMemberCount(allCount - count);
  }, [allCount, count]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        bgcolor: colors.background.secondary,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "12px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: sizes.padding.medium,
          fontWeight: "600",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>
          {groupName} 모임에 참석하실건가요?
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BottomNavigation
          sx={{
            width: "fit-content",
            bgcolor: colors.background.secondary,
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(value);
          }}
        >
          <BottomNavigationAction
            label="참여"
            sx={{
              color:
                value === 0
                  ? colors.background.drawer
                  : colors.background.drawer,
              "&.Mui-selected": {
                color: colors.border.primary,
              },
            }}
            icon={<DoneOutlineIcon />}
          />
          <BottomNavigationAction
            sx={{
              color:
                value === 1
                  ? colors.background.drawer
                  : colors.background.drawer,
              "&.Mui-selected": {
                color: colors.border.primary,
              },
            }}
            label="참여안함"
            icon={<XIcon />}
          />
        </BottomNavigation>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "180px",
            borderRadius: 4,
            bgcolor: colors.background.tertiary,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            padding: "12px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ParticipateList
              memberName="창모"
              memberPosition="총무"
              profileImgSrc="profile_icon.jpg"
              participate={true}
            ></ParticipateList>
            <ParticipateList
              memberName="DAY6"
              memberPosition="분위기메이커"
              profileImgSrc="profile_icon.jpg"
              participate={false}
            ></ParticipateList>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: sizes.gap.xLarge,
            }}
          >
            <Box
              sx={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="inherit">
                참석 : {count}명
              </Typography>
            </Box>
            <Box
              sx={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="inherit">
                불참 : {memberCount}명
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BorderParticipate;
