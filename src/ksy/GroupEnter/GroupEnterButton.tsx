import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

const GroupEnterButton = () => {
  const { isTheme } = useThemeStore();
  const navigate = useNavigate();

  const handledeleteID = () => {
    alert("정말 탈퇴하시겠습니까?");
    navigate("/");
  }

  const handleJoinRequest = () => {
    alert("모임 가입이 요청되었습니다!");
    // 쪽지함으로 이동하도록 수정하기
    navigate("/Myroom");
  }

  return (
    <Box width={sizes.width.block}>
      <Box
        display={"flex"}
        justifyContent={"end"}
      >
        <Button
          sx={{
            width: "75px",
            height: "20px",
            fontWeight: "bold",
            fontSize: sizes.fontSize.small,
            color: colors.text.primary,
          }}
          onClick={() => navigate("/GroupMake")}
        >
          새로운 모임
        </Button>
        <Button
          onClick={handledeleteID}
          sx={{
            width: "75px",
            height: "20px",
            fontWeight: "bold",
            fontSize: sizes.fontSize.small,
            color: colors.text.primary,
          }}
        >
          회원탈퇴
        </Button>
      </Box>

      {/* Join Request Button */}
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          onClick={handleJoinRequest}
          sx={{
            width: "450px",
            height: "44px",
            marginTop: 3,
            bgcolor:
            isTheme == "기본"
            ? colors.background.button
            : colors.sub_background.button,
            color: colors.text.secondary,
            fontSize: sizes.fontSize.large,
            borderRadius: sizes.borderRadius.medium,
          }}>
          모임 가입 요청
        </Button>
      </Box>
    </Box>
  );
};
export default GroupEnterButton;
