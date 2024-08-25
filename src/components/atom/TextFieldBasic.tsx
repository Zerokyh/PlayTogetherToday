import { Box, TextField } from "@mui/material";
import { theme } from "../../styles/colors";
import { TextFieldBasicProps } from "../../utils/type";
import { InputMuiStyle } from "../../styles/mui";

const TextFieldBasic = ({ inputSubject }: TextFieldBasicProps) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "200px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label={inputSubject}
        variant="standard"
        color="primary"
        sx={{ ...InputMuiStyle }}
      />
    </Box>
  );
};

export default TextFieldBasic;
