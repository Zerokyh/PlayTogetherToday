import { Button } from "@mui/material";

type GroupEnterButton_props = {
  text: string;
};

const GroupEnterButton = ({ text }: GroupEnterButton_props) => {
  return <Button sx={{ fontSize: "6px" }}>{text}</Button>;
};
export default GroupEnterButton;
