import * as React from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { InputModifyBoxProp } from "../../../utils/type";
import { InputMuiStyle } from "../../../styles/mui";

const inputColor = "#23374D";

const InputModifyBox = ({
  type = "text",
  placeholder,
  value,
  width = "200px",
  sx,
  onChange,
  disabled,
  onToggle,
}: InputModifyBoxProp & { disabled: boolean; onToggle: () => void }) => {
  const [localValue, setLocalValue] = React.useState(value);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setLocalValue(newValue);
    if (onChange) {
      onChange(event); // 새로 입력된 값을 직접 전달
    }
  };

  return (
    <FormControl sx={{ m: 1, width: { width }, ...sx }} variant="standard">
      <InputLabel
        sx={{
          color: `${inputColor} !important`, // 기본 및 포커스 시 레이블 색상
          "&.Mui-focused": {
            color: `${inputColor} !important`, // 포커스 시 레이블 색상
          },
          "&.MuiInputLabel-shrink": {
            color: `${inputColor} !important`, // 필드에 값이 입력되었을 때의 레이블 색상
          },
        }}
      >
        {placeholder}
      </InputLabel>
      <Input
        value={localValue}
        type={type}
        onChange={handleChange}
        sx={InputMuiStyle}
        disabled={disabled}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle modify text"
              edge="end"
              onClick={onToggle}
            >
              {disabled ? <LockPersonIcon /> : <LockOpenIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default InputModifyBox;
