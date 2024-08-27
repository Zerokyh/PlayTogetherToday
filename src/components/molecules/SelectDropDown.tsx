import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
import { groupData } from "../../constants/groupData";

const SelectDropDown = () => {
  const [game, setGame] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setGame(event.target.value as string);
  };
  return (
    <FormControl
      sx={{
        my: 1,
        width: 114,
        height: 30, // FormControl의 높이 설정
        "& .MuiSelect-root": {
          height: "100%", // Select의 높이를 FormControl에 맞춤
          paddingTop: 0, // Padding 조정 (기본 값이 높이와 맞지 않기 때문)
          paddingBottom: 0,
        },
        "& .MuiInputLabel-root": {
          height: 30, // InputLabel의 높이 설정
          fontSize: 10, // InputLabel의 폰트 사이즈 설정
          lineHeight: "13px", // InputLabel의 수직 중앙 정렬
        },
      }}
      size="small"
    >
      <InputLabel
        id="group-select-label"
        size="small"
        sx={{ height: 30, fontSize: 10 }}
      >
        Select Group
      </InputLabel>
      <Select
        labelId="group-select-label"
        id="group-select"
        value={game}
        label="Select Group"
        onChange={handleChange}
        sx={{
          height: "100%", // Select의 높이를 FormControl에 맞춤
          paddingTop: 0, // Padding 조정
          paddingBottom: 0,
        }}
      >
        {groupData.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.group}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropDown;
