import { Switch } from "@mui/material";
import { theme } from "../../styles/colors";
import { SwitchBoxProp } from "../../utils/type";

const SwitchBox = ({ color = "primary", checked, onChange }: SwitchBoxProp) => {
  const switchColors = {
    primary: {
      track: checked ? theme.palette.primary.dark : "grey",
      thumb: checked ? theme.palette.primary.dark : "white",
    },
    secondary: {
      track: checked ? theme.palette.secondary.main : "grey",
      thumb: checked ? theme.palette.secondary.main : "white",
    },
  };
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      sx={{
        "& .MuiSwitch-switchBase": {
          color: switchColors[color].thumb,
          "&.Mui-checked": {
            color: switchColors[color].thumb,
            "& + .MuiSwitch-track": {
              backgroundColor: switchColors[color].track,
            },
          },
        },
        "& .MuiSwitch-track": {
          backgroundColor: switchColors[color].track,
        },
      }}
    />
  );
};
export default SwitchBox;
