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
import { InputModifyBoxProp } from "../../utils/type";

const InputModifyBox = ({
  type = "text",
  placeholder = "제목",
  width = "200px",
  sx,
}: InputModifyBoxProp) => {
  const [disabled, setDisabled] = React.useState(false);

  // 고정된 색상 설정
  const inputColor = "#23374D";

  const handleChange = () => {
    setDisabled(!disabled);
  };

  return (
    <FormControl sx={{ m: 1, width: { width }, ...sx }} variant="standard">
      <InputLabel
        htmlFor="standard-adornment"
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
        id="standard-adornment-password"
        type={type}
        sx={{
          color: inputColor, // 입력 텍스트 색상 설정
          "&:before": {
            borderBottom: `1px solid ${inputColor} !important`, // 기본 상태 밑줄 색상
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: `2px solid ${inputColor} !important`, // 호버 시 밑줄 색상
          },
          "&:after": {
            borderBottom: `2px solid ${inputColor} !important`, // 포커스 후 밑줄 색상
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle modify text"
              edge="end"
              onClick={handleChange}
            >
              {disabled ? <LockPersonIcon /> : <LockOpenIcon />}
            </IconButton>
          </InputAdornment>
        }
        disabled={disabled}
      />
    </FormControl>
  );
};

export default InputModifyBox;
