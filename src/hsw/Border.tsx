import { Box, Container, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { BorderListBox, BorderSetBox, GroupFirstBorder } from "../styles/mui";
import BorderGroupFirstBox from "./BorderGroupFirstBox";
import BorderGroupSecondBox from "./BorderGroupSecondBox";

const Border = () => {
  const [categori, setCategori] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategori(event.target.value as string);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "20px",
          }}
        >
          {/* FirstBox */}
          <BorderSetBox>
            <BorderGroupFirstBox title="다양한 모임들이 있어요~"></BorderGroupFirstBox>
          </BorderSetBox>
          {/* SecondBox */}
          <BorderSetBox>
            <BorderListBox>
              <BorderGroupSecondBox title="추천 모임 TOP3"></BorderGroupSecondBox>
            </BorderListBox>
          </BorderSetBox>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Border;
