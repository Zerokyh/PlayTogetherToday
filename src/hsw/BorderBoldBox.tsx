import { Box, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3EAFB",
      dark: "#ddc6f5",
    },
  },
});

const BorderBoldBox = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 4,
            bgcolor: "primary.dark",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            paddingX: "12px",
          }}
        ></Box>
      </ThemeProvider>
    </>
  );
};

export default BorderBoldBox;
