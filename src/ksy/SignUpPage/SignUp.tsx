import { Box, Button, Typography } from "@mui/material";
import { FullPageBox } from "../../styles/mui";
import InputContents from "./InputContents";
import { useSignUpForm } from "./InputFunction/UseForm";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
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

  const navigate = useNavigate();

  const handleCancel = () => {
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
      navigate("/LogIn");
    }, 0);
  };

  const handelJoin = () => {
    // 모달? 등등 데이터 저장 코드 입력하기
    setTimeout(() => {
      alert("정말 가입 하시겠습니까?");
      navigate("/LogIn");
    })
  }

  return (
    // 기본바탕 화면설정
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
        }}>
        
        {/* Title Box */}
        <Typography
          sx={{
            width: "60%",
            padding: "20px",
            marginBottom: "20px",
            bgcolor: "#E5E5E5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#23374D",
            borderRadius: 6
          }}>
            소모임의 소중한 회원으로 모시겠습니다
        </Typography>

        {/* Input Group */}
          <Box
          sx={{
            width: "60%",
            padding: 0
            }}>

            {/* 아이디 입력 */}
            <InputContents
              label="아이디(이메일주소)*"
              value={formState.idEmail}
              setValue={(val) => setFormState((prev) => ({ ...prev, idEmail: val }))}
              isValid={validity.isIdEmailValid || !blurred.idEmailBlurred}
              validationMessage="올바른 이메일 형식이 아닙니다"
              onBlur={() => setBlurred((prev) => ({ ...prev, idEmailBlurred: true }))}
              onFocus={() => setBlurred((prev) => ({ ...prev, idEmailBlurred: false }))}
            />
            {/* 비밀번호 입력 */}
            <InputContents
              label="비밀번호*"
              value={formState.password}
              setValue={(val) => setFormState((prev) => ({ ...prev, password: val }))}
              type="password"
              isValid={validity.isPasswordValid || !blurred.passwordBlurred}
              validationMessage={`올바른 비밀번호가 아닙니다 (영문, 숫자, 특수문자 포함)`}
              showPasswordToggle
              showPassword={showPassword}
              togglePasswordVisibility={() => setShowPassword(!showPassword)}
              onBlur={() => setBlurred((prev) => ({ ...prev, passwordBlurred: true }))}
              onFocus={() => setBlurred((prev) => ({ ...prev, passwordBlurred: false }))}
            />
            {/* 비밀번호 확인 */}
            <InputContents
              label="비밀번호 확인*"
              value={formState.passwordCheck}
              setValue={(val) => setFormState((prev) => ({ ...prev, passwordCheck: val }))}
              type="password"
              isValid={validity.isPasswordMatch || !blurred.passwordCheckBlurred}
              validationMessage="비밀번호가 일치하지 않습니다"
              showPasswordToggle
              showPassword={showPasswordCheck}
              togglePasswordVisibility={() => setShowPasswordCheck(!showPasswordCheck)}
              onBlur={() => setBlurred((prev) => ({ ...prev, passwordCheckBlurred: true }))}
              onFocus={() => setBlurred((prev) => ({ ...prev, passwordCheckBlurred: false }))}
            />
            {/* 백업 이메일 */}
            <InputContents
              label="백업 이메일"
              value={formState.backupEmail}
              setValue={(val) => setFormState((prev) => ({ ...prev, backupEmail: val }))}
              optional
            />
            {/* 그룹 만들기 */}
            <InputContents
              label="그룹 만들기"
              value={formState.groupName}
              setValue={(val) => setFormState((prev) => ({ ...prev, groupName: val }))}
              optional
            />
            {/* 그룹 가입 암호 */}
            <InputContents
              label="그룹 가입 암호"
              value={formState.groupPassword}
              setValue={(val) => setFormState((prev) => ({ ...prev, groupPassword: val }))}
              optional
            />

            {/* Button Group */}          
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: "15px",
                gap: 3
            }}>
            
            {/* 가입버튼 / 취소버튼 */}
            <Button
              onClick={handelJoin}
              sx={{
                width: 100,
                height: 45,
                bgcolor: "#006DFF",
                fontSize: 18,
                color: "#EEEEEE",
                borderRadius: 10,
              }}>
              가입하기
            </Button>
            <Button
              onClick={handleCancel}
              sx={{
                width: 100,
                height: 45,
                bgcolor: "white",
                fontSize: 18,
                color: "#23374D",
                borderRadius: 10
              }}>
              취소
            </Button>
          </Box>
            
        </Box>
      </Box>
    </FullPageBox>
  );
};

export default SignUp;
