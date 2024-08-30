import InputContents from "./InputFunction/InputContents";
import { useSignUpForm } from "./InputFunction/UseForm";


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
    alert("처음 화면으로 돌아갑니다. 내용은 저장되지 않습니다.");
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#F3EAFB] flex-col rounded-3xl w-2/5 m-10 px-14 py-8">
        <h1 className="bg-[#EADDFF] max-w-full mx-5 my-3 px-10 py-5 rounded-3xl text-center font-bold text-xl">
          소모임의 소중한 회원으로 모시겠습니다
        </h1>
        <div className="max-w-full p-5 mt-5">

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
            validationMessage="올바른 비밀번호가 아닙니다"
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
          
          {/* 가입 버튼 */}
          <div className="flex justify-center gap-7">
            <button className="bg-[#D7BEFF] px-5 py-3 rounded-full font-bold text-lg shadow">가입하기</button>
            <button onClick={handleCancel} className="bg-[#FEF7FF] px-5 py-3 rounded-full font-bold text-lg shadow">취소</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;
