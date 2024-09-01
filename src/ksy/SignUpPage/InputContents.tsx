import React from "react";
import InputProps from "./InputFunction/InputProps";
import { Box, Button, IconButton, Input, Typography } from "@mui/material";
import { theme } from "../../styles/colors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { fontSize } from "@mui/system";

const InputContents: React.FC<InputProps> = ({
  label,
  value,
  setValue,
  type = "text",
  isValid = true,
  validationMessage = "",
  showPasswordToggle = false,
  showPassword = false,
  togglePasswordVisibility,
  onBlur,
  onFocus,
  optional = false,
}) => {

    return (
        // Input Box (Contents)
        <Box
            sx={{
            width: "100%",
            paddingX: 3,
            paddingY: 1,
            marginBottom: 1.5,
            bgcolor: "#E5E5E5",
            color: "#23374D",
            borderRadius: 6
            }}>
            
            {/* 주석(선택) */}
            <Box display={"flex"}>
                <Typography display={"flex"} fontWeight={"bold"}>
                    {label}
                    {optional &&
                        <Typography
                            margin={0.3}
                            marginLeft={0.5}
                            color={"#23374D"}
                            fontSize={"small"}>(선택)
                        </Typography>}
                </Typography>

                {/* 유효성 검사 (빨간 글씨) */}
                <Typography
                    sx={{
                        margin: 0.3,
                        marginLeft: 0.7,
                        fontSize: 12,
                        color: !isValid ? theme.palette.error.main : theme.palette.text.secondary,
                    }}
                    className={`${!isValid ? 'text-red-500' : ''}`}>
                {!isValid && validationMessage}
                </Typography>
            </Box>
            
            <Box position={"relative"}>
                {/* Input 입력 창*/}
                <Input
                    type={showPasswordToggle && showPassword ? "text" : type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    sx={{
                        width: "100%",
                        outline: "none",
                        borderColor: "#23374D",
                        fontWeight: 500
                    }} />
                
                {/* 비밀번호 가시(on/off) 여부 */}
                {showPasswordToggle && togglePasswordVisibility && (
                <IconButton
                    type="button"
                        onClick={togglePasswordVisibility}
                        sx={{ position: "absolute", right: 5, bottom: 1, padding: 0.5, margin: 0.5, color: "#23374D"}}>
                        {showPassword ? (<VisibilityIcon sx={{ fontSize: 16 }}/>) : (<VisibilityOffIcon sx={{ fontSize: 16 }}/>)}
                </IconButton> )}
            </Box>
        </Box>
    );
};

export default InputContents;
