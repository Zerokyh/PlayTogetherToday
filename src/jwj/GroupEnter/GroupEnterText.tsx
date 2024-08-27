import { TextField } from "@mui/material";

type GroupEnterText_props = {
  text: string;
};

const GroupEnterText = ({ text }: GroupEnterText_props) => {
  return (
    <TextField
      sx={{ width: "300px" }}
      id="outlined-search"
      label={text}
      type="search"
    />
  );
};

export default GroupEnterText;
