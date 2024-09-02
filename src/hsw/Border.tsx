import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Categori from "./Categori";
import RegisterButton from "./RegisterButton";
import BorderList from "./BorderList";
import TopFirst from "./TopFirst";
import TopSecond from "./TopSecond";
import TopThird from "./TopThird";
import { colors, theme } from "../styles/colors";
import { BorderListBox } from "../styles/mui";

const Border = () => {
  const [categori, setCategori] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategori(event.target.value as string);
  };

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <div className="w-full h-full flex px-5">
          <div className="w-full mx-3 mt-4 flex gap-10">
            {/* 첫번째 박스 */}
            <div className="w-6/12 h-full ">
              <BorderListBox>
                <div className="w-full text-2xl pt-5">
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
              </BorderListBox>
            </div>
            {/* 두번째 박스 */}
            <div className="w-6/12 h-full ">
              <BorderListBox>
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
              </BorderListBox>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Border;
