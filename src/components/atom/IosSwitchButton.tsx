import { FormControlLabel } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { IosSwitchButtonProps } from "../../utils/type";

// Switch 컴포넌트의 스타일을 지정하는 함수
const IOSSwitch = styled(
  (
    props: SwitchProps & { color?: "primary" | "secondary"; checked?: boolean }
  ) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  )
)(
  ({
    theme,
    color = "primary",
    checked,
  }: {
    theme: Theme;
    color?: "primary" | "secondary";
    checked?: boolean;
  }) => {
    const switchColors = {
      primary: {
        track: checked ? theme.palette.primary.dark : "grey",
        thumb: checked ? "white" : theme.palette.primary.dark,
      },
      secondary: {
        track: checked ? theme.palette.secondary.main : "grey",
        thumb: checked ? "white" : theme.palette.secondary.main,
      },
    };

    return {
      width: 42,
      height: 26,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: "translateX(16px)",
          color: switchColors[color].thumb,
          "& + .MuiSwitch-track": {
            backgroundColor: switchColors[color].track,
          },
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
      },
      "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: switchColors[color].track,
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
          duration: 500,
        }),
      },
    };
  }
);

// IosSwitchButton 컴포넌트
const IosSwitchButton = ({
  text,
  color = "primary",
  checked,
  onChange,
}: IosSwitchButtonProps) => {
  return (
    <FormControlLabel
      control={
        <IOSSwitch color={color} checked={checked} onChange={onChange} />
      }
      label={text}
    />
  );
};

export default IosSwitchButton;
