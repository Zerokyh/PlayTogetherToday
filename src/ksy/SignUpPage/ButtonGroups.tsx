// ButtonGroups.tsx
import { Box, Button } from "@mui/material";
import { sizes } from "../../styles/sizes";
import { colors } from "../../styles/colors";

interface ButtonGroupsProps {
  isTheme: string;
  onJoin: () => void;
  onCancel: () => void;
}

const ButtonGroups = ({ isTheme, onJoin, onCancel }: ButtonGroupsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: sizes.padding.xlarge,
        gap: 3,
      }}
    >
      <Button
        onClick={onJoin}
        sx={{
          width: "100px",
          height: 45,
          bgcolor:
            isTheme === "기본"
              ? colors.background.button
              : colors.sub_background.button,
          color: colors.text.secondary,
          fontSize: sizes.fontSize.normal,
          borderRadius: sizes.borderRadius.normal,
        }}
      >
        가입하기
      </Button>
      <Button
        onClick={onCancel}
        sx={{
          width: "100px",
          height: 45,
          bgcolor:
            isTheme === "기본"
              ? colors.background.drawer
              : colors.sub_background.drawer,
          color: colors.text.primary,
          fontSize: sizes.fontSize.normal,
          borderRadius: sizes.borderRadius.normal,
        }}
      >
        취소
      </Button>
    </Box>
  );
};

export default ButtonGroups;
