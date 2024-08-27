import { Button } from "@mui/material";

type GroupEnterButton_props = {
  text: string;
  onClick?: () => void;
};

const GroupEnterButton = ({ text, onClick }: GroupEnterButton_props) => {
  return (
    <Button sx={{ fontSize: "6px" }} onClick={onClick}>
      {text}
    </Button>
  );
};
export default GroupEnterButton;
