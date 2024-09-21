import { Box, Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import XIcon from "@mui/icons-material/X";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import ParticipateList from "./ParticipateList";
import useThemeStore from "../store/store";

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
            bgcolor:
              isTheme === "기본"
                ? colors.background.secondary
                : colors.sub_background.secondary,
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
            bgcolor:
              isTheme === "기본"
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
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
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <ParticipateList
              memberName="창모"
              memberPosition="총무"
              profileImgSrc="profile_icon.png"
              participate={true}
            />
            <ParticipateList
              memberName="DAY6"
              memberPosition="분위기메이커"
              profileImgSrc="day6.jpeg"
              participate={false}
            />
            <ParticipateList
              memberName="FT아일랜드"
              memberPosition="운전"
              profileImgSrc="ftisland.jpeg"
              participate={true}
            />
            <ParticipateList
              memberName="zico"
              memberPosition="래퍼"
              participate={true}
              profileImgSrc="zico.jpeg"
            ></ParticipateList>
            <ParticipateList
              memberName="newjeans"
              memberPosition="아이돌"
              participate={false}
              profileImgSrc="newjeans.jpeg"
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
