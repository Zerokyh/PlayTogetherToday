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
          <MenuItem key={item.value} value={item.value}>
            {item.group}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropDown;
