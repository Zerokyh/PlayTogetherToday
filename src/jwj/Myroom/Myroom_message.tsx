import { Button, Box, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import ImgAvatar from "../../components/atom/ImgAvatar";

type MessageProps = {
  contents?: string;
  time?: string;
};

const Myroom_message = ({ contents, time }: MessageProps) => {
  return (
    <Button
      sx={{
        width: "100%",
        height: "auto",
        minHeight: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#E5E5E5",
        borderRadius: "12px",
        paddingX: "8px",
        textTransform: "none",
        color: "black",
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
          {contents}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        fontWeight="bold"
        sx={{ fontSize: sizes.fontSize.medium }}
      >
        {time}
      </Typography>
    </Button>
  );
};

export default Myroom_message;
