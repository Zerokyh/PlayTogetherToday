import { Typography } from "@mui/material";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

const GroupMake_Title = () => {
  const { isTheme } = useThemeStore();

  return (
    <Typography
      sx={{
          width: "500px",
          height: "40px",
          padding: sizes.padding.xlarge,
          marginBottom: 1,
          bgcolor:
            isTheme == "기본"
            ? colors.background.tertiary
            : colors.sub_background.tertiary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: sizes.fontSize.large,
          color: colors.text.primary,
          borderRadius: sizes.borderRadius.normal,
      }}>
      새로운 인연이 시작되고 있어요 (모임장만 가능)
    </Typography>
  );
};

export default GroupMake_Title;