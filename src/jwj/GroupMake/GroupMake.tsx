import { useEffect, useState } from "react";
import GroupMake_Button from "./GroupMake_Button";
import GroupMake_Setting from "./GroupMake_Setting";
import GroupMake_Input from "./GroupMake_Input";
import GroupMake_Title from "./GroupMake_Title";
import { sizes } from "../../styles/sizes";
import { useNavigate } from "react-router-dom";
import { FullPageBox } from "../../styles/mui";

const GroupMake = () => {
  //화면크기 조절을 위한
  const drawerWidth = sizes.drawerWidth;
  const style = {
    "--drawer-width": drawerWidth,
  } as React.CSSProperties;

  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [hasBlurred, setHasBlurred] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}~]{8,20}$/;
    setIsPasswordValid(passwordRegex.test(password));
  }, [password]);

  const handleBlur = () => {
    setHasBlurred(true);
  };

  return (
    <div
      style={style}
      className="bg-[#FEF7FF] w-[calc(100vw-var(--drawer-width))] h-screen flex justify-center items-center"
    >
      <div className="bg-[#F3EAFB] w-96 flex flex-col justify-center items-center rounded-3xl gap-1 p-2">
        <GroupMake_Title text="새로운 인연이 시작되고 있어요" />
        <GroupMake_Title
          text="모임에 초대받았어요"
          onClick={() => {
            navigate("/GroupEnter");
          }}
          style="hover:cursor-pointer"
        />

        <div className="w-96 flex flex-col justify-center gap-1 p-2">
          <div className="bg-[#EADDFF] max-w-full flex flex-col justify-center p-2 rounded-2xl">
            <GroupMake_Setting text="모임 이름을 설정해주세요*" />
            <GroupMake_Input validation={true} />
          </div>

          <div className="bg-[#EADDFF] max-w-full flex flex-col justify-center p-2  rounded-2xl">
            <GroupMake_Setting
              text="모임 타입을 설정해주세요*"
              feature="(추후 변경 가능)"
            />
            <GroupMake_Input validation={true} />
          </div>

          <div className="bg-[#EADDFF] max-w-full flex flex-col justify-center p-2  rounded-2xl">
            <GroupMake_Setting text="모임 호스트" />
            <GroupMake_Input />
          </div>

          <div className="bg-[#EADDFF] max-w-full flex flex-col justify-center p-2   rounded-2xl">
            <GroupMake_Setting
              text="모임 가입 암호 설정*"
              feature=" (영문 대소문자, 특수기호, 포함 8자리 이상)"
            />
            <div
              className={`text-[10px] ${
                isPasswordValid && hasBlurred
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {isPasswordValid && hasBlurred
                ? "올바른 비밀번호"
                : "올바른 비밀번호가 아닙니다"}
            </div>
            <input
              type="password"
              value={password}
              onBlur={handleBlur}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#EADDFF] min-w-full outline-none border-b border-black text-[10px]"
            />
          </div>

          <div className="bg-[#EADDFF] max-w-full flex flex-col justify-center p-2  rounded-2xl">
            <GroupMake_Setting text="모임 총무" feature="(선택)" />
            <GroupMake_Input />
          </div>

          <div className="bg-[#EADDFF] max-w-full flex flex-col justify-center p-2   rounded-2xl">
            <GroupMake_Setting
              text="모임 기념일 설정"
              feature="(미 설정시 모임시작일로 자동설정, 추후 변경가능)"
            />
            <GroupMake_Input />
          </div>

          <div className="flex justify-center pt-2 gap-4">
            <GroupMake_Button text="모임만들기" />
            <GroupMake_Button text="취소" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupMake;
