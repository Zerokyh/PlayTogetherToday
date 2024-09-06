import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

import { colors } from "../styles/colors";
import { sizes } from "../styles/sizes";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import GetMember from "./GetMember";

type ParticipateListProps = {
  memberName?: string;
  memberPosition?: string;
  profileImgSrc?: string;
  participate?: Boolean;
};

const ParticipateList = ({
  participate,
  memberName,
  memberPosition,
  profileImgSrc,
}: ParticipateListProps) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <GetMember
        memberName={memberName}
        memberPosition={memberPosition}
        profileImgSrc={profileImgSrc}
      />
      <Typography
        sx={
          participate
            ? {
                fontWeight: "600",
                width: "20%",
                textAlign: "center",
                margin: "auto",
              }
            : {
                fontWeight: "600",
                color: colors.text.grey,
                width: "20%",
                textAlign: "center",
                margin: "auto",
              }
        }
        variant="inherit"
      >
        {participate ? "참석" : "미참"}
      </Typography>
    </Box>
  );
};

export default ParticipateList;
