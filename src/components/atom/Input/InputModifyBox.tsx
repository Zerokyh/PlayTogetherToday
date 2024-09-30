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
  disabled, // disabled 상태를 부모 컴포넌트에서 받아옴
  onToggle, // Toggle을 위한 콜백 함수
}: InputModifyBoxProp) => {
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
        value={value}
        type={type}
        onChange={onChange}
        sx={InputMuiStyle}
        inputProps={{ autoComplete: "off" }}
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
