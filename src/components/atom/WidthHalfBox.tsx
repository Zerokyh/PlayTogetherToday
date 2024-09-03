import useThemeStore from "../../store/store";
import { Box } from "@mui/material";
import { WidthHalfBoxProps } from "../../utils/type";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

const WidthHalfBox = ({ children, sx }: WidthHalfBoxProps) => {
  const { isTheme } = useThemeStore();

  const WidthHalfBoxInnerMui = {
    width: "100%",
    height: "100%",
    bgcolor:
      isTheme == "클래식"
        ? colors.background.secondary
        : colors.sub_background.secondary,
    borderRadius: sizes.borderRadius.normal,
    display: "flex",
    flexDirection: "column",
    padding: sizes.padding.none,
    margin: 0,
  };

  return (
    <Box
      sx={{
        ...WidthHalfBoxInnerMui,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default WidthHalfBox;
