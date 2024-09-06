import { BorderListBox, GroupFirstBorder } from "../styles/mui";
import Categori from "./Categori";
import RegisterButton from "./RegisterButton";
import BorderList from "./BorderList";
import { Box, Typography } from "@mui/material";
import TopBox from "./TopBox";

type BorderGroupSecondBoxProps = {
  title?: string;
};

const BorderGroupSecondBox = ({ title }: BorderGroupSecondBoxProps) => {
  return (
    <BorderListBox>
      <GroupFirstBorder>
        <Typography variant="h5">{title}</Typography>
      </GroupFirstBorder>

      <Box sx={{ width: "100%", height: "40%" }}>
        <TopBox rank="TOP1" src="group.jpg"></TopBox>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "40%",
          display: "flex",
          gap: "16px",
          justifyContent: "space-between",
        }}
      >
        <TopBox rank="TOP2" src="private.jpg"></TopBox>
        <TopBox rank="TOP3" src="game.jpg"></TopBox>
      </Box>
    </BorderListBox>
  );
};
export default BorderGroupSecondBox;
