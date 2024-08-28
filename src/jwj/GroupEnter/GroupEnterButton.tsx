import { Button } from "@mui/material";
import { sizes } from "../../styles/sizes";

type GroupEnterButton_props = {
  text: string;
  onClick?: () => void;
};

const GroupEnterButton = ({ text, onClick }: GroupEnterButton_props) => {
  return (
    <Button sx={{ fontSize: sizes.fontSize.xsmall }} onClick={onClick}>
      {text}
    </Button>
  );
};
export default GroupEnterButton;
