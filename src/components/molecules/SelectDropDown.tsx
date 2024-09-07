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
        width: 124,
        height: 30,
        "& .MuiSelect-root": {
          height: "100%",
          paddingTop: 0,
          paddingBottom: 0,
        },
        "& .MuiInputLabel-root": {
          height: 30,
          fontSize: 10,
          lineHeight: "13px",
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
          height: "100%",
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        {Object.entries(groupData).map(([key, item]) => (
          <MenuItem key={item.value} value={item.value}>
            {item.group}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropDown;
