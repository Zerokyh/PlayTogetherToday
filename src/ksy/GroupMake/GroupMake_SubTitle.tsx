import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../styles/colors";
import useThemeStore from "../../store/store";
import { sizes } from "../../styles/sizes";

const GroupMake_SubTitle = () => {
  const { isTheme } = useThemeStore();
  const navigate = useNavigate();

  return (
    <Typography
        onClick={() => navigate("/GroupEnter")}
        sx={{
          cursor: "pointer",
          "&:hover": { textDecoration: "underline" },
          width: "500px",
          height: "40px",
          paddingX: sizes.padding.xlarge,
          paddingY: sizes.padding.large,
          marginBottom: "25px",
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
        모임에 초대받았어요
      </Typography>
  );
};

export default GroupMake_SubTitle;