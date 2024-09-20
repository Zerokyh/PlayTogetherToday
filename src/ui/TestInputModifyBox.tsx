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
      <InputModifyBox
        type="text"
        placeholder="Enter text"
        value={value}
        onChange={handleChange}
        width="300px"
      />
    </Box>
  );
};

export default TestInputModifyBox;
