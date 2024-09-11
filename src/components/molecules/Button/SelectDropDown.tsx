import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
import { groupData } from "../../../constants/groupData";
import { sizes } from "../../../styles/sizes";

const SelectDropDown = () => {
  const [group, setGroup] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as string);
  };
  return (
    <FormControl
      sx={{
        my: 1,
        width: 130,
        height: 24,
        "& .MuiSelect-root": {
          height: "100%",
          display: "flex",
          alignItems: "center",
        },
        "& .MuiInputLabel-root": {
          height: 10,
          fontSize: sizes.fontSize.small,
          lineHeight: "24px",

          display: "flex",
          alignItems: "center",
        },
      }}
      size="small"
    >
      <InputLabel
        id="group-select-label"
        size="small"
        sx={{
          height: 24,
        }}
      >
        그룹을 선택해주세요
      </InputLabel>
      <Select
        labelId="group-select-label"
        id="group-select"
        value={group}
        label="Select Group"
        onChange={handleChange}
        sx={{
          height: "100%",
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        {Object.entries(groupData).map(([key, item]) => (
          <MenuItem key={key} value={item.value}>
            {item.group}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropDown;
