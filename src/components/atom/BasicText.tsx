import { Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import { colors } from "../../styles/colors";

type fontSize = keyof typeof sizes.fontSize;
type fontColor = keyof typeof colors.text;

type BasicTextProps = {
  text?: string;
  fontsize?: fontSize;
  fontcolor?: fontColor;
};

const BasicText = ({
  text,
  fontsize = "small",
  fontcolor = "primary",
}: BasicTextProps) => {
  return (
    <Typography sx={{ fontSize: fontsize, color: fontcolor }}>
      {text}
    </Typography>
  );
};

export default BasicText;
