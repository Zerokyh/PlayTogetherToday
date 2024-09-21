import React, { useState } from "react";
import { Button, Box, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

// type GroupEnterInputProps = {
//   groupName: string;
//   setGroupName: (value: string) => void;
//   groupPassword: string;
//   setGroupPassword: (value: string) => void;
// };

// const GroupEnterButton = ({
//   groupName,
//   setGroupName,
//   groupPassword,
//   setGroupPassword,
// }: GroupEnterInputProps) => {

const GroupEnterButton = () => {
  const { isTheme } = useThemeStore();
  const navigate = useNavigate();

  // Modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openJoinModal, setOpenJoinModal] = useState(false);

  // Delete ID Modal Open logic
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);
  // DeleteID Open Yes Navigate
  const handleDeleteID = () => {
    handleCloseDeleteModal();
    navigate("/");
  };

  // Join Btn Modal
  const handleOpenJoinModal = () => setOpenJoinModal(true);
  const handleCloseJoinModal = () => setOpenJoinModal(false);
  // Join Btn Open
  const handleJoinRequest = () => {
    // if (!groupName || !groupPassword) {
    //   alert("입력하지 않은 정보가 있습니다. 다시 확인해주세요!");
    // } else {
    handleOpenJoinModal();
    // }
  };
  // Join Btn Navigate
  const handleJoinBtn = () => {
    navigate("/Myroom");
  };

  return (
    <Box width={sizes.width.block}>
      <Box display={"flex"} justifyContent={"end"} marginY={"4px"}>
        <Button
          onClick={() => navigate("/GroupMake")}
          sx={{
            width: "75px",
            height: "20px",
            fontWeight: "bold",
            fontSize: sizes.fontSize.small,
            color: colors.text.primary,
          }}
        >
          새로운 모임
        </Button>
        <Button
          onClick={handleOpenDeleteModal}
          sx={{
            width: "75px",
            height: "20px",
            fontWeight: "bold",
            fontSize: sizes.fontSize.small,
            color: colors.text.primary,
          }}
        >
          회원탈퇴
        </Button>
      </Box>

      {/* Join Request Button */}
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          onClick={handleJoinRequest}
          sx={{
            width: "450px",
            height: "44px",
            marginTop: 3,
            bgcolor:
              isTheme === "기본"
                ? colors.background.button
                : colors.sub_background.button,
            color: colors.text.secondary,
            fontSize: sizes.fontSize.large,
            borderRadius: sizes.borderRadius.medium,
          }}
        >
          모임 가입 요청
        </Button>
      </Box>

      {/* DeleteID Modal */}
      <Modal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        aria-labelledby="modal-title-delete"
        aria-describedby="modal-description-delete"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-title-delete"
            variant="h6"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              color: colors.text.primary,
            }}
          >
            회원 탈퇴
          </Typography>
          <Typography
            id="modal-description-delete"
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              color: colors.text.primary,
            }}
          >
            정말 탈퇴하시겠습니까?
          </Typography>
          <Box mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              onClick={handleDeleteID}
              variant="contained"
              sx={{
                mr: 1,
                bgcolor:
                  isTheme === "기본"
                    ? colors.background.button
                    : colors.sub_background.button,
                color: colors.text.secondary,
              }}
            >
              탈퇴하기
            </Button>
            <Button
              onClick={handleCloseDeleteModal}
              variant="outlined"
              sx={{
                bgcolor:
                  isTheme === "기본"
                    ? colors.background.subbutton
                    : colors.sub_background.subbutton,
                color: colors.text.primary,
                borderColor: colors.border.primary,
              }}
            >
              취소
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Join Request Modal */}
      <Modal
        open={openJoinModal}
        onClose={handleCloseJoinModal}
        aria-labelledby="modal-title-join"
        aria-describedby="modal-description-join"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-title-join"
            variant="h6"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              color: colors.text.primary,
            }}
          >
            모임 가입
          </Typography>
          <Typography
            id="modal-description-join"
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              color: colors.text.primary,
            }}
          >
            모임 가입이 요청되었습니다!
          </Typography>
          <Box mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              onClick={handleJoinBtn}
              variant="contained"
              sx={{
                mr: 1,
                bgcolor:
                  isTheme === "기본"
                    ? colors.background.button
                    : colors.sub_background.button,
                color: colors.text.secondary,
              }}
            >
              확인
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default GroupEnterButton;
