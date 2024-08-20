import { Button } from "@mui/material";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

type LinkedButtonProps = {
  text: string;
};

const LinkedButton = ({ text }: LinkedButtonProps) => {
  return (
    <Button
      sx={{
        width: 100,
        height: 40,
        color: colors.text.drawer,
        fontWeight: 600,
        border: `1px solid ${colors.border.drawer}`,
        fontSize: sizes.fontSize.small,
      }}
    >
      {text}
    </Button>
  );
};

export default LinkedButton;
