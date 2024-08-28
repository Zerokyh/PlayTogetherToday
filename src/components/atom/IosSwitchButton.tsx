import { FormControlLabel } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

// 색상 타입 정의
type SwitchColor = "primary" | "secondary" | "success";

// Switch의 스타일을 정의하는 함수
const IOSSwitch = styled(Switch, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "checked",
})<{ color?: SwitchColor; checked?: boolean }>(
  ({ theme, color = "primary", checked }) => {
    const switchColors = {
      primary: {
        track: checked ? theme.palette.primary.dark : "grey",
        thumb: checked ? "white" : theme.palette.primary.dark,
      },
      secondary: {
        track: checked ? theme.palette.secondary.main : "grey",
        thumb: checked ? "white" : theme.palette.secondary.main,
      },
      success: {
        track: checked ? "#4CAF50" : "grey", // 커스텀 해야 할 부분
        thumb: checked ? "white" : "#4CAF50", // 커스텀 해야 할 부분
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
          color: switchColors[color]?.thumb || switchColors.primary.thumb,
          "& + .MuiSwitch-track": {
            backgroundColor:
              switchColors[color]?.track || switchColors.primary.track,
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
        backgroundColor:
          switchColors[color]?.track || switchColors.primary.track,
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
          duration: 500,
        }),
      },
    };
  }
);

const IosSwitchButton = ({
  color = "primary",
  checked,
  onChange,
}: {
  color?: SwitchColor;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <FormControlLabel
      control={
        <IOSSwitch color={color} checked={checked} onChange={onChange} />
      }
      label
    />
  );
};

export default IosSwitchButton;
