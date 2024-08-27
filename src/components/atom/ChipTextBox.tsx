import { theme } from "../../styles/colors";
import { Chip } from "@mui/material";
import { ChipTextBoxProps } from "../../utils/type";

const ChipTextBox = ({ titlename, width = "120px" }: ChipTextBoxProps) => {
  return (
    <Chip
      label={titlename}
      sx={{
        width: width,
        height: "40px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.dark,
        borderRadius: 50,
        fontWeight: 600,
      }}
    />
  );
};

export default ChipTextBox;
