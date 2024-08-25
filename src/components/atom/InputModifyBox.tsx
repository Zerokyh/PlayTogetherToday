import * as React from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { InputModifyBoxProp } from "../../utils/type";

const InputModifyBox = ({
  type = "text",
  placeholder = "제목",
  width = "200px",
  sx,
}: InputModifyBoxProp) => {
  const [disabled, setDisabled] = React.useState(false);
  const handleChange = () => {
    setDisabled(!disabled);
  };
  return (
    <FormControl sx={{ m: 1, width: { width }, ...sx }} variant="standard">
      <InputLabel htmlFor="standard-adornment">{placeholder}</InputLabel>
      <Input
        id="standard-adornment-password"
        type={type}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle modify text"
              edge="end"
              onClick={handleChange}
            >
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
        disabled={disabled}
      />
    </FormControl>
  );
};

export default InputModifyBox;
