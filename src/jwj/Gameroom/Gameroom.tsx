import { sizes } from "../../styles/sizes";
import Gameroom_button from "./Gameroom_button";

const Gameroom = () => {
  //사이드바와 화면에 맞게 크기 조절을 위한
  const drawerWidth = sizes.drawerWidth;
  const style = {
    "--drawer-width": drawerWidth,
  } as React.CSSProperties;
  return (
    <div
      style={style}
      className="w-[calc(100vw-var(--drawer-width))] h-screen grid grid-cols-5 grid-rows-5 gap-4 p-5"
    >
      <div className="flex justify-center items-center col-span-5 bg-violet-100 rounded-md gap-7">
        <Gameroom_button name="사다리타기" />
        <Gameroom_button name="룰렛" />
        <Gameroom_button />
        <Gameroom_button />
        <Gameroom_button />
      </div>
      <div className="flex justify-center items-center col-span-5 row-span-4 row-start-2 bg-violet-100 rounded-md">
        게임공간
      </div>
    </div>
  );
};

export default Gameroom;
