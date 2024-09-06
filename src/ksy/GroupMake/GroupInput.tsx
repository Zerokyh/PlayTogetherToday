import { Box } from "@mui/system";
import GroupMake_Setting from "./GroupMake_Setting";
import GroupMake_Input from "./GroupMake_Input";
import { sizes } from "../../styles/sizes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";

const GroupInput = () => {
      // 화면 크기 조절을 위한
  const drawerWidth = sizes.drawerWidth;

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
        // {/* Input Group */}
        <Box
          sx={{
            width: "60%",
            padding: 0
          }}>
          
          {/* 모임 이름 설정 */}
          <Box
            sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting text="모임 이름을 설정해주세요*" />
            <GroupMake_Input validation={true} />
          </Box>

          {/* 모임 타입 설정 */}
          <Box
            sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting text="모임 타입을 설정해주세요*"
              feature="(추후 변경 가능)" />
            <GroupMake_Input validation={true} />
          </Box>

          {/* 모임 호스트 설정 */}
          <Box
            sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5}}>
            <GroupMake_Setting text="모임 호스트" />
            <GroupMake_Input />
          </Box>

          {/* 모임 가입 암호 설정 */}
          <Box
            sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting text="모임 가입 암호 설정*" feature=" (영문 대소문자, 특수기호, 포함 8자리 이상)" />
            <Typography
              sx={{
                fontSize: "10px",
                color: isPasswordValid && hasBlurred ? "green" : "red",
              }}
            >
              {isPasswordValid && hasBlurred ? "올바른 비밀번호" : "올바른 비밀번호가 아닙니다"}
            </Typography>
            <TextField
              type="password"
              value={password}
              onBlur={handleBlur}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              variant="standard"
              fullWidth
              sx={{
                backgroundColor: "#E5E5E5",
                outline: "none",
                borderBottom: "1px solid black",
                fontSize: "10px",
              }}
            />
          </Box>

          {/* 모임 총무 설정 */}
          <Box sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting text="모임 총무" feature="(선택)" />
            <GroupMake_Input />
          </Box>

          {/* 모임 기념일 설정 */}
          <Box sx={{ bgcolor: "#E5E5E5", p: 2, borderRadius: 6, marginY: 1.5 }}>
            <GroupMake_Setting
              text="모임 기념일 설정"
              feature="(미 설정시 모임시작일로 자동설정, 추후 변경가능)"
            />
            <GroupMake_Input />
          </Box>
        </Box>
    )
}