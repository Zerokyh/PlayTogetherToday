import { Box, Card, CardMedia, Typography } from "@mui/material";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import GetMember from "./GetMember";
import GroupBirthBox from "./GroupBirthBox";
import GroupEventBox from "./GroupEventBox";

type BorderProfileProps = {
  groupProfileImgSrc: string;
  groupName: string;
  groupCategori: string;
  groupCount: number;
  groupLeaderName: string;
};

const BorderProfile = ({
  groupProfileImgSrc,
  groupName,
  groupCategori,
  groupCount,
  groupLeaderName,
}: BorderProfileProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        bgcolor: colors.background.secondary,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "25%",
          display: "flex",
          alignItems: "center",
          padding: sizes.padding.small,
        }}
      >
        <Box
          sx={{
            width: sizes.avatar.chat,
            height: sizes.avatar.chat,
            borderRadius: sizes.borderRadius.normal,
          }}
        >
          <Card sx={{ width: "!00%", height: "100%" }}>
            <CardMedia
              sx={{ height: "100%" }}
              image={groupProfileImgSrc}
            ></CardMedia>
          </Card>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: sizes.padding.large,
            display: "flex",
            flexDirection: "column",
            gap: sizes.gap.normal,
            textAlign: "justify",
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>{groupName}</Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {groupCategori} / {groupLeaderName}외 {groupCount - 1}명
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "75%",
          padding: sizes.padding.medium,
          display: "flex",
          gap: sizes.gap.large,
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: sizes.gap.mLarge,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "70%",
              borderRadius: 4,
              bgcolor: colors.background.tertiary,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              paddingY: "10px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "83%",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: "600" }}
                  variant="inherit"
                >
                  이벤트 게시판
                </Typography>
              </Box>
              <GroupEventBox></GroupEventBox>
            </Box>
          </Box>

          <GroupBirthBox></GroupBirthBox>
        </Box>
        <Box sx={{ width: "50%", height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 4,
              bgcolor: colors.background.tertiary,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "10px",
            }}
          >
            <Box sx={{}}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600" }}
                variant="inherit"
              >
                멤버 리스트
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: sizes.gap.normal,
              }}
            >
              <GetMember
                memberName="허각"
                memberPosition="리더"
                profileImgSrc="profile_icon.png"
              />
              <GetMember
                memberName="신용재"
                memberPosition="드럼"
                profileImgSrc="profile_icon.png"
              />
              <GetMember
                memberName="임한별"
                memberPosition="운전"
                profileImgSrc="profile_icon.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BorderProfile;
