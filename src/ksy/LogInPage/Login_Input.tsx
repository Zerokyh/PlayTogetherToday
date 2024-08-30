import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginInput = () => {
    const [idEmail, setIdEmail] = useState<string>("");
    const [isIdEmailValid, setIdEmailValid] = useState<boolean>(true);
    const [idEmailBlurred, setIdEmailBlurred] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // 아이디 입력
    useEffect(() => {
        const idEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIdEmailValid(idEmail === "" || idEmailRegex.test(idEmail));
    }, [idEmail]);

    // 비밀번호 입력
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
        
    return (
        <div className="max-w-full p-5 mt-10">
          {/* 아이디 입력 */}
          <div className="bg-[#FEF1FA] max-w-full px-5 py-3 rounded-3xl">
            <div className="flex">
              <h3 className="font-bold mb-1">로그인 계정</h3>
              <p
                className={`text-xs m-1 ${!isIdEmailValid && idEmailBlurred ? "text-red-500" : "text-gray-500"}`}
              >
                {!isIdEmailValid && idEmailBlurred ? "올바른 이메일 형식이 아닙니다" : ""}
              </p>
            </div>
            <input
              type="email"
              value={idEmail}
              onChange={(e) => setIdEmail(e.target.value)}
              onBlur={() => setIdEmailBlurred(true)}
              onFocus={() => setIdEmailBlurred(false)}
              className="bg-[#FEF1FA] min-w-full outline-none border-b border-black"
            />
          </div>

          {/* 비밀번호 입력 */}
          <div className="bg-[#FEF1FA] max-w-full my-8 px-5 py-3 rounded-3xl">
            <div className="flex">
              <h3 className="font-bold mb-1">로그인 비밀번호</h3>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#FEF1FA] min-w-full outline-none border-b border-black"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
        </div>
    )
}

export default LoginInput;