import * as React from "react";
import Myroom_profile from "./Myroom_profile";
import Myroom_meeting_button from "./Myroom_meeting_button";
import Myroom_freindsList from "./Myroom_freindsList";
import Myroom_message from "./Myroom_message";
import { sizes } from "../../styles/sizes";
import { useNavigate } from "react-router-dom";

const Myroom = () => {
  const navigate = useNavigate();
  //데이터베이스 만족하는 string 타입 개인정보  return 받아서 함수로 전달하기.
  const news = () => {
    const phone = "1234-516";
    return phone;
  };

  //화면크기 조절을 위한
  const drawerWidth = sizes.drawerWidth;
  const style = {
    "--drawer-width": drawerWidth,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className="w-full h-screen grid grid-cols-4 grid-rows-8 gap-4 p-5 "
    >
      {/* <div className="w-screen h-screen grid grid-cols-4 grid-rows-8 gap-4 p-5"> */}
      <div className="w-full flex justify-center items-center col-span-2 row-span-3 gap-2 bg-violet-100 rounded-md ">
        <div className="w-3/5 h-full flex flex-col items-start justify-center pl-3 py-3 gap-2">
          <div className="h-1/5 flex flex-col items-start justify-center ">
            <div className="text-sm">닉네임</div>
            <div className="text-[10px]">그룹 총(N) 활동중입니다.</div>
          </div>
          <div className="w-full h-4/5 flex flex-col items-start justify-center gap-1">
            <Myroom_profile info_name="연락처" info={news()} />
            <Myroom_profile info_name="이메일" info="asdfasd213@naver.com" />
            <Myroom_profile info_name="주소" info="인천 부평구 " />
            <Myroom_profile info_name="그룹 직책" />
            <Myroom_profile info_name="개인 기념일" />
            <Myroom_profile info_name="그룹 기념일" />
          </div>
        </div>
        <div className="w-2/5 h-full flex items-center justify-center pr-3">
          <div className="w-full h-32 flex items-center justify-center rounded-md bg-violet-200 ">
            <img
              className="w-full h-full object-contain"
              src="/watcha.png"
              alt="이미지"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start flex-col  col-span-2 row-span-5 col-start-1 row-start-4  bg-violet-100 rounded-md px-3 gap-2">
        <div className="w-24 h-8 flex justify-center items-center text-sm font-bold bg-violet-200  rounded-xl ">
          나의모임
        </div>
        <div className="w-full h-4/5 flex justify-center items-center flex-col gap-1">
          <Myroom_meeting_button
            group="그룹1"
            type="그룹 타입"
            count="그룹 멤버수"
            position="직책"
            comming="다가오는 모임 날짜"
            group_anni="그룹 기념일"
            onClick={() => navigate("/BorderDetail")}
          />

          <Myroom_meeting_button
            group="그룹2"
            type="그룹 타입"
            count="그룹 멤버수"
            position="직책"
            comming="다가오는 모임 날짜"
            group_anni="그룹 기념일"
          />
        </div>
      </div>

      <div className="flex justify-center items-start flex-col col-span-2 row-span-4 col-start-3 row-start-1 bg-violet-100 rounded-md px-3 gap-2 pt-2">
        <div className="w-24 h-8 flex justify-center items-center text-sm font-bold bg-violet-200  rounded-xl ">
          친구 리스트
        </div>

        <div className="w-full h-4/5 flex justify-center items-center flex-col gap-1">
          <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
          <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
          <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
          <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
          <Myroom_freindsList name="닉네임" anni="기념일" group="그룹명" />
        </div>
      </div>

      <div className="flex justify-center items-start flex-col col-span-2 row-span-4 col-start-3 row-start-5 bg-violet-100 rounded-md px-3 gap-2 pt-2">
        <button className="w-24 h-8 flex justify-center items-center text-sm font-bold bg-violet-200  rounded-xl ">
          쪽지함
        </button>

        <div className="w-full h-4/5 flex justify-center items-center flex-col gap-1">
          <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
          <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
          <Myroom_message contents="쪽지 내용" time="쪽지 보낸시간" />
        </div>
      </div>
    </div>
  );
};

export default Myroom;
