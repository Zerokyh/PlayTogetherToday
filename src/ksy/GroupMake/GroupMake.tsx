import { Box, Button, Typography } from "@mui/material";
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

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const GroupMake = () => {
  const { isTheme } = useThemeStore();

  const {
    formState,
    setFormState,
    blurred,
    setBlurred,
  } = useGroupMakeForm();

  const navigate = useNavigate();

  const handleCancel = () => {
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

    setTimeout(() => {
      alert("처음 화면으로 돌아갑니다. 내용은 저장되지 않습니다.");
      navigate("/");
    }, 0);
  };

  const handleGroupEnter = () => {
    setTimeout(() => {
      // alert("정말 모임을 만드시겠습니까?");/
      navigate("/GroupEnter");
    }, 0);
  };

  // Group Type list
  const top100films = [
    { title: '게임' },
    { title: '댄스' },
    { title: '도서' },
    { title: '문화' },
    { title: '반려동물' },
    { title: '봉사활동' },
    { title: '스포츠' },
    { title: '언어'},
    { title: '여행'},
    { title: '요리' },
    { title: '음악' },
    { title: '자기계발' },
];

  const defaultProps = {
  options: top100films,
  getOptionLabel: (option: { title: string }) => option.title,
};

  return (
    <FullPageBox>

      {/* Container */}
      <Box
        sx={{
          width: sizes.width.half,
          height: sizes.height.full,
          padding: "8%",
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
            fontSize: sizes.fontSize.normal
          }}
        >
          <InputContents
            label="모임 이름을 입력해주세요*"
            value={formState.groupName}
            setValue={(val) => setFormState((prev) => ({ ...prev, groupName: val }))}
          />
          <InputContents
            label="모임 타입 설정*"
            value={formState.groupType}
            setValue={(val) => setFormState((prev) => ({ ...prev, groupType: val }))}
            optional
            optionalText={"(추후 변경 가능)"}
          />
          <Autocomplete
            {...defaultProps}
            id="disable-close-on-select"
            disableCloseOnSelect
            renderInput={(params) => (
              <Box
              sx={{
                    width: "100%",
                    height: "60px",
                    paddingX: sizes.padding.xlarge,
                    paddingY: sizes.padding.medium,
                    marginBottom: 3,
                    bgcolor:
                      isTheme == "기본"
                      ? colors.background.tertiary
                      : colors.sub_background.tertiary,
                    color: colors.text.primary,
                    borderRadius: "15px"
                  }}>
                <Typography
                  sx={{
                    fontWeight:"bold",
                    height: "10px",
                    fontSize: sizes.fontSize.medium,
                  }}>모임 타입 설정*
                </Typography>
                <TextField {...params} variant="standard"
                  sx={{
                    width: "470px",
                    padding: "0",
                    margin: "0",
                    outline: "none",
                    borderColor: colors.border.primary
                    }}
                />
              </Box>
              )}
            />

          <InputContents
            label="모임 가입 암호*"
            value={formState.groupPassword}
            setValue={(val) => setFormState((prev) => ({ ...prev, groupPassword: val }))}
            onBlur={() => setBlurred((prev) => ({ ...prev, groupPasswordBlurred: true }))}
            onFocus={() => setBlurred((prev) => ({ ...prev, groupPasswordBlurred: false }))}
            isValid={isGroupPasswordValid(formState.groupPassword) || blurred.groupPasswordBlurred}
            validationMessage={
              !formState.groupPassword && blurred.groupPasswordBlurred
                ? "비밀번호를 입력해주세요"
                : "올바른 암호가 아닙니다"
            }
            optional
            optionalText={"(사용가능한 조합 : 영문 / 숫자 / 영문 또는 숫자 + 특수문자)"}
          />
          <InputContents
            label="모임 호스트"
            value={formState.groupHost}
            setValue={(val) => setFormState((prev) => ({ ...prev, groupHost: val }))}
            optional
            optionalText={""}
          />
          <InputContents
            label="모임 총무"
            value={formState.groupSecretary}
            setValue={(val) => setFormState((prev) => ({ ...prev, groupSecretary: val }))}
            optional
            optionalText={"(선택)"}
          />
          <InputContents
            label="모임 기념일 설정"
            value={formState.groupEventDate}
            setValue={(val) => setFormState((prev) => ({ ...prev, groupEventDate: val }))}
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
              onClick={handleGroupEnter}
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
              }}>
              모임 만들기
            </Button>
            <Button
              onClick={handleCancel}
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
              }}>
              취소
            </Button>
          </Box>

        </Box>
      </Box>
    </FullPageBox>
  );
};

export default GroupMake;
