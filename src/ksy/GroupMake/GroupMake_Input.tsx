import { Input } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

type GroupMake_Input_props = {
  validation?: boolean;
};

const GroupMake_Input = ({ validation = false }: GroupMake_Input_props) => {
  const [text, setText] = useState<string>("");

  return validation ? (
    <Box>
      {/* 입력완료 유효성 문구 */}
      <Box
        sx={{ fontSize: 12 }}
        className={`${text ? "text-green-500" : "text-red-500"}`}
      >
        {text ? "입력완료" : ""}
      </Box>

      {/* Input Style (모임이름, 모임타입) */}
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
            width: "100%",
            bgcolor: "#E5E5E5",
            color: "#23374D",
            borderRadius: 6
            }}/>
    </Box>
  ) : (
    // Input Style (모임 호스트, 총무, 기념일)
      <Input
        sx={{
            width: "100%",
            bgcolor: "#E5E5E5",
            color: "#23374D",
            borderRadius: 6
            }}/>
  );
};

export default GroupMake_Input;
