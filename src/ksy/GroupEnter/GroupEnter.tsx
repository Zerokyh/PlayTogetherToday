import { ButtonGroup } from "@mui/material";
import GroupEnterText from "./GroupEnterText";
import GroupEnterButton from "./GroupEnterButton";
import { sizes } from "../../styles/sizes";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const GroupEnter = () => {
  const navigate = useNavigate();
  //화면크기 조절을 위한
  const drawerWidth = sizes.drawerWidth;
  const style = {
    "--drawer-width": drawerWidth,
  } as React.CSSProperties;

  return (
    <Box
      style={style}
      className="w-[calc(100vw-var(--drawer-width))] h-screen flex justify-center items-center flex-col gap-5"
    >
      <GroupEnterText text="모임이름" />
      <GroupEnterText text="모임 가입 암호(탈퇴시 입력 안함)" />

      <Box>
        <ButtonGroup
          sx={{ width: "400px", fontSize: "5px" }}
          variant="outlined"
          aria-label="Basic button group"
          className=" flex justify-center items-center"
        >
          <GroupEnterButton text="모임가입 요청" />
          <GroupEnterButton text="QR코드로 가입" />
          <GroupEnterButton
            text="새로운 모임"
            onClick={() => {
              navigate("/GroupMake");
            }}
          />
          <GroupEnterButton text="모임 탈퇴" />
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default GroupEnter;
