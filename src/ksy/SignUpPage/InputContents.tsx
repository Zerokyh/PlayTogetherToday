// InputContents.tsx
import React from "react";
import InputProps from "./InputFunction/InputProps";
import { Box, IconButton, Input, Typography } from "@mui/material";
import { colors, theme } from "../../styles/colors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useThemeStore from "../../store/store";
import { sizes } from "../../styles/sizes";

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
  optionalText = "",
}) => {
    const { isTheme } = useThemeStore();

    return (
        // Input Box (Contents)
        <Box
            sx={{
            width: "100%",
            padding: sizes.padding.xlarge,
            marginBottom: 1,
            bgcolor:
                isTheme == "기본"
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            color: colors.text.primary,
            borderRadius: sizes.borderRadius.normal
            }}>
            
            {/* Optional Setting */}
            <Box display={"flex"}>
                <Typography display={"flex"} fontWeight={"bold"}>
                    {label}
                    {optional && (
                        <>
                            <Typography
                                marginTop={sizes.margin.small}
                                marginLeft={sizes.margin.large}
                                color={colors.text.grey}
                                fontSize={sizes.fontSize.xsmall}>
                            </Typography>
                            {optionalText && (
                                <Typography
                                    marginTop={sizes.margin.small}
                                    color={colors.text.grey}
                                    fontSize={sizes.fontSize.xsmall}>
                                    {optionalText}
                                </Typography>
                            )}
                        </>
                    )}
                </Typography>

                {/* validationMessage (red color) */}
                <Typography
                    sx={{
                        marginTop: sizes.margin.small,
                        marginLeft: sizes.margin.large,
                        fontSize: sizes.fontSize.xsmall,
                        color: !isValid ? theme.palette.error.main : theme.palette.text.secondary,
                    }}
                    className={`${!isValid ? 'text-red-500' : ''}`}>
                {!isValid && validationMessage}
                </Typography>
            </Box>
            
            <Box position={"relative"}>
                {/* Input form*/}
                <Input
                    type={showPasswordToggle && showPassword ? "text" : type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    sx={{
                        width: "100%",
                        outline: "none",
                        borderColor: colors.border.primary,
                    }} />
                
                {/* Show password icon */}
                {showPasswordToggle && togglePasswordVisibility && (
                <IconButton
                    type="button"
                    onClick={togglePasswordVisibility}
                        sx={{
                            position: "absolute",
                            right: sizes.margin.small,
                            bottom: sizes.margin.small,
                            padding: sizes.padding.medium,
                            color: colors.text.primary
                        }}>
                        {showPassword
                            ? (<VisibilityIcon
                                sx={{ fontSize: sizes.fontSize.medium }} />) 
                            : (<VisibilityOffIcon
                                sx={{ fontSize: sizes.fontSize.medium }} />)}
                </IconButton> )}
            </Box>
        </Box>
    );
};

export default InputContents;
