import { Box, createTheme } from "@mui/material";
import { useState } from "react";
import BorderProfile from "./BorderProfile";
import BorderDetailInfoImg from "./BorderDetailInfoImg";
import BorderParticipate from "./BorderParticipate";
import GroupMoneyCheck from "./GroupMoneyCheck";
import Announce from "./Announce";
import { sizes } from "../styles/sizes";

const BorderDetail = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: sizes.gap.mLarge,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50%",
            display: "flex",
            gap: "20px",
          }}
        >
          <Box sx={{ width: "33.33%", height: "100%" }}>
            <BorderProfile
              groupCategori="노래"
              groupLeaderName="허각"
              groupCount={7}
              groupName="MIC로 SOFT하게"
              groupProfileImgSrc="game.jpg"
            />
          </Box>
          <Box sx={{ width: "66.66%" }}>
            <BorderDetailInfoImg></BorderDetailInfoImg>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "50%",
            display: "flex",
            gap: sizes.gap.large,
          }}
        >
          <Box
            sx={{
              width: "33.33%",
              height: "100%",
            }}
          >
            <BorderParticipate
              groupName="MIC로 SOFT하게"
              count={8}
              allCount={12}
            ></BorderParticipate>
          </Box>
          <Box
            sx={{
              width: "33.33%",
            }}
          >
            <GroupMoneyCheck></GroupMoneyCheck>
          </Box>
          <Announce></Announce>
        </Box>
      </Box>
    </>
  );
};

export default BorderDetail;
