import { Box, List, Modal, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import AnnounceList from "./AnnounceList";
import { useState } from "react";
import { height } from "@mui/system";

const Announce = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "600px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    display: "flex",
    flexDirection: "column",
    gap: sizes.gap.normal,
  };

  const [open, setOpen] = useState(false);
  const [send, setSend] = useState(false);

  const handleSend = () => {
    setSend(true);
    alert("게시글 등록이 완료되었습니다.");
  };

  const handelOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "33.33%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 4,
          bgcolor: colors.background.secondary,
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
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: sizes.fontSize.large }} variant="inherit">
            공지사항
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "100%" }}>
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
              maxHeight: "260px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: sizes.gap.medium,
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={handelOpen}
                sx={{
                  color: "black",
                  borderRadius: "30px",
                  borderColor: "black",
                  borderStyle: "solid",
                  paddingX: "30px",
                }}
                variant="outlined"
              >
                새로작성
              </Button>
              {/* modal */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box sx={{ ...style }}>
                  <TextField
                    label="공지사항의 제목을 입력해주세요"
                    sx={{ width: "100%" }}
                  ></TextField>
                  <TextField
                    label="내용을 입력해주세요"
                    InputProps={{ style: { height: "100%" } }}
                    sx={{
                      width: "100%",
                      height: "70%",
                    }}
                  ></TextField>
                  <Button onClick={handleSend}>게시글 등록</Button>
                  <Button onClick={handleClose}>취소</Button>
                </Box>
              </Modal>

              <Button
                sx={{
                  color: "black",
                  borderRadius: "30px",
                  borderColor: "black",
                  borderStyle: "solid",
                  paddingX: "30px",
                }}
                variant="outlined"
              >
                삭제하기
              </Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                paddingx: sizes.padding.medium,
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: sizes.gap.mLarge,
                  padding: "0px",
                }}
              >
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="이번주 회비 미지급자 명단입니다.."
                  member="총무"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
                <AnnounceList
                  title="공지사항입니다."
                  member="주인장"
                ></AnnounceList>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Announce;
