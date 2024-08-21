import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";

const groupData = [
  { value: "", group: "선택안함" },
  { value: 1, group: "🎳볼링" },
  { value: 2, group: "🎲보드게임" },
  { value: 3, group: "⚽축구" },
  { value: 4, group: "📚독서" },
  { value: 5, group: "🎳🏃‍♂️런닝" },
];

const SelectDropDown = () => {
  const [game, setGame] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setGame(event.target.value as string);
  };
  return (
    <FormControl sx={{ my: 1, width: 114 }} size="small">
      <InputLabel id="group-select-label" size="small" sx={{ fontSize: 10 }}>
        Select Group
      </InputLabel>
      <Select
        labelId="group-select-label"
        id="group-select"
        value={game}
        label="Select Group"
        onChange={handleChange}
      >
        {groupData.map((item) => (
          <MenuItem value={item.value}>{item.group}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropDown;
