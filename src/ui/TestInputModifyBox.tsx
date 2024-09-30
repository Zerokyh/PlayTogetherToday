import * as React from "react";
import { Box } from "@mui/material";
import InputModifyBox from "../components/atom/Input/InputModifyBox";

const TestInputModifyBox = () => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Value Changed:", event.target.value);
    setValue(event.target.value);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* 데이터는 placeholder로 넘기고 value는 빈 값으로 테스트 */}
      <InputModifyBox
        type="text"
        value={value}
        onChange={handleChange}
        width="300px"
      />
    </Box>
  );
};

export default TestInputModifyBox;
