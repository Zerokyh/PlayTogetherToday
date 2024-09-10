import { Button, Box, Typography, Modal } from "@mui/material";
import { sizes } from "../../styles/sizes";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";
import ImgAvatar from "../../components/atom/Avatar/ImgAvatar";
import BasicModal from "../../components/organism/Modal/BasicModal";
import React from "react";
import MessageModal_Authorize from "./MessageModal";
import MessageModal from "./MessageModal";

type MessageProps = {
  contents: string;
  time?: string;
  type: number;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Myroom_message = ({ contents, time, type }: MessageProps) => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          width: "100%",
          height: "auto",
          minHeight: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.tertiary
              : colors.sub_background.tertiary,
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
          <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
            {contents}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.small }}>
          {time}
        </Typography>
      </Button>
      <Modal open={open} aria-labelledby="modal-modal-title">
        <Box sx={style}>
          <MessageModal
            content={contents}
            handleClose={handleClose}
            type={type}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Myroom_message;
