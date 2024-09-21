import { Box, Button, Modal, Typography } from "@mui/material";
import { FullPageBox } from "../../styles/mui";
import GroupMake_SubTitle from "./GroupMake_SubTitle";
import GroupMake_Title from "./GroupMake_Title";
import InputContents from "../SignUpPage/InputContents";
import { useNavigate } from "react-router-dom";
import { useGroupMakeForm } from "./GroupMakeFuction/UseGroupMakeForm";
import { isGroupPasswordValid } from "./GroupMakeFuction/JoinValidation";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { bgcolor } from "@mui/system";
import { useState } from "react";

const GroupMake = () => {
  const { isTheme } = useThemeStore();

  const { formState, setFormState, blurred, setBlurred } = useGroupMakeForm();

  const navigate = useNavigate();

  // Modal
  const [openGroupMakeModal, setOpenGroupMakeModal] = useState(false);
  const [openCancelModal, setOpenCancelModal] = useState(false);

  // Cancel Btn Modal Open logic
  const handleOpenCancelModal = () => setOpenCancelModal(true);
  const handleCloseCancelModal = () => setOpenCancelModal(false);
  // Cancel Btn Modal Open
  const handleCancel = () => {
    handleOpenCancelModal();
  };
  // Cancel Btn Navigate
  const handleCancelBtn = () => {
    setFormState({
      groupName: "",
      groupType: "",
      groupHost: "",
      groupPassword: "",
      groupSecretary: "",
      groupEventDate: "",
    });
    setBlurred({
      groupNameBlurred: false,
      groupTypeBlurred: false,
      groupHostBlurred: false,
      groupPasswordBlurred: false,
      groupSecretaryBlurred: false,
      groupEventDateBlurred: false,
    });
    navigate("/");
  };

  // GroupMake Btn Modal
  const handleOpenGroupMakeModal = () => setOpenGroupMakeModal(true);
  const handleCloseGroupMakeModal = () => setOpenGroupMakeModal(false);

  // GroupMake Btn Modal Null & Open
  const handleGroupMakeAlertOpen = () => {
    if (
      !formState.groupName ||
      !formState.groupType ||
      !formState.groupPassword
    ) {
      alert("입력하지 않은 정보가 있습니다. 다시 확인해주세요!");
      return false;
    } else {
      handleOpenGroupMakeModal();
    }
  };

  // GroupMake Btn Nagivate
  const handleGroupEnterBtn = () => {
    handleCloseGroupMakeModal();
    navigate("/GroupEnter");
  };

  // Group Type list
  const groupTypeList = [
    { title: "게임" },
    { title: "댄스" },
    { title: "도서" },
    { title: "문화" },
    { title: "반려동물" },
    { title: "봉사활동" },
    { title: "스포츠" },
    { title: "언어" },
    { title: "여행" },
    { title: "요리" },
    { title: "음악" },
    { title: "자기계발" },
  ];

  const defaultProps = {
    options: groupTypeList,
    getOptionLabel: (option: { title: string }) => option.title,
  };

  return (
    <FullPageBox>
      {/* Container */}
      <Box
        sx={{
          width: "540px",
          height: "700px",
          padding: "20px",
          bgcolor:
            isTheme == "기본"
              ? colors.background.secondary
              : colors.sub_background.secondary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: sizes.borderRadius.normal,
        }}
      >
        <GroupMake_Title />
        <GroupMake_SubTitle />

        <Box
          sx={{
            width: "500px",
            fontSize: sizes.fontSize.normal,
          }}
        >
          <InputContents
            label="모임 이름을 입력해주세요*"
            value={formState.groupName}
            setValue={(val) =>
              setFormState((prev) => ({ ...prev, groupName: val }))
            }
          />
          <Autocomplete
            {...defaultProps}
            id="disable-close-on-select"
            disableCloseOnSelect
            value={
              groupTypeList.find(
                (option) => option.title === formState.groupType
              ) || null
            }
            onChange={(event, newValue) => {
              setFormState((prev) => ({
                ...prev,
                groupType: newValue ? newValue.title : "",
              }));
            }}
            renderInput={(params) => (
              <Box
                sx={{
                  width: "100%",
                  height: "60px",
                  paddingX: sizes.padding.xlarge,
                  paddingY: sizes.padding.medium,
                  marginBottom: "11px",
                  bgcolor:
                    isTheme == "기본"
                      ? colors.background.tertiary
                      : colors.sub_background.tertiary,
                  color: colors.text.primary,
                  borderRadius: "15px",
                }}
              >
                <Box display={"flex"} height={"15px"}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      height: "10px",
                      fontSize: sizes.fontSize.medium,
                    }}
                  >
                    모임 타입 설정*
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      marginTop: sizes.margin.small,
                      marginLeft: sizes.margin.large,
                      color: colors.text.grey,
                      fontSize: sizes.fontSize.xsmall,
                    }}
                  >
                    (추후 변경 가능)
                  </Typography>
                </Box>
                <Box>
                  <TextField
                    {...params}
                    variant="standard"
                    size="small"
                    sx={{
                      width: "470px",
                      outline: "none",
                      borderColor: colors.border.primary,
                    }}
                  />
                </Box>
              </Box>
            )}
          />

          <InputContents
            label="모임 가입 암호*"
            value={formState.groupPassword}
            setValue={(val) =>
              setFormState((prev) => ({ ...prev, groupPassword: val }))
            }
            onBlur={() =>
              setBlurred((prev) => ({ ...prev, groupPasswordBlurred: true }))
            }
            onFocus={() =>
              setBlurred((prev) => ({ ...prev, groupPasswordBlurred: false }))
            }
            isValid={
              isGroupPasswordValid(formState.groupPassword) ||
              blurred.groupPasswordBlurred
            }
            validationMessage={
              !formState.groupPassword && blurred.groupPasswordBlurred
                ? "비밀번호를 입력해주세요"
                : "올바른 암호가 아닙니다"
            }
            optional
            optionalText={
              "(사용가능한 조합 : 영문 / 숫자 / 영문 또는 숫자 + 특수문자)"
            }
          />
          <InputContents
            label="모임 호스트"
            value={formState.groupHost}
            setValue={(val) =>
              setFormState((prev) => ({ ...prev, groupHost: val }))
            }
            optional
            optionalText={""}
          />
          <InputContents
            label="모임 총무"
            value={formState.groupSecretary}
            setValue={(val) =>
              setFormState((prev) => ({ ...prev, groupSecretary: val }))
            }
            optional
            optionalText={"(선택)"}
          />
          <InputContents
            label="모임 기념일 설정"
            value={formState.groupEventDate}
            setValue={(val) =>
              setFormState((prev) => ({ ...prev, groupEventDate: val }))
            }
            optional
            optionalText={"(미 설정 시 모임 시작일로 자동설정, 추후 변경가능)"}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: sizes.padding.xlarge,
              gap: 3,
            }}
          >
            <Button
              onClick={handleGroupMakeAlertOpen}
              sx={{
                width: "100px",
                height: 45,
                bgcolor:
                  isTheme == "기본"
                    ? colors.background.button
                    : colors.sub_background.button,
                color: colors.text.secondary,
                fontSize: sizes.fontSize.normal,
                borderRadius: sizes.borderRadius.normal,
              }}
            >
              모임 만들기
            </Button>
            <Button
              onClick={handleOpenCancelModal}
              sx={{
                width: "100px",
                height: 45,
                bgcolor:
                  isTheme == "기본"
                    ? colors.background.drawer
                    : colors.sub_background.drawer,
                color: colors.text.grey,
                fontSize: sizes.fontSize.normal,
                borderRadius: sizes.borderRadius.normal,
              }}
            >
              취소
            </Button>
          </Box>
        </Box>
      </Box>

      {/* GroupMake Modal */}
      <Modal
        open={openGroupMakeModal}
        onClose={handleCloseGroupMakeModal}
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
            모임 가입
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
            모임을 만드시겠습니까?
          </Typography>
          <Box mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              onClick={handleGroupEnterBtn}
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
              만들기
            </Button>
            <Button
              onClick={handleCloseGroupMakeModal}
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

      {/* Cancel Button Modal */}
      <Modal
        open={openCancelModal}
        onClose={handleCancelBtn}
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
              textAlign: "center",
              color: colors.text.primary,
            }}
          >
            처음 화면으로 돌아갑니다
            <br />
            (내용은 저장되지 않습니다)
          </Typography>
          <Box mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              onClick={handleCancelBtn}
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
    </FullPageBox>
  );
};

export default GroupMake;
