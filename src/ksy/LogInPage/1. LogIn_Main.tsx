import MyProfileImg from "./ProfileIMG";
import LoginInput from "./Login_Input";
import LoginBtn from "./Login_Button";

const Login = () => {
  return (
    <div className="flex justify-center h-dvh">
      <div className="w-2/5 m-10 px-16 py-8">
        <MyProfileImg/> {/* 이미지 추가 */}
        <LoginInput/>   {/* 로그인 입력창 (계정이메일 및 비밀번호 입력) */}
        <LoginBtn/>     {/* 회원가입 및 아이디/비번 찾기 버튼 */}
      </div>
    </div>
  );
};

export default Login;