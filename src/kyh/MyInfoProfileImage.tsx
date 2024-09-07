import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { sizes } from "../styles/sizes";
import { colors } from "../styles/colors";
import ImgAvatar from "../components/atom/Avatar/ImgAvatar";

const MyInfoProfileImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        paddingBottom: 6,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <ImgAvatar
          src="cat.jpg"
          alt="프로필"
          sx={{
            width: sizes.avatar.info,
            height: sizes.avatar.info,
            mx: "auto",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 80,
            right: 20,
            color: "white",
            ":hover": {
              cursor: "pointer",
              color: colors.text.secondary,
            },
          }}
          onClick={() => {}}
        >
          <EditIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default MyInfoProfileImage;
