import { Box, TextField } from "@mui/material";
import { TextFieldBasicProps } from "../../utils/type";
import { InputMuiStyle } from "../../styles/mui";
import useThemeStore from "../../store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006DFF",
    },
    secondary: {
      main: "#FA9884",
    },
  },
});

const TextFieldBasic = ({ inputSubject }: TextFieldBasicProps) => {
  const { isTheme } = useThemeStore();
  const inputColor = isTheme === "클래식" ? "primary" : "secondary";
  return (
    <ThemeProvider theme={theme}>
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
          color={inputColor}
          sx={{ ...InputMuiStyle }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default TextFieldBasic;
