import { colors } from "../../styles/colors";
import { Chip } from "@mui/material";
import { ChipTextBoxProps } from "../../utils/type";
import useThemeStore from "../../store/store";

const ChipTextBox = ({ titlename, width = "120px" }: ChipTextBoxProps) => {
  const { isTheme } = useThemeStore();

  const backgroundColor =
    isTheme === "기본"
      ? colors.background.button
      : colors.sub_background.button;
  return (
    <Chip
      label={titlename}
      sx={{
        width: width,
        height: "40px",
        backgroundColor: backgroundColor,
        color: colors.text.secondary,
        borderRadius: 50,
        fontWeight: 600,
      }}
    />
  );
};

export default ChipTextBox;
