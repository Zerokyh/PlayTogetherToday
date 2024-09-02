import { Box, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import ImgAvatar from "../../components/atom/ImgAvatar";

type FriendListProps = {
  name?: string;
  anni?: string;
  group?: string;
};

const Myroom_freindsList = ({ name, anni, group }: FriendListProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#E5E5E5",
        borderRadius: "12px",
        paddingX: "8px",
        marginBottom: "4px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <ImgAvatar
          src="cat.jpg"
          alt="프로필"
          sx={{
            width: sizes.avatar.logo,
            height: sizes.avatar.logo,
            mx: "auto",
          }}
        />
        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{ fontSize: sizes.fontSize.medium }}
        >
          {name}
        </Typography>
        <Typography
          variant="caption"
          fontWeight="bold"
          sx={{ fontSize: sizes.fontSize.xsmall }}
        >
          {anni}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        fontWeight="bold"
        sx={{ fontSize: sizes.fontSize.medium }}
      >
        {group}
      </Typography>
    </Box>
  );
};

export default Myroom_freindsList;
