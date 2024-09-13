import { Box, IconButton, Input, Typography } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { isGroupPasswordValid } from "../GroupMake/GroupMakeFuction/JoinValidation";
import useThemeStore from "../../store/store";
import { colors, theme } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

const GroupEnterText = () => {
  const { isTheme } = useThemeStore();
  const [groupName, setGroupName] = useState<string>("");
  const [groupPassword, setGroupPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setGroupPassword(password);
    setIsPasswordValid(isGroupPasswordValid(password));
  };

  return (
    <Box
      width={sizes.width.block}
      padding={sizes.padding.small}
      display={"flex"}
      flexDirection={"column"}
      gap={sizes.gap.normal}
    >
      {/* Group Name Input Box */}
      <Box
        sx={{
          width: "100%",
          padding: sizes.padding.xlarge,
          marginBottom: 1,
          bgcolor:
            isTheme == "기본"
            ? colors.background.secondary
            : colors.sub_background.secondary,
          color: colors.text.primary,
          borderRadius: sizes.borderRadius.normal
        }}
      >
        {/* Group Name Title */}
        <Typography fontWeight={"bold"}>모임 이름*</Typography>

        {/* Group Name Input */}
        <Input
          placeholder="필수 입력"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          sx={{
            width: "100%",
            outline: "none",
          }}
        />
      </Box>

      {/* Group Password Input Box */}
      <Box
        sx={{
          width: "100%",
          padding: sizes.padding.xlarge,
          marginBottom: 1,
          bgcolor:
            isTheme == "기본"
            ? colors.background.secondary
            : colors.sub_background.secondary,
          color: colors.text.primary,
          borderRadius: sizes.borderRadius.normal
        }}
      >
        <Box display={"flex"}>
          {/* Group Password Title */}
          <Typography fontWeight={"bold"}>모임 가입 암호*</Typography>
          {/* Validation Message */}
          {!isPasswordValid && (
            <Typography
              sx={{
                fontSize: sizes.fontSize.xsmall,
                color: "text-red-500",
                marginTop: sizes.margin.small,
                marginLeft: sizes.margin.xlarge
              }}>
              올바른 암호가 아닙니다 (영문, 숫자, 또는 영문/숫자 + 특수기호)
            </Typography>
          )}
        </Box>

        {/* Group Password Input */}
        <Box position={"relative"}>
          <Input
            placeholder="영문 / 숫자 / 영문 또는 숫자 + 특수기호"
            type={showPassword ? "text" : "password"}
            value={groupPassword}
            onChange={handlePasswordChange}
            sx={{
              width: "100%",
              outline: "none",
            }}
          />

          {/* Show PW icon */}
          <IconButton
            type="button"
            onClick={togglePasswordVisibility}
            sx={{
             position: "absolute",
              right: sizes.margin.small,
              bottom: sizes.margin.small,
              padding: sizes.padding.small,
              margin: sizes.margin.small,
              color: colors.text.primary
            }}>
            {showPassword
              ? <VisibilityIcon sx={{ fontSize: sizes.fontSize.medium }} />
              : <VisibilityOffIcon sx={{ fontSize: sizes.fontSize.medium }} />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupEnterText;
