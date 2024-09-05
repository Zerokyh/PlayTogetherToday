import { Box, Button, Typography } from "@mui/material";
import GroupImg from "./GroupImg";
import { GroupImgAvatar } from "../styles/mui";
import { sizes } from "../styles/sizes";

type GroupDetailProps = {
  groupName?: string;
  groupCategori?: string;
  groupInfo?: string;
  groupImg?: string;
  groupImgName?: string;
  groupImgSrc?: string;
};

const GroupListItem = ({
  groupName,
  groupCategori,
  groupInfo,
  groupImg,
  groupImgName,
  groupImgSrc,
}: GroupDetailProps) => {
  return (
    <Box
      sx={{
        widht: "100%",
        height: "100%",
        display: "flex",
        padding: "20px 12px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <GroupImg
          alt={groupImgName}
          src={groupImgSrc}
          sx={{ ...GroupImgAvatar }}
        />
        <Box>
          <Typography
            sx={{ fontSize: sizes.fontSize.medium, fontWeight: "700" }}
          >
            {groupName}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: sizes.fontSize.xsmall }}>
            {groupInfo}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button color="primary">가입하기</Button>
      </Box>
    </Box>
  );
};

export default GroupListItem;
