import { sizes } from "../../styles/sizes";
import Authorize_button from "./Authorize_button";
import Authorize_profile from "./Authorize_profile";

const Myroom_authority = () => {
  //사이드바와 화면에 맞게 크기 조절을 위한
  const drawerWidth = sizes.drawerWidth;
  const style = {
    "--drawer-width": drawerWidth,
  } as React.CSSProperties;
  return (
    <div
      style={style}
      className="w-[calc(100vw-var(--drawer-width))] h-screen grid grid-cols-4 grid-rows-8 gap-4 p-5"
    >
      <div className="flex justify-center items-center col-span-2 row-span-3 gap-2 bg-violet-100 rounded-md ">
        <div className="w-3/5 h-full flex flex-col items-start justify-center px-3 py-3 gap-2">
          <div className="w- full h-1/5 flex flex-col items-start justify-center ">
            <div className="text-sm">닉네임</div>
            <div className="text-[10px]">그룹 총(N) 활동중입니다.</div>
          </div>
          <div className="w-full h-4/5 flex flex-col items-start justify-center gap-1">
            <Authorize_profile info_name="연 락 처" />
            <Authorize_profile info_name="이 메 일" />
            <Authorize_profile info_name="주 소" />
            <Authorize_profile info_name="그룹 직책" />
            <Authorize_profile info_name="개인 기념일" />
            <Authorize_profile info_name="그룹 기념일" />
          </div>
        </div>
        <div className="w-2/5 h-full flex items-center justify-center pr-3">
          <div className="w-full h-32 flex items-center justify-center rounded-md bg-violet-200 ">
            <Authorize_button />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start flex-col  col-span-2 row-span-5 col-start-1 row-start-4  bg-violet-100 rounded-md px-3 gap-2">
        <div className="w-24 h-8 flex justify-center items-center text-sm font-bold bg-violet-200  rounded-xl ">
          나의모임
        </div>
        <div className="w-full h-4/5 flex justify-center items-center flex-col gap-1">
          <Authorize_button />
        </div>
      </div>

      <div className="flex justify-center items-start flex-col col-span-2 row-span-4 col-start-3 row-start-1 bg-violet-100 rounded-md px-3 gap-2 pt-2">
        <div className="w-24 h-8 flex justify-center items-center text-sm font-bold bg-violet-200  rounded-xl ">
          친구 리스트
        </div>

        <div className="w-full h-4/5 flex justify-center items-center flex-col gap-1">
          <Authorize_button />
        </div>
      </div>

      <div className="flex justify-center items-start flex-col col-span-2 row-span-4 col-start-3 row-start-5 bg-violet-100 rounded-md px-3 gap-2 pt-2">
        <button className="w-24 h-8 flex justify-center items-center text-sm font-bold bg-violet-200  rounded-xl ">
          쪽지함
        </button>

        <div className="w-full h-4/5 flex justify-center items-center flex-col gap-1">
          <Authorize_button />
        </div>
      </div>
    </div>
  );
};

export default Myroom_authority;
