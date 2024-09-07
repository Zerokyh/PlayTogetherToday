/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import GroupMake_Setting from "./GroupMake_Setting";
import GroupMake_Input from "./GroupMake_Input";
import GroupMake_Title from "./GroupMake_Title";
import { sizes } from "../../styles/sizes";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { FullPageBox } from "../../styles/mui";
import GroupMake_SubTitle from "./GroupMake_Title copy";
import { useSignUpForm } from "../SignUpPage/InputFunction/UseForm";

const GroupMake = () => {
  // 화면 크기 조절을 위한
  const drawerWidth = sizes.drawerWidth;

  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [hasBlurred, setHasBlurred] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const passwordRegex =
      /^(?:[a-zA-Z]+|\d+|[a-zA-Z\d]+[!@#$%^&*()_\-+=<>?{}~][a-zA-Z\d]*)$/;

    setIsPasswordValid(passwordRegex.test(password));
  }, [password]);

  const handleBlur = () => {
    setHasBlurred(true);
  };

  const {
    formState,
    setFormState,
    validity,
    blurred,
    setBlurred,
    showPassword,
    setShowPassword,
    showPasswordCheck,
    setShowPasswordCheck,
  } = useSignUpForm();

  const handleCancel_CreateAccount = () => {
    setFormState({
      idEmail: "",
      password: "",
      passwordCheck: "",
      backupEmail: "",
      groupName: "",
      groupPassword: "",
    });
    setBlurred({
      idEmailBlurred: false,
      passwordBlurred: false,
      passwordCheckBlurred: false,
    });

    setTimeout(() => {
      alert("처음 화면으로 돌아갑니다. 내용은 저장되지 않습니다.");
      navigate("/DashBoard");
      // navigate("/LogIn");
    }, 0);
  };

  const handelJoin_CreateAccount = () => {
    // 모달? 등등 데이터 저장 코드 입력하기
    setTimeout(() => {
      navigate("/GroupEnter");
    });
  };

  return (
    <FullPageBox>
      {/* Container */}
      <Box
        sx={{
          width: "100%",
          height: "95.8vh",
          paddingX: "100px",
          paddingY: 0,
          bgcolor: "#EEEEEE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        {/* Title Box */}
        <GroupMake_Title />
        <GroupMake_SubTitle />

        {/* Input Group */}
        <Box
          sx={{
            width: "60%",
            padding: 0,
          }}
        >
          {/* 모임 이름 설정 */}
          <Box sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting text="모임 이름을 설정해주세요*" />
            <GroupMake_Input validation={true} />
          </Box>

          {/* 모임 타입 설정 */}
          <Box sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting
              text="모임 타입을 설정해주세요*"
              feature="(추후 변경 가능)"
            />
            <GroupMake_Input validation={true} />
          </Box>

          {/* 모임 호스트 설정 */}
          <Box sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting text="모임 호스트" />
            <GroupMake_Input />
          </Box>

          {/* 모임 가입 암호 설정 */}
          <Box
            sx={{
              bgcolor: "#E5E5E5",
              p: 2,
              borderRadius: 6,
              marginY: 1.5,
            }}
          >
            <GroupMake_Setting
              text="모임 가입 암호 설정*"
              feature={
                <>
                  (사용가능한 조합 : 영어 / 숫자 / 영어 또는 숫자 + 특수문자)
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "12px",
                      marginLeft: 1,
                      color: isPasswordValid && hasBlurred ? "green" : "red",
                    }}
                  >
                    {isPasswordValid && hasBlurred
                      ? "입력완료"
                      : "올바른 암호가 아닙니다"}
                  </Typography>
                </>
              }
            />
            <TextField
              type="password"
              value={password}
              onBlur={handleBlur}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              variant="standard"
              fullWidth
              sx={{
                backgroundColor: "#E5E5E5",
                outline: "none",
                fontSize: "10px",
              }}
            />
          </Box>

          {/* 모임 총무 설정 */}
          <Box sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting text="모임 총무" feature="(선택)" />
            <GroupMake_Input />
          </Box>

          {/* 모임 기념일 설정 */}
          <Box sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting
              text="모임 기념일 설정"
              feature="(미 설정시 모임시작일로 자동설정, 추후 변경가능)"
            />
            <GroupMake_Input />
          </Box>
        </Box>

        {/* 버튼 그룹 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "15px",
            gap: 3,
          }}
        >
          {/* 가입버튼 / 취소버튼 */}
          <Button
            onClick={handelJoin_CreateAccount}
            sx={{
              width: 100,
              height: 45,
              bgcolor: "#006DFF",
              fontSize: 18,
              color: "#EEEEEE",
              borderRadius: 10,
            }}
          >
            모임만들기
          </Button>
          <Button
            onClick={handleCancel_CreateAccount}
            sx={{
              width: 100,
              height: 45,
              bgcolor: "white",
              fontSize: 18,
              color: "#23374D",
              borderRadius: 10,
            }}
          >
            취소
          </Button>
        </Box>
      </Box>
    </FullPageBox>
  );
};

export default GroupMake;
