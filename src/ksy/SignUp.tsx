import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [idEmail, setIdEmail] = useState<string>("");
  const [isIdEmailValid, setIdEmailValid] = useState<boolean>(true);
  const [idEmailBlurred, setIdEmailBlurred] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [passwordBlurred, setPasswordBlurred] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true);
  const [passwordCheckBlurred, setPasswordCheckBlurred] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

  // 아이디 입력
  useEffect(() => {
    const idEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIdEmailValid(idEmail === "" || idEmailRegex.test(idEmail));
  }, [idEmail]);

  // 비밀번호 입력
  useEffect(() => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}~]{8,20}$/;
    setIsPasswordValid(password === "" || passwordRegex.test(password));
  }, [password]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 비밀번호 확인
  useEffect(() => {
    if (password === "" || passwordCheck === "") {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(password === passwordCheck);
    }
  }, [password, passwordCheck]);

  const togglePasswordCheckVisibility = () => {
    setShowPasswordCheck(!showPasswordCheck);
  };

  // 가입 버튼
  // Input 데이터 저장 후 로그인 페이지로 이동시키기


  // 취소 버튼
  const handleCancel = () => {
    // 상태 초기화 (앞으로 저장할 가입 정보 초기화)
    setIdEmail("");
    setPassword("");
    setIdEmailBlurred(false);
    setPasswordBlurred(false);
    alert("처음 화면으로 돌아갑니다. 내용은 저장되지 않습니다.");
    // window.location.reload(); -> 대신 로그인 화면으로 이동시키기
  };


  return (
    <div className="bg-[#FEF7FF] flex justify-center">
      <div className="bg-[#F3EAFB] flex-col rounded-3xl w-2/5 m-10 px-16 py-8">
        <h1 className="bg-[#EADDFF] max-w-full my-3 px-10 py-5 rounded-3xl text-center font-bold text-xl">
          소모임의 소중한 회원으로 모시겠습니다
        </h1>

        <div className="max-w-full p-5 mt-10">
        {/* 아이디 입력 */}
          <div className="bg-[#EADDFF] max-w-full px-5 py-3 rounded-3xl">
            <div className="flex">
              <h3 className="font-bold mb-1">아이디(이메일주소)*</h3>
              <p className={`text-xs m-1 ${!isIdEmailValid && idEmailBlurred ? 'text-red-500' : 'text-gray-500'}`}>
                {!isIdEmailValid && idEmailBlurred ? "올바른 이메일 형식이 아닙니다" : ""}
              </p>
            </div>
            <input
              type="email"
              value={idEmail}
              onChange={(e) => setIdEmail(e.target.value)}
              onBlur={() => setIdEmailBlurred(true)}
              onFocus={() => setIdEmailBlurred(false)}
              className="bg-[#EADDFF] min-w-full outline-none border-b border-black" />
          </div>
          
        {/* 비밀번호 입력 */}
          <div className="bg-[#EADDFF] max-w-full my-8 px-5 py-3 rounded-3xl">
            <div className="flex">
              <h3 className="font-bold mb-1">비밀번호*</h3>
              <p className={`text-xs m-1 ${!isPasswordValid && passwordBlurred ? 'text-red-500' : 'text-gray-500'}`}>
                {!isPasswordValid && passwordBlurred
                  ? "올바른 비밀번호가 아닙니다"
                  : "(영문 대소문자, 숫자, 특수기호 포함 8자리 이상)"}
              </p>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordBlurred(true)}
                onFocus={() => setPasswordBlurred(false)}
                className="bg-[#EADDFF] min-w-full outline-none border-b border-black" />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2">
                {showPassword ? <FaEye/> : <FaEyeSlash/>}
              </button>
            </div>
          </div>

        {/* 비밀번호 확인 */}
          <div className="bg-[#EADDFF] max-w-full my-8 px-5 py-3 rounded-3xl">
            <div className="flex">
              <h3 className="font-bold mb-1">비밀번호 확인*</h3>
              <p className={`text-gray-500 text-xs m-1 ${!isPasswordMatch && passwordCheckBlurred ? 'text-red-500' : 'text-gray-500'}`}>
                {!isPasswordMatch && passwordCheckBlurred
                  ? "비밀번호가 일치하지 않습니다"
                  : "비밀번호를 다시 한 번 입력하세요"}</p>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
                onBlur={() => setPasswordCheckBlurred(true)}
                onFocus={() => setPasswordCheckBlurred(false)}
                className="bg-[#EADDFF] min-w-full outline-none border-b border-black" />
            <button
                type="button"
                onClick={togglePasswordCheckVisibility}
                className="absolute right-2 top-2">
                {showPassword ? <FaEye/> : <FaEyeSlash/>}
            </button>
            </div>
          </div>

        {/* 백업 이메일 */}
          <div className="bg-[#EADDFF] max-w-full my-8 px-5 py-3 rounded-3xl">
            <div className="flex">
              <h3 className="font-bold mb-1">백업 이메일</h3>
              <p className={`text-gray-500 text-xs m-1`}>(선택)</p>
            </div>
            <input
              type="email"
              className="bg-[#EADDFF] min-w-full outline-none border-b border-black" />
          </div>

        {/* 그룹 만들기 */}
          <div className="bg-[#EADDFF] max-w-full my-8 px-5 py-3 rounded-3xl">
            <div className="flex">
              <h3 className="font-bold mb-1">그룹만들기</h3>
              <p className={`text-gray-500 text-xs m-1`}>(추후 만들기 가능)</p>
            </div>
            <input className="bg-[#EADDFF] min-w-full outline-none border-b border-black"/>
          </div>

        {/* 그룹가입 암호 */}
          <div className="bg-[#EADDFF] max-w-full my-8 px-5 py-3 rounded-3xl">
            <div className="flex">
              <h3 className="font-bold mb-1">그룹가입암호</h3>
              <p className={`text-gray-500 text-xs m-1`}>(추후 만들기 가능)</p>
            </div>
            <input className="bg-[#EADDFF] min-w-full outline-none border-b border-black"/>
          </div>

        {/* 가입 버튼 */}
          <div className="flex justify-center gap-7">
            <button
              className="bg-[#D7BEFF] px-5 py-3 rounded-full font-bold text-lg shadow">가입하기</button>
            <button
              onClick={handleCancel}
              className="bg-[#FEF7FF] px-5 py-3 rounded-full font-bold text-lg shadow">취소</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default SignUp;