import { Box, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Categori from "./Categori";
import RegisterButton from "./RegisterButton";
import BorderList from "./BorderList";
import TopFirst from "./TopFirst";
import TopSecond from "./TopSecond";
import TopThird from "./TopThird";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#F3EAFB",
      // dark: "#ddc6f5",
      main: "#EADDFF",
      light: "#FEF7FF",
      dark: "#3A1B71",
    },
  },
});

const Border = () => {
  const [categori, setCategori] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategori(event.target.value as string);
  };

  return (
    <>
      <div className="flex w-full h-full px-5">
        <div className="w-full mx-3 mt-4 flex gap-10">
          {/* 첫번째 박스 */}
          <div className="w-6/12 h-full ">
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  width: "100%",
                  height: 700,
                  borderRadius: 4,
                  bgcolor: "primary.main",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  paddingX: "12px",
                }}
              >
                <div className="w-full text-3xl pt-5">
                  <p>다양한 모임들이 있어요~</p>
                </div>
                <div className="w-full flex justify-between">
                  <div className="w-2/6">
                    <Categori></Categori>
                  </div>
                  <RegisterButton></RegisterButton>
                </div>
                <div className="w-full flex flex-col items-center">
                  <BorderList></BorderList>
                </div>
              </Box>
            </ThemeProvider>
          </div>
          {/* 두번째 박스 */}
          <div className="w-6/12 h-full ">
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  width: "100%",
                  height: 700,
                  borderRadius: 4,
                  bgcolor: "primary.main",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  paddingX: "12px",
                }}
              >
                <div className="w-full text-3xl pt-5">
                  <p>추천 모임 TOP3</p>
                </div>
                <div className="w-full h-2/5 ">
                  <TopFirst></TopFirst>
                </div>
                <div className="w-full h-2/5 flex gap-4 justify-between">
                  <TopSecond></TopSecond>
                  <TopThird></TopThird>
                </div>
              </Box>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Border;
