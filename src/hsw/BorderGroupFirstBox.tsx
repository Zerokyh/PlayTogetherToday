import { BorderListBox, GroupFirstBorder } from "../styles/mui";
import Categori from "./Categori";
import RegisterButton from "./RegisterButton";
import BorderList from "./BorderList";
import { Box, Typography } from "@mui/material";

type BorderGroupFirstBoxProps = {
  title?: string;
};

const BorderGroupFirstBox = ({ title }: BorderGroupFirstBoxProps) => {
  return (
    <BorderListBox>
      <GroupFirstBorder>
        <Typography variant="h5">{title}</Typography>
      </GroupFirstBorder>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "33%" }}>
          <Categori></Categori>
        </Box>
        <RegisterButton></RegisterButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <BorderList></BorderList>
      </Box>
    </BorderListBox>
  );
};
export default BorderGroupFirstBox;
